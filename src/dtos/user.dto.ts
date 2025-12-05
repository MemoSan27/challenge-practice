export type CreateUserDto = {
  id: string;
  name: string;
  email: string;
};

export type UpdateUserDto = {
  name?: string;
  email?: string;
};
