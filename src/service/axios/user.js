import { instance } from "./axiosClient";
import { v4 as uuidv4 } from "uuid";

export const getPost = async (data) => {
  const post = await instance.post("users", {
    id: uuidv4(),
    name: data.name,
    password: data.password,
    email: data.email,
  });
  return post;
};

export const getData = async () => {
  const res = await instance.get("tasks");

  return res.data;
};
