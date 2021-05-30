// Blog Store

export const state = () => ({
  featuredArticles: new Set(),
})

export const mutations = {
  setFeaturedArticles(state, featuredBlogID) {
    state.featuredArticles.add(featuredBlogID)
  }
}
