import { ApiService } from "../Apiservice"

const contactEndpoint=ApiService.injectEndpoints({
    endpoints:(builder)=>({
        sigIn:builder.mutation({
            query:(arg)=>({
                url : `/login`,
                method : "POST",
                body: arg,
            })
        }),
        sigUp:builder.mutation({
            query:(arg)=>({
                url : `/register`,
                method : "POST",
                body: arg,
            })
        }),
        profile:builder.query({
            query:()=> `/user-profile`
        })
    })
})

export const {useSigInMutation,useSigUpMutation,useProfileQuery}=contactEndpoint