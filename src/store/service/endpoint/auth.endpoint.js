import { ApiService } from "../Apiservice";

const contactEndpoint = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    sigIn: builder.mutation({
      query: (arg) => ({
        url: `/login`,
        method: "POST",
        body: arg,
      }),
      invalidatesTags: ["auth"],
    }),
    sigUp: builder.mutation({
      query: (arg) => ({
        url: `/register`,
        method: "POST",
        body: arg,
      }),
      invalidatesTags: ["auth"],
    }),
    profile: builder.query({
      query: () => `/user-profile`,
      providesTags: ["auth"],
    }),
    logOut: builder.mutation({
      query: () => ({
        url: `user-logout`,
        method: `POST`,
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const {
  useSigInMutation,
  useSigUpMutation,
  useProfileQuery,
  useLogOutMutation,
} = contactEndpoint;
