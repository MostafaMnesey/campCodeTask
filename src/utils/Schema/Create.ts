import * as yup from "yup";
const validationSchema = yup.object().shape({
  product_name: yup
    .string()
    .required("Arabic product name is required")
    .min(2, "Must be at least 2 characters"),

  product_description: yup
    .string()
    .required("Arabic product description is required")
    .min(5, "Must be at least 5 characters"),

  number_of_pieces: yup
    .number()
    .typeError("Number of pieces must be a number")
    .required("Number of pieces is required")
    .positive("Must be positive")
    .integer("Must be an integer"),

  product_price: yup
    .number()
    .typeError("Product price must be a number")
    .required("Product price is required")
    .positive("Must be positive"),

  price_after_discount: yup
    .number()
    .typeError("Price after discount must be a number")
    .required("Price after discount is required")
    .min(0, "Cannot be negative"),

  discount: yup
    .number()
    .typeError("Discount must be a number")
    .required("Discount is required")
    .min(0, "Cannot be negative")
    .max(100, "Cannot exceed 100%"),

  product_name_en: yup
    .string()
    .required("English product name is required")
    .min(2, "Must be at least 2 characters"),

  product_description_en: yup
    .string()
    .required("English product description is required")
    .min(5, "Must be at least 5 characters"),

  product_hidden: yup
    .string()
    .oneOf(["yes", "no"], "Product hidden must be either 'yes' or 'no'")
    .required("Product hidden is required"),
});
export default validationSchema;
