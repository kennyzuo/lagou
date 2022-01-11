<template>
  <div>
    <form class="card comment-form">
      <div class="card-block">
        <textarea
          class="form-control"
          placeholder="Write a comment..."
          rows="3"
          v-model="comment.body"
        ></textarea>
      </div>
      <div class="card-footer">
        <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
        <button
          class="btn btn-sm btn-primary"
          @click="addComment"
          :disabled="disabled"
        >
          Post Comment
        </button>
      </div>
    </form>
    <div class="card" v-for="comment in comments" :key="comment.id">
      <div class="card-block">
        <p class="card-text">
          {{ comment.body }}
        </p>
      </div>
      <div class="card-footer">
        <nuxt-link
          :to="{
            name: 'profile',
            params: { username: comment.author.username },
          }"
          class="comment-author"
        >
          <img :src="comment.author.image" class="comment-author-img" />
        </nuxt-link>
        &nbsp;
        <nuxt-link
          :to="{
            name: 'profile',
            params: { username: comment.author.username },
          }"
          class="comment-author"
        >
          {{ comment.author.username }}
        </nuxt-link>
        <span class="date-posted">{{
          comment.createdAt | date("MMM DD,YYYY")
        }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { getComments, addComment } from "@/api/article.js"
export default {
  name: "ArticleComments",
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      comments: [],
      comment: {
        body: "",
      },
      disabled: false,
    }
  },
  mounted() {
    this.getComments()
  },
  methods: {
    async getComments() {
      const { data } = await getComments(this.article.slug)
      this.comments = data.comments
    },
    async addComment() {
      this.disabled = true
      let { data } = await addComment(
        {
          comment: this.comment,
        },
        this.article.slug
      )
      console.log(data)
      this.disabled = true
      this.comments.unshift(data.comment)
    },
  },
}
</script>
