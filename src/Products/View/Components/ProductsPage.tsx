import { Icon } from "@iconify/react";
import useGetProducts from "../../../Hooks/GetProducts";
import Card from "./Card";
import type { IProduct } from "../../../utils/Interfaces/product";
import React, {
    Suspense, useCallback, useState
} from "react";
import Delete from "./Delete";

const baseUrl = import.meta.env.VITE_GET_PRODUCTS;
const Drawer = React.lazy(() => import('./Drawer'));
const Create = React.lazy(() => import('./Create'));
const Update = React.lazy(() => import('./Update'));

export default function ProductsPage({ lang }: { lang: string }) {
    const { data } = useGetProducts({ url: `${baseUrl}`, queryKey: "products" });
    const [showCreate, setShowCreate] = useState(false)
    const [showUpdate, setShowUpdate] = useState(false)
    const [showDelete, setShowDelete] = useState(false)
    const [productId, setProductId] = useState(0)
    const [selectedProduct, setSelectedProduct] = useState<IProduct>({} as IProduct)

    const handleUpdate = useCallback((product?: IProduct) => {
        if (product) {
            setSelectedProduct(product)
            setShowUpdate(true)
        }
    }, [])
    const handleDelete = useCallback(() => {
        setShowDelete((prev) => !prev)
    }, [])
    return (

        <>
            <div className="bg-gray-100 h-[100vh] pt-2 font-">
                <div className="container mx-auto  ">
                    <div className="flex justify-end  ">
                        <button
                            onClick={() => {
                                setShowCreate((prev) => !prev)

                            }
                            }
                            className="flex justify-between  
                        
                        items-center bg-[#FF8D28] hover:bg-transparent hover:text-[#FF8D28] hover:border border-[#FF8D28] border hover:border-[#FF8D28] transition-all text-white font-bold py-2 px-4 rounded"><Icon icon="gridicons:add-outline" className="me-1" />Add New Product</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 gap-3 ">
                        {
                            data?.data.map((product: IProduct) => {
                                return (
                                    <div key={product.product_id} className="flex justify-center">  <Card lang={lang} setProductId={setProductId} product={product} handleUpdate={handleUpdate} handleDelete={handleDelete} />
                                    </div>
                                )
                            })
                        }

                    </div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Drawer open={showUpdate} setOpen={setShowUpdate}
                            label="Update Product"
                            content={
                                <Update product={selectedProduct} setShowUpdate={setShowUpdate} />
                            }
                        />
                    </Suspense>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Delete showDelete={showDelete} setShowDelete={setShowDelete} productId={productId} />
                    </Suspense>
                    {/*  <Activity mode={showCreate ? "visible" : "hidden"} > */}
                    <Suspense fallback={<div>Loading...</div>}>
                        <Drawer open={showCreate} setOpen={setShowCreate}
                            label="Create Product"
                            content={
                                <Create setShowCreate={setShowCreate} />
                            }
                        />
                    </Suspense>

                    {/*   </Activity> */}
                </div>
            </div>

        </>
    )
}
