import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetProducts({
  url,
  queryKey,
}: {
  url: string;
  queryKey: string;
}) {


  const getProducts = async () => {
    return await axios.get(url);
  };
  const { isPending, error, data } = useQuery({
    queryKey: [queryKey],
    queryFn: getProducts,
  });
  return {
    isPending,
    error,
    data: data?.data,
  };
}
