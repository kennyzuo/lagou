<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ isLogin ? "Sign in" : "Sign up" }}</h1>
          <p class="text-xs-center">
            <!-- <a href="">Have an account?</a> -->
            <nuxt-link v-if="isLogin" to="/register">Need an account</nuxt-link>
            <nuxt-link v-else to="/login">Have an account?</nuxt-link>
          </p>

          <ul class="error-messages">
            <template v-for="(messages, field) in errors">
              <li v-for="(message, index) in messages" :key="index">
                {{ field }} {{ message }}
              </li>
            </template>
          </ul>
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group" v-if="!isLogin">
              <input
                class="form-control form-control-lg"
                type="text"
                v-model="user.username"
                placeholder="Your Name"
                required
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="email"
                v-model="user.email"
                placeholder="Email"
                required
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                v-model="user.password"
                placeholder="Password"
                minlength="8"
                required
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              {{ isLogin ? "Sign in" : "Sign up" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { login, register } from "@/api/user.js"
const Cookie = process.client ? require("js-cookie") : null
export default {
  name: "Login",
  middleware: 'noAuthenticated',
  props: ["isLogin"],
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
      },
      errors: {},
    }
  },
  methods: {
    /**
     * kennyzuodaidai@qq.com xiaodaidai
     */
    async onSubmit() {
      try {
        let params = {
          user: this.user,
        }
        let { data } = this.isLogin
          ? await login(params)
          : await register(params)
        console.log(data)
        // 将 data.user 存储到 store 中
        this.$store.commit("setUser", data.user)
        // 将 data.user 持久化
        Cookie.set("user", data.user)
        this.$router.push("/")
      } catch (err) {
        this.errors = err.response.data.errors
      }
    },
  },
}
</script>
