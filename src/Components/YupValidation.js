import * as yup from "yup";

const SUPPORTED_FORMATS = ["image/jpeg", "image/jpg", "image/png"];
const FILE_SIZE = 524288;
const phoneNumberRegEx = /^[0-1]{2}[0-9]{9}/;
const PasswordRegEx = /^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

const YupValidation = yup.object().shape({
  name: yup
    .string()
    .max(30, "Can not be longer than 30 characters"),
    //.required("Required !"),

  email: yup.string().email("Enter a valid email"),

  password: yup
    .string(),

  phoneNumber: yup
    .string()
    .max(12, "Invalid Phone Number"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password does not match"),

  image: yup
    .mixed()
    //.required("File is Required")

  // website: yup.string().url().required("Website is Required"),

  // select: yup.string().required("Select a Option"),
});

export default YupValidation;
