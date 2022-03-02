import axios from "axios";

export default async function login(
  username: string,
  password: string
): Promise<void> {
  await axios
    .post("https://api.maiquer.tech/api/login", {
      username: username,
      password: password,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
