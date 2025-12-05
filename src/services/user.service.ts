import { User } from "../data/data";
import { CreateUserDto, UpdateUserDto } from "../dtos/user.dto";
import { TApiResponse } from "../types/ApiResponse";

export class UserService {
  users: User[];

  constructor(users: User[]) {
    this.users = users;
  }

  findAll(): TApiResponse<User[]> {
    try {
      const users = this.users;

      return {
        code: 200,
        error: false,
        message: "Users retrieved successfully",
        data: users,
      };
    } catch (error: any) {
      return {
        code: 500,
        error: false,
        message: `Unexpected error: ${error.message}`,
      };
    }
  }

  findOne(id: string): TApiResponse<User> {
    try {
      const user = this.users.find((u) => u.id === id);

      if (!user) {
        return {
          code: 404,
          error: true,
          message: "Users not found",
        };
      }

      return {
        code: 200,
        error: false,
        message: "User found!",
        data: user,
      };
    } catch (error: any) {
      return {
        code: 500,
        error: false,
        message: `Unexpected error: ${error.message}`,
      };
    }
  }

  createOne(body: CreateUserDto): TApiResponse<User> {
    try {
      const { id, name, email } = body;

      if (!id || !name || !email) {
        return {
          code: 400,
          error: true,
          message: "All fields are required",
        };
      }

      const newUser: User = {
        id,
        name,
        email,
      };

      this.users = [...this.users, newUser];

      return {
        code: 201,
        error: false,
        message: "User created successfully!",
        data: newUser,
      };
    } catch (error: any) {
      return {
        code: 500,
        error: false,
        message: `Unexpected error: ${error.message}`,
      };
    }
  }

  updateOne(id: string, body: UpdateUserDto): TApiResponse<User> {
    try {
      const user = this.findOne(id);

      if (user.error) {
        return user;
      }

      const index = this.users.findIndex((u) => u.id === id);

      this.users[index] = { ...this.users[index], ...body, id };
      const updatedUser = this.users[index];

      return {
        code: 200,
        error: false,
        message: "User updated successfully!",
        data: updatedUser,
      };
    } catch (error: any) {
      return {
        code: 500,
        error: false,
        message: `Unexpected error: ${error.message}`,
      };
    }
  }

  deleteOne(id: string): TApiResponse<any> {
    try {
      const user = this.findOne(id);

      if (user.error) {
        return user;
      }

      this.users = this.users.filter((u) => u.id !== id);

      return {
        code: 200,
        error: false,
        message: "User deleted successfully!",
      };
    } catch (error: any) {
      return {
        code: 500,
        error: false,
        message: `Unexpected error: ${error.message}`,
      };
    }
  }
}
