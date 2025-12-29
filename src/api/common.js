import axios from "@/axios";
export function getCommonSettingsData(params){
    return axios.getAxios("/common/common/commonSettings", params)
}
// 获取所有主子店铺
export const getAllShopData = (parms, options = {}) => {
    return axios.getAxios('/common/shop/getSwitchOverShopList', parms)
}