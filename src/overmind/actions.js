import { Action } from "overmind";

export const getPosts = async ({ state, effects }) => {
  state.isLoadingPosts = true;
  state.posts = await effects.request(
    "https://jsonplaceholder.typicode.com/posts"
  );
  state.isLoadingPosts = false;
};

export const changeShowCount = ({ value: event, state }) => {
  state.showCount = event.target.value;
};
