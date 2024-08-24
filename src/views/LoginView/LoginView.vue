<template>
  <div class="login-container">
    <div class="login">
      <!-- <img src="" alt="" /> -->
    </div>
    <div class="info">
      <van-cell-group inset>
        <van-field v-model="tel" label="手机号" type="tel" />
        <van-field v-model="password" label="密码" type="password" />
      </van-cell-group>
    </div>
    <div class="btn">
      <van-button color="#684886" type="primary" block @click="onLogin"
        >登录</van-button
      >
    </div>
    <div class="other">
      <div class="free" @click="onFree">没有账号？免费注册</div>
      <div class="forget">忘记密码</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from "vue";
import { login } from "@/api/Login/index";
import { Md5 } from "ts-md5"

import { useRoute, useRouter } from "vue-router";

const tel = ref<string>("");
const password = ref<string>("");

const router = useRouter();
const route = useRoute();

const onLogin = () => {};

const onFree = () => {
  router.push("/register");
};
</script>
<style lang="less" scoped>
.login-container {
  .login {
    width: 100%;
    margin-top: 50px;
    text-align: center;

    img {
      widows: 150px;
    }
  }

  .info {
    margin-top: 50px;
  }

  .btn {
    padding: 20px;
  }

  .other {
    display: flex;
    padding: 20px;
    padding-top: 0;

    .free {
      flex: 1;
      text-align: left;
      font-size: 14px;
    }

    .forget {
      flex: 1;
      text-align: right;
      font-size: 14px;
    }
  }
}
</style>
