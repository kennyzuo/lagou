<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form @submit.prevent="createArticle">
            <fieldset :disabled="disabled">
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                  required
                  v-model="article.title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                  v-model="article.description"
                  required
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                  v-model="article.body"
                  required
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                  v-model="tag"
                  v-on:keyup.enter="addTag"
                />

                <div class="tag-list">
                  <span
                    v-for="(tag, index) in article.tagList"
                    :key="index"
                    class="tag-default tag-pill"
                  >
                    <i class="ion-close-round" @click="deleteTag(index)"></i>
                    {{ tag }}
                  </span>
                </div>
              </fieldset>
              <button class="btn btn-lg pull-xs-right btn-primary">
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { createArticle } from "@/api/article.js"
export default {
  name: "ArticleEdit",
  middleware: "authenticated",
  data() {
    return {
      article: {
        title: "",
        description: "",
        body: "",
        tagList: [],
      },
      tag: "",
      disabled: false,
    }
  },
  methods: {
    async createArticle() {
      this.disabled = true
      let { data } = await createArticle({ article: this.article })
      this.$router.push({
        name: "article",
        params: {
          slug: data.article.slug,
        },
      })
      this.disabled = false
    },
    deleteTag(index) {
      this.article.tagList.splice(index, 1)
    },
    addTag() {
      if (this.article.tagList.find((tag) => tag === this.tag) || !this.tag)
        return
      this.article.tagList.push(this.tag)
      this.tag = ""
    },
  },
}
</script>
