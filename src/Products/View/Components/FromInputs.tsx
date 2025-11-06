import React from "react";
import type { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import type { ICreateProduct } from "../../../utils/Interfaces/product";

type props = {
    register: UseFormRegister<ICreateProduct>;
    errors: FieldErrors<ICreateProduct>;
    setValue?: UseFormSetValue<ICreateProduct>
};

export default function FromInputs({ register, errors }: props) {
    // helper function to allow only numbers
    const handleNumberInput = (e: React.FormEvent<HTMLInputElement>) => {
        e.currentTarget.value = e.currentTarget.value.replace(/[^0-9.]/g, "");
    };


    return (
        <div className="grid gap-6 mb-6 md:grid-cols-2">
            {/* Arabic Name */}
            <div>
                <label htmlFor="product_name" className="block mb-2 text-sm font-medium text-[#2E2E2E]">
                    Product Name (Arabic)
                </label>
                <input
                    type="text"
                    id="product_name"
                    {...register("product_name")}
                    placeholder="Product name in Arabic"
                    className={`bg-white border ${errors.product_name ? "border-red-500" : "border-[#FF8D28]/50"
                        } text-gray-900 text-sm rounded-lg focus:ring-[#FF8D28] focus:border-[#FF8D28] block w-full p-2.5`}
                />
                {errors.product_name && <p className="text-red-500 text-sm mt-1">{errors.product_name.message}</p>}
            </div>

            {/* English Name */}
            <div>
                <label htmlFor="product_name_en" className="block mb-2 text-sm font-medium text-[#2E2E2E]">
                    Product Name (English)
                </label>
                <input
                    type="text"
                    id="product_name_en"
                    {...register("product_name_en")}
                    placeholder="Product name in English"
                    className={`bg-white border ${errors.product_name_en ? "border-red-500" : "border-[#FF8D28]/50"
                        } text-gray-900 text-sm rounded-lg focus:ring-[#FF8D28] focus:border-[#FF8D28] block w-full p-2.5`}
                />
                {errors.product_name_en && <p className="text-red-500 text-sm mt-1">{errors.product_name_en.message}</p>}
            </div>

            {/* Arabic Description */}
            <div>
                <label htmlFor="product_description" className="block mb-2 text-sm font-medium text-[#2E2E2E]">
                    Product Description (Arabic)
                </label>
                <textarea
                    id="product_description"
                    {...register("product_description")}
                    placeholder="Enter product description in Arabic"
                    rows={3}
                    className={`bg-white border ${errors.product_description ? "border-red-500" : "border-[#FF8D28]/50"
                        } text-gray-900 text-sm rounded-lg focus:ring-[#FF8D28] focus:border-[#FF8D28] block w-full p-2.5`}
                />
                {errors.product_description && (
                    <p className="text-red-500 text-sm mt-1">{errors.product_description.message}</p>
                )}
            </div>

            {/* English Description */}
            <div>
                <label htmlFor="product_description_en" className="block mb-2 text-sm font-medium text-[#2E2E2E]">
                    Product Description (English)
                </label>
                <textarea
                    id="product_description_en"
                    {...register("product_description_en")}
                    placeholder="Enter product description in English"
                    rows={3}
                    className={`bg-white border ${errors.product_description_en ? "border-red-500" : "border-[#FF8D28]/50"
                        } text-gray-900 text-sm rounded-lg focus:ring-[#FF8D28] focus:border-[#FF8D28] block w-full p-2.5`}
                />
                {errors.product_description_en && (
                    <p className="text-red-500 text-sm mt-1">{errors.product_description_en.message}</p>
                )}
            </div>

            {/* Price */}
            <div>
                <label htmlFor="product_price" className="block mb-2 text-sm font-medium text-[#2E2E2E]">
                    Price
                </label>
                <input
                    type="text"
                    id="product_price"
                    {...register("product_price")}
                    onInput={handleNumberInput}
                    placeholder="Enter product price"
                    className={`bg-white border ${errors.product_price ? "border-red-500" : "border-[#FF8D28]/50"
                        } text-gray-900 text-sm rounded-lg focus:ring-[#FF8D28] focus:border-[#FF8D28] block w-full p-2.5`}
                />
                {errors.product_price && <p className="text-red-500 text-sm mt-1">{errors.product_price.message}</p>}
            </div>

            {/* Price After Discount */}
            <div>
                <label htmlFor="price_after_discount" className="block mb-2 text-sm font-medium text-[#2E2E2E]">
                    Price After Discount
                </label>
                <input
                    type="text"
                    id="price_after_discount"
                    {...register("price_after_discount")}
                    onInput={handleNumberInput}
                    placeholder="Price After Discount"
                    className={`bg-white border ${errors.price_after_discount ? "border-red-500" : "border-[#FF8D28]/50"
                        } text-gray-900 text-sm rounded-lg focus:ring-[#FF8D28] focus:border-[#FF8D28] block w-full p-2.5`}
                />
                {errors.price_after_discount && (
                    <p className="text-red-500 text-sm mt-1">{errors.price_after_discount.message}</p>
                )}
            </div>

            {/* Discount */}
            <div>
                <label htmlFor="discount" className="block mb-2 text-sm font-medium text-[#2E2E2E]">
                    Discount %
                </label>
                <input
                    type="text"
                    id="discount"
                    {...register("discount")}
                    onInput={handleNumberInput}
                    placeholder="Discount %"
                    className={`bg-white border ${errors.discount ? "border-red-500" : "border-[#FF8D28]/50"
                        } text-gray-900 text-sm rounded-lg focus:ring-[#FF8D28] focus:border-[#FF8D28] block w-full p-2.5`}
                />
                {errors.discount && <p className="text-red-500 text-sm mt-1">{errors.discount.message}</p>}
            </div>

            {/* Number of Pieces */}
            <div>
                <label htmlFor="number_of_pieces" className="block mb-2 text-sm font-medium text-[#2E2E2E]">
                    Number of Pieces
                </label>
                <input
                    type="text"
                    id="number_of_pieces"
                    {...register("number_of_pieces")}
                    onInput={handleNumberInput}
                    placeholder="Number of Pieces"
                    className={`bg-white border ${errors.number_of_pieces ? "border-red-500" : "border-[#FF8D28]/50"
                        } text-gray-900 text-sm rounded-lg focus:ring-[#FF8D28] focus:border-[#FF8D28] block w-full p-2.5`}
                />
                {errors.number_of_pieces && (
                    <p className="text-red-500 text-sm mt-1">{errors.number_of_pieces.message}</p>
                )}
            </div>

            {/* Hidden Product */}
            <div>
                <label htmlFor="product_hidden" className="block mb-2 text-sm font-medium text-[#2E2E2E]">
                    Hidden Product
                </label>
                <select
                    id="product_hidden"
                    {...register("product_hidden")}
                    className={`bg-white border ${errors.product_hidden ? "border-red-500" : "border-[#FF8D28]/50"
                        } text-gray-900 text-sm rounded-lg focus:ring-[#FF8D28] focus:border-[#FF8D28] block w-full p-2.5`}
                >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </select>
                {errors.product_hidden && (
                    <p className="text-red-500 text-sm mt-1">{errors.product_hidden.message}</p>
                )}
            </div>
        </div>
    );
}
