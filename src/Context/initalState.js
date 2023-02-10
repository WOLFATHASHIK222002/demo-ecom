import { fetchUser } from "../utils/fetchlocalstorage";
const userinfo = fetchUser();
export const initialState = {
  user: userinfo,
};
