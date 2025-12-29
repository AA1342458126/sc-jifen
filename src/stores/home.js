import { defineStore } from "pinia";
import { ref } from "vue";
import { getCommonSettingsData, getAllShopData, getMenusListData, getShopInfoByIdData} from "@/api/common.js";
export const useHomeStore = defineStore("home", () => {
  const loading = ref(false); // 加载状态
  const customActivityList = ref([]); // 自定义活动列表
  const versionInfo = ref({});
  // 更新版本
  async function updateCommonSettings() {
    if (Object.keys(versionInfo.value).length) return versionInfo.value;
    loading.value = true;
    try {
      const res = await getCommonSettingsData({});
      if (res.code == 200) {
        versionInfo.value = res.result;
      }
      return res.result || {};
    } catch (error) {
      console.error("获取用户信息失败", error);
      throw error;
    } finally {
      loading.value = false;
    }
  }
  // 所有店铺数据
  const allShopData = ref(null);
  async function updateAllShopData() {
    if (allShopData.value) return allShopData.value;
    try {
      const res = await getAllShopData({});
      if (res.code === 200) {
        allShopData.value = res.result;
      }
      return res.result || {};
    } catch (error) {
      console.error("获取用户信息失败", error);
      throw error;
    } finally {
      loading.value = false;
    }
  }
  // 导航栏数据
  const navigationItems = ref(null);
  async function updateNavigationItems() {
    if (navigationItems.value) return navigationItems.value;
    try {
      const res = await getMenusListData({});
      if (res.code == 200) {
        navigationItems.value = res.result.listNavigationGroup;
      }
      return res.result || {};
    } catch (error) {
      console.error("获取用户信息失败", error);
      throw error;
    } finally {
      loading.value = false;
    }
  }
  // 店铺信息
  const shopInfo = ref({});
  async function getShopInfoById(){
    if (Object.keys(shopInfo.value).length) return;
    try {
      const res = await getShopInfoByIdData({});
      if (res.code == 200) {
        shopInfo.value = res.result;
      }
      console.log(res,"dibu daoh");
      return res.result || {};
    } catch (error) {
      console.error("获取用户信息失败", error);
      throw error;
    } finally {
      loading.value = false;
    }
  }
  // 将数据暴露出去，共享给需要的组件
  return { 
    customActivityList, 
    versionInfo, 
    navigationItems, 
    updateCommonSettings, 
    updateAllShopData,
    updateNavigationItems,
    getShopInfoById,
  };
});
