import { defineStore } from "pinia";
import { ref } from "vue";
import { getCommonSettingsData, getAllShopData } from "@/api/common.js";
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
      versionInfo.value = res.result;
      return res.result;
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
      return res.result;
    } catch (error) {
      console.error("获取用户信息失败", error);
      throw error;
    } finally {
      loading.value = false;
    }
  }
  return { customActivityList, versionInfo, updateCommonSettings, updateAllShopData }; // 将数据暴露出去，共享给需要的组件
});
