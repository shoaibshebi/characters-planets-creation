import * as Yup from "yup";

const CreatePlanetFormValidation = Yup.object().shape({
  name: Yup.string().min(0, "Too Short!").max(21, "Too Long!").required(),
  description: Yup.string()
    .min(14, "Too Short!")
    .max(300, "Too Long!")
    .required(),
  code: Yup.string()
    .matches(/^[a-zA-z]{2}-[a-zA-z]{3}-[1-9]{2}/, "Invalid Code!")
    .required(),
  image: Yup.string()
    .matches(
      /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gim,
      "Invalid URL!"
    )
    .url("Invalid URL!")
    .required(),
});

const CreateCharacterFormValidation = Yup.object().shape({
  name: Yup.string().min(0, "Too Short!").max(21, "Too Long!").required(),
  planet: Yup.string()
    .matches(/^[a-zA-z]{2}-[a-zA-z]{3}-[1-9]{2}/, "Invalid Code!")
    .required(),
  image: Yup.string()
    .matches(
      /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gim,
      "Invalid URL!"
    )
    .url("Invalid URL!")
    .required(),
  description: Yup.string()
    .min(14, "Too Short!")
    .max(300, "Too Long!")
    .required(),
});

export { CreatePlanetFormValidation, CreateCharacterFormValidation };
