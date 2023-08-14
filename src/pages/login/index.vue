<template>
  <view class="Login-page">
    <image src="https://img.zcool.cn/community/016e275ad6dba7a801204029d8a9cb.gif" mode="aspectFill"></image>
    <button plain @click="login">授权登陆</button>
  </view>
</template>
<script setup lang="ts">
import { RequestApi } from '@/public/request'
const login = () => {
  uni.getUserProfile({
    desc: "获取个人信息",
    success: (res) => {
      let { avatarUrl, nickName } = res.userInfo
      uni.login({
        success: (val) => {
          uni.showLoading({title: '登陆中',mask:true})
          ApiLogin(avatarUrl, nickName, val.code)
        },
        fail: (err) => {
          uni.showToast({
            title: '登陆失败',
            icon: 'none',
            duration: 1500,
            mask: true
          });
        },
      })
    },
    fail: (err) => {
      console.log(err);
      uni.showToast({
        title: '登陆失败',
        icon: 'none',
        duration: 1500,
        mask: true
      });
    },
  })
}
//调取登陆方法
const ApiLogin = async (avatarUrl: string, nickName: string, code: string) => {
  try {
    let obj = { appid: "wx9eb937372605afdb", secret: "24e307d73a30196f406ac61ef3aad4ae", avatarUrl, nickName, code }
    let res: any = await RequestApi.WxLogin(obj)
    // 存储用户信息到本地缓存，然后返回上一页
    uni.setStorageSync('wxuser', res.data.data)
    setTimeout(() => {
      uni.navigateBack({ delta: 1 })
      uni.hideLoading()
    },600)
    } catch {
      uni.showToast({ title: '登录失败', icon: 'none', duration: 1000, });
    }
}
</script>
<style>
.Login-page {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.Login-page image {
  width: 100%;
  height: 100%;
}

.Login-page button {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: 30%;
  background-color: #05dbe3;
  color: #ffffff;
  padding: 0 100rpx;
  font-size: 35rpx;
}
</style>