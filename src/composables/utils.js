import { ElMessage } from 'element-plus'
function successToast(msg){
    ElMessage({
        message: msg,
        type: 'success',
        plain: true,
    })
}
function errorToast(msg){
    ElMessage({
        message: msg,
        type: 'error',
        plain: true,
    })
}
export default {
    successToast,
    errorToast,
}