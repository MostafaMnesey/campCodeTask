import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios';
import type { ICreateProduct } from '../utils/Interfaces/product';


type props = {
    url: string,
    queryKey?: string
}
export default function useMutationProduct({ url, queryKey = "products" }: props) {
    const queryClient = useQueryClient()

    const { mutate, isPending, error, isError } = useMutation({
        mutationFn: async (data: ICreateProduct | (ICreateProduct & { product_id?: number })) => {
            const res = await axios.post(url, data);
            return res.data
        },
        onSuccess: () => {
            // إعادة fetch للبيانات بعد النجاح
            queryClient.invalidateQueries({ queryKey: [queryKey] })
        }
    })


    return {
        mutate, isPending, error, isError
    }
}
