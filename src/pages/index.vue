<template>
    <div>首页</div>
</template>
<script setup>
    import { onMounted } from "vue"
    import { getCommonSettingsData } from "@/api/common.js"
    onMounted(() => {
        getCommonSettingsData({}).then(res => {
            console.log("aaaaaaddddd",res)
        })
        console.log("aaaa")
    })
</script>