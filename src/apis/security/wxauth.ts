import axios from "axios";

export default async function wxauth(
  code: string,
  state: string
): Promise<{ jwt: string; userid: number }> {
  let jwt = "";
  let userid = 0;
  await axios
    .get(`https://api.maiquer.tech/callback?code=${code}&state=${state}`, {
      withCredentials: true,
    })
    .then((response) => {
      if (response.data.code == 0) {
        const cookie = response.headers["set-cookie"]?.toString();
        if (cookie) {
          jwt = cookie;
        }
        userid = response.data.data.id;
      }
    })
    .catch((err) => {
      console.log(err);
    });
  return { jwt: jwt, userid: userid };
}
