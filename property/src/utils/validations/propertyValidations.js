import * as yup from "yup";

export const propertySchema = yup
  .object({
    title: yup
      .string()
      .required("Title is required.")
      .max(100, "Title can be contain 50 characters."),
    category: yup.string().required("Category is required."),
    type: yup.string().required("Property type is required."),
    district: yup.string().required("District is required."),
    city: yup.string().required("City is required."),
    zip: yup
      .string()
      .required("Zip code is required.")
      .matches(/^\d+$/, "Zip code must contain only numbers.")
      .max(5, "Invalid zip code."),
    street: yup.string().required("Street address is required."),
    area: yup
      .string()
      .matches(/^\d+$/, "Total area must contain only numbers."),
    bedrooms: yup
      .string()
      .matches(/^\d+$/, "Bedrooms must contain only numbers."),
    bathrooms: yup
      .string()
      .matches(/^\d+$/, "Bathrooms must contain only numbers."),
    parking: yup
      .string()
      .matches(/^\d+$/, "Parking spots must contain only numbers."),
    description: yup
      .string()
      .required("Description is required.")
      .max(2500, "Description can be contain 50 characters.."),
    currencyType: yup.string().required("Currency is required."),
    total: yup
      .string()
      .required("Total is required.")
      .matches(/^\d+$/, "Total must contain only numbers."),
    period: yup.string().required("Period is required."),
  })
  .required();
