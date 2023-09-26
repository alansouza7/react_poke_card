import axios from 'axios'
import { useQuery } from '@tanstack/react-query';

export const useFetchCards = (url, queryKey) => {
    const {data, isLoading, isError} = useQuery({
      keepPreviousData: true,
        queryKey:queryKey,
        queryFn: () => {
          return axios.get(url)
        }
      })
      
      return {data, isLoading, isError}
}

