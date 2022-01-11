<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item" v-if="user">
                <nuxt-link
                  exact
                  :class="{
                    active: tab === 'your_feed',
                  }"
                  class="nav-link"
                  :to="{
                    name: 'home',
                    query: {
                      tab: 'your_feed',
                    },
                  }"
                  >Your Feed</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link
                  exact
                  :class="{
                    active: tab === 'global_feed',
                  }"
                  class="nav-link"
                  :to="{
                    name: 'home',
                    query: {
                      tab: 'global_feed',
                    },
                  }"
                  >Global Feed</nuxt-link
                >
              </li>
              <li class="nav-item" v-if="tag">
                <nuxt-link
                  exact
                  class="nav-link"
                  :class="{
                    active: tab === 'tab',
                  }"
                  :to="{
                    name: 'home',
                    query: {
                      tab: 'tab',
                      tag: tag,
                    },
                  }"
                  >#{{ tag }}</nuxt-link
                >
              </li>
            </ul>
          </div>

          <div
            v-for="article in articles"
            :key="article.slug"
            class="article-preview"
          >
            <div class="article-meta">
              <nuxt-link
                exact
                :to="{
                  name: 'profile',
                  params: {
                    username: article.author.username,
                  },
                }"
              >
                <img :src="article.author.image" />
              </nuxt-link>
              <div class="info">
                <nuxt-link
                  exact
                  :to="{
                    name: 'profile',
                    params: {
                      username: article.author.username,
                    },
                  }"
                >
                  {{ article.author.username }}
                </nuxt-link>
                <span class="date">{{
                  article.createdAt | date("MMM DD, YYYY")
                }}</span>
              </div>
              <button
                class="btn btn-outline-primary btn-sm pull-xs-right"
                @click="onFavorite(article)"
                :disabled="article.favoriteDisabled"
                :class="{
                  active: article.favorited,
                }"
              >
                <i class="ion-heart"></i> {{ article.favoritesCount }}
              </button>
            </div>
            <nuxt-link
              exact
              :to="{
                name: 'article',
                params: {
                  slug: article.slug,
                },
              }"
            >
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>

          <ul class="pagination">
            <li
              class="page-item"
              :class="{ active: item === page }"
              v-for="item in totalPage"
              :key="item"
            >
              <nuxt-link
                class="page-link"
                exact
                :to="{
                  name: 'home',
                  query: {
                    page: item,
                    tag,
                    tab,
                  },
                }"
                >{{ item }}</nuxt-link
              >
            </li>
          </ul>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <nuxt-link
                class="tag-pill tag-default"
                :to="{
                  name: 'home',
                  query: {
                    tag,
                    tab: 'tab',
                  },
                }"
                :key="tag"
                v-for="tag in tags"
                >{{ tag }}</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  getArticles,
  getFeedArticles,
  addFavorite,
  deleteFavorite,
} from "@/api/article.js"
import { getTags } from "@/api/tag.js"
import { mapState } from "vuex"
const limit = 20
export default {
  name: "Home",
  async asyncData({ query, store }) {
    const page = Number(query.page || 1)
    const { tag, tab } = query
    console.log(tag, tab)

    const loadArticles =
      store.state.user && tab === "your_feed" ? getFeedArticles : getArticles
    const articlePromise = loadArticles({
      limit,
      offset: (page - 1) * limit,
      tag,
    })
    const tagPromise = getTags()

    const [{ data: articleData }, { data: tagData }] = await Promise.all([
      articlePromise,
      tagPromise,
    ])

    return {
      articles: articleData.articles.map((article) => {
        article.favoriteDisabled = false
        return article
      }),
      articlesCount: articleData.articlesCount,
      limit,
      page,
      tags: tagData.tags.filter((tag) => /^[a-z0-9A-Z]+$/.test(tag)),
      tag,
      tab: tab || "global_feed",
    }
  },
  watchQuery: ["page", "tag", "tab"],
  computed: {
    ...mapState(["user"]),
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit)
    },
  },
  methods: {
    async onFavorite(article) {
      article.favoriteDisabled = true
      if (article.favorited) {
        await deleteFavorite(article.slug)
        article.favorited = false
        article.favoritesCount += -1
      } else {
        await addFavorite(article.slug)
        article.favorited = true
        article.favoritesCount += 1
      }
      article.favoriteDisabled = false
    },
  },
}
</script>
<style></style>
