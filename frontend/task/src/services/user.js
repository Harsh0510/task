import axios from "axios";

const api = "http://localhost:3000/users";

const GetUsers = async () => {
  return await axios.get(api);
};
const GetUserById = async (id) => {
  return await axios.get(api + `/${id}`);
};
const PostUsers = async (users) => {
  return await axios.post(api, users);
};
const UpdateUsers = async (id, users) => {
  return await axios.put(api + `/edit/${id}`, users);
};
const DeleteUsers = async (id) => {
  return await axios.put(api + `/delete/${id}`);
};

export { GetUsers, GetUserById, PostUsers, UpdateUsers, DeleteUsers };
