import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url: string) => {
    return axios.get(url)
        .then((res: { data: any; }) => res.data.data)
}

function useResults() {
    return useSWR(process.env.NEXT_PUBLIC_API_URL + '/result', fetcher);
}

export default useResults;
