import {defineStore} from "pinia";
import {ref} from "vue";

export const useStore = defineStore('user', () => {
    const age = ref(27)
    const level = ref(5)
    const account = ref('SD77842')
    const nickname = ref('自古风流')
    return { age, level, account, nickname } // 将数据暴露出去，共享给需要的组件
})