import axios from "@/axios";
export function getCommonSettingsData(params) {
  return axios.getAxios("/common/common/commonSettings", params);
}
// 获取所有主子店铺
export const getAllShopData = (parms) => {
  return axios.getAxios("/common/shop/getSwitchOverShopList", parms);
};
// 菜单查询
export const getMenusListData = (parms) => {
  return axios.getAxios("/common/menu/getMenus", parms);
};
// 根据店铺id获取店铺信息
export const getShopInfoByIdData = (params) => {
  return axios.getAxios("/common/shop/getShopInfoById", params);
};