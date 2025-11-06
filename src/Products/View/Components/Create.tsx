import React from 'react'
import { useForm } from "react-hook-form"
import type { ICreateProduct } from '../../../utils/Interfaces/product'
import useMutationProduct from '../../../Hooks/Mutation'
import toast from 'react-hot-toast'
import FromInputs from './FromInputs'
import validationSchema from '../../../utils/Schema/Create'
import { yupResolver } from "@hookform/resolvers/yup"

type Props = {
  setShowCreate: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Create({ setShowCreate }: Props) {
  const { mutate } = useMutationProduct({ url: import.meta.env.VITE_CREATE_PRODUCT, queryKey: "products" })
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ICreateProduct>({
    defaultValues: {
      product_name: "",
      product_description: "",
      number_of_pieces: 0,
      product_price: 0,
      price_after_discount: 0,
      discount: 0,
      product_name_en: "",
      product_description_en: "",
      product_hidden: "no"
    },
    mode: "onChange",
    resolver: yupResolver(validationSchema)
  })


  const onSubmit = (data: ICreateProduct) => {
    console.log("Form Data Submitted:", data)

    mutate(data, { 
      onSuccess: () => { 
        toast.success("Product Created Successfully")
        reset()
        setShowCreate(false)
      }, 
      onError: () => { 
        toast.error("Something went wrong") 
      } 
    })
  }

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <FromInputs register={register} errors={errors} />


        {/* Submit */}
        <button
          type="submit"
          className="text-white bg-[#FF8D28] border border-[#FF8D28] hover:bg-transparent hover:text-[#FF8D28] transition-all focus:ring-4 focus:outline-none focus:ring-[#FF8D28]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
