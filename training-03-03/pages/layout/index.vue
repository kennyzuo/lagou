<template>
  <div>
    <!-- 导航栏 -->
    <nav class="navbar navbar-light">
      <div class="container">
        <nuxt-link class="navbar-bran" to="/">conduit</nuxt-link>
        <ul class="nav navbar-nav pull-xs-right">
          <template v-if="user">
            <li class="nav-item">
              <!-- Add "active" class when you're on that page" -->
              <nuxt-link class="nav-link" to="/" exact>Home</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/editor">
                <i class="ion-compose"></i>&nbsp;New Post
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/settings">
                <i class="ion-gear-a"></i>&nbsp;Settings
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/profile/xiaodaidai">
                <img class="user-pic" :src="user.image" />
                {{ user.username }}
              </nuxt-link>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/register">Sign up</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/login">Sign in</nuxt-link>
            </li>
          </template>
        </ul>
      </div>
    </nav>

    <!-- 自路由 -->
    <nuxt-child />

    <!-- 顶部 -->
    <footer>
      <div class="container">
        <nuxt-link class="logo-fontn" to="/">conduit</nuxt-link>
        <span class="attribution">
          An interactive learning project from
          <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
          licensed under MIT.
        </span>
      </div>
    </footer>
  </div>
</template>
<script>
import { mapState } from "vuex"
export default {
  name: "Layout",
  computed: {
    ...mapState(["user"]),
  },
}
</script>
