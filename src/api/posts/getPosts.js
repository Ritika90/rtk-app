import api from "api";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query({
      query: () => ({
        url: "posts",
      }),
    }),
  }),
});

export const { useLazyGetPostsQuery } = extendedApi;
