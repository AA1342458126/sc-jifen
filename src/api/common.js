import axios from "@/axios";
export function getCommonSettingsData(params){
    return axios.post("/cloud/common/common/commonSettings", params)
}