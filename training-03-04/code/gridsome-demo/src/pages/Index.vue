<template>
  <Layout>
    <!-- Page Header -->
    <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>Clean Blog</h1>
              <span class="subheading">A Blog Theme by Start Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div
            class="post-preview"
            v-for="edge in $page.posts.edges"
            :key="edge.node.id"
          >
            <g-link :to="'/post/' + edge.node.id">
              <h2 class="post-title">
                {{ edge.node.title }}
              </h2>
            </g-link>
            <p class="post-meta">
              Posted by
              <a href="#">{{
                edge.node.owner ? edge.node.owner.username : ""
              }}</a>
              on {{ edge.node.created_at }}
            </p>
            <p>
              <span v-for="tag in edge.node.tags" :key="tag.id">
                <g-link :to="`/tag/${tag.id}`">{{ tag.title }}</g-link>
              </span>
            </p>
          </div>

          <hr />
          <!-- Pager -->
          <pager :info="$page.posts.pageInfo" />
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
# Write your query or mutation here
query($page: Int) {
  posts: allStrapiPost (perPage: 2, page: $page) @paginate{
    pageInfo{
      totalPages
      currentPage
    }
    edges {
      node{
        id,
        title,
        owner {
          username,
          id
        },
        tags {
          id,
          title
        },
        created_at
      }
    }
  }
}
</page-query>
<script>
import { Pager } from "gridsome"
export default {
  name: "HomePage",
  components: {
    Pager,
  },
  metaInfo: {
    title: "Hello, world!",
  },
}
</script>
