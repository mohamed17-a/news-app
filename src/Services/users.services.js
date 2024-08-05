import axios from "axios";
const url = "http://localhost:3000/users";
export async function fetchUsers() {
  return await axios.get(url);
}
export async function createUser(user) {
  axios.post(url, { ...user });
}
