import axios from "axios";
import { DOMAIN, TOKEN, TOKENCYBERSOFT } from "../utilities/constant";


const axiosClient = axios.create({
    baseURL: DOMAIN,
    headers: {
        TokenCybersoft: TOKENCYBERSOFT,
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
    },
    data: {

    }
})

export default axiosClient;


