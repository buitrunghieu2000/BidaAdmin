
import axiosClient from "../axiosClient";
import { ReturnReponse } from "../response.interface";
import { IReqLogin } from "./auth.interface";
import { IResLogin } from "./auth.type";

const authApi = {
  login(data: IReqLogin): Promise<ReturnReponse<IResLogin>> {
    const url = "/auth/login"; //params : page, filter
    return axiosClient.post(url, data);
  },
};

export default authApi;
