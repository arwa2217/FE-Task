import axios from "axios";
import config from "../../../config/config";

export const getAllUserList = () => {
  return axios.get(`${config.default.userList}`, {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });
}
