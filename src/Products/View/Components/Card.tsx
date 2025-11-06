

import toast from 'react-hot-toast'
import type { IProduct } from '../../../utils/Interfaces/product'
import productImage from "/src/assets/product.png"
import { Icon } from '@iconify/react'
type props = {
    product: IProduct
    lang: string
    handleUpdate: (product?: IProduct) => void
    handleDelete: () => void
    setProductId: React.Dispatch<React.SetStateAction<number>>
    /*  setSelectedProduct: React.Dispatch<React.SetStateAction<IProduct | null>> */
}
export default function Card({ product, lang, handleUpdate, handleDelete, setProductId, /* setSelectedProduct */ }: props) {





    const getText = (ar: string, en: string) => {
        return lang === "ar" ? ar : en
    }

    return (
        <>


            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="# " className='relative'>
                    <img className="rounded-b-lg w-full" src={`${product.product_image[0] || productImage}`} alt={`${product.product_name || "Product Image"}`} />
                    <span className="bg-yellow-100 absolute top-[96%] left-[50%] translate-x-[-50%] text-yellow-800 text-xs  font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">{product.discount}% discount</span>
                    <div className="flex absolute top-3 right-2 justify-end">
                        <button
                            onClick={() => {

                                handleUpdate(product)
                            }} className='p-2 bg-[#34C759] hover:bg-[#34C759]/80 group transition-all  rounded-lg'>
                            <Icon icon='uil:edit' className='text-lg text-white' />
                        </button>
                    </div>
                </a>
                <div className="p-5">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{getText(product.product_name, product.product_name_en)}</h5>

                    <p className="mb-3 font-normal text-sm  text-gray-700 dark:text-gray-400">{getText(product.product_description.length > 40 ? product.product_description.slice(0, 40) + "..." : product.product_description, product.product_description_en.length > 20 ? product.product_description_en.slice(0, 20) + "..." : product.product_description_en)}</p>
                    <div className=" flex justify-between">
                        <span className='text-[#34C759] font-bold text-[20px]'><span className='line-through text-red-500'>{product.product_price} EGP</span> {product.price_after_discount} EGP</span>

                        <p className='text-[#34C759] font-bold text-[20px]'>{product.number_of_pieces} pieces</p>
                    </div>
                    <div className="flex justify-end">
                        <button onClick={() => {
                            setProductId(product.product_id)
                            handleDelete()
                        }} className='p-2 bg-[#B4000140] hover:bg-[#B40001] group transition-all  rounded-lg'>
                            <Icon icon='material-symbols-light:delete-outline-rounded' className='text-lg group-hover:text-white transition-all text-[#B40001]' />
                        </button>
                    </div>
                    <button
                        onClick={() => {
                            toast.success("added To Cart ")
                        }}
                        className='
                    w-full
                    bg-[#FF8D28]
                    text-white
                    py-2
                    my-1
                    rounded-lg
                    hover:bg-transparent
                    hover:text-[#FF8D28]
                    border
                    border-[#FF8D28]
                    hover:border-[#FF8D28]
                    transition-all
                    text-[16px]
                    font-medium
                    '>
                        Add To Cart
                    </button>
                </div>
            </div>



        </>
    )
}
