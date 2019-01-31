export const state = {
  isLoadingPosts: true,
  showCount: "10",
  posts: [],
  filteredPosts: state => state.posts.slice(0, state.showCount)
};
