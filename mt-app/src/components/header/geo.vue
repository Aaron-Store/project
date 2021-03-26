<template>
  <el-col class="m-geo" :span="10">
    <div class="m-position">
      <i class="el-icon-location" />
      <i>杭州</i>
      <router-link class="changeCity" :to="{ name: 'changeCity' }">切换城市</router-link>
        [
        <a href="#">富阳</a>
        <a href="#">德清</a>
        <a href="#">临安</a>
        ]
    </div>
    <div class="m-user">
      <router-link class="login" :to="{ name: 'login' }">立即登录</router-link>
      <router-link class="register" :to="{ name: 'register' }"
        >注册</router-link>
    </div>
  </el-col>
</template>
