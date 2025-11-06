import React from 'react'
import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

type Props = {
    showDelete: boolean
    setShowDelete: React.Dispatch<React.SetStateAction<boolean>>
    productId: number
}

export default function Delete({ showDelete, setShowDelete, productId }: Props) {
    const queryClient = useQueryClient()

    const { mutate: deleteProduct, isPending } = useMutation({
        mutationFn: async (id: number) => {
            const res = await axios.post("https://camp-coding.tech/test_api/products/delete_product.php", { product_id: id });
            return res.data
        },
        onSuccess: (data) => {
            if (data.status === "success") {
                console.log("Product deleted successfully");
                toast.success("Product Deleted Successfully")
                // إعادة fetch للبيانات بعد الحذف
                queryClient.invalidateQueries({ queryKey: ["products"] })
                setShowDelete(false)
            } else {
                toast.error("Something went wrong")
            }
        },
        onError: (error) => {
            console.log(error);
            toast.error("Something went wrong")
        }
    })

    const handleClose = () => {
        setShowDelete(false)
    }

    const handleDelete = () => {
        if (productId) {
            console.log('Deleting product with ID:', productId)
            deleteProduct(productId)
        }
    }

    return (
        <>
            {/* الخلفية الشفافة */}
            {showDelete && (
                <div
                    className="fixed inset-0 z-40 bg-black/30 bg-opacity-50 flex justify-center items-center"
                    onClick={handleClose}
                ></div>
            )}

            {/* المودال نفسه */}
            <div
                id="popup-modal"
                tabIndex={-1}
                className={`${showDelete ? 'flex' : 'hidden'
                    } overflow-y-auto overflow-x-hidden fixed inset-0 z-50 justify-center items-center w-full h-full`}
            >
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div
                        className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700"
                        onClick={(e) => e.stopPropagation()} // عشان الضغط داخل المودال ما يقفلهاش
                    >
                        {/* زرار X */}
                        <button
                            type="button"
                            onClick={handleClose}
                            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 
              hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center 
              items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>

                        {/* المحتوى */}
                        <div className="p-4 md:p-5 text-center">
                            <svg
                                className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                            </svg>
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                Are you sure you want to delete this product?
                            </h3>

                            <button
                                onClick={handleDelete}
                                disabled={isPending}
                                type="button"
                                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 
                focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium 
                rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isPending ? "Deleting..." : "Yes, I'm sure"}
                            </button>

                            <button
                                onClick={handleClose}
                                type="button"
                                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 
                focus:outline-none bg-white rounded-lg border border-gray-200 
                hover:bg-gray-100 hover:text-green-500 focus:z-10 focus:ring-4 
                focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 
                dark:text-gray-400 dark:border-gray-600 dark:hover:text-white 
                dark:hover:bg-gray-700"
                            >
                                No, cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
