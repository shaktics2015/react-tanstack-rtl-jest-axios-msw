import {
    useQuery,
  } from '@tanstack/react-query'
import { get } from '../network/api'

export function useQueryHook(postId:string){  
    return useQuery({  
      enabled: !!postId,
      queryKey: ["posts", postId],
      queryFn: ({ queryKey }) => get(queryKey[1]),
    })
  }