import { Request, Response } from "express";
import { users } from "../data/data";
import { UserService } from "../services/user.service";

const userService = new UserService(users);

export const findAll = (req: Request, res: Response) => {
  const users = userService.findAll();
  return res.status(users.code).json(users);
};

export const findOne = (req: Request, res: Response) => {
  const id = req.params.id;
  const user = userService.findOne(id);
  return res.status(user.code).json(user);
};

export const createOne = (req: Request, res: Response) => {
  const body = req.body;
  const newUser = userService.createOne(body);
  return res.status(newUser.code).json(newUser);
};

export const updateOne = (req: Request, res: Response) => {
  const id = req.params.id;
  const body = req.body;
  const updatedUser = userService.updateOne(id, body);
  return res.status(updatedUser.code).json(updatedUser);
};

export const deleteOne = (req: Request, res: Response) => {
  const id = req.params.id;
  const deletedUser = userService.deleteOne(id);
  return res.status(deletedUser.code).json(deletedUser);
};
