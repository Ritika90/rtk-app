import api from "api";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPostById: build.query({
      query: (id) => ({
        url: `https://jsonplaceholder.typicode.com/posts/${id}`,
      }),
    }),
  }),
});

export const { useLazyGetPostByIdQuery } = extendedApi;
