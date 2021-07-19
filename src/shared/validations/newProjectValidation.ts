import * as Yup from "yup";

const newProjectValidation = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório"),
  description: Yup.string().required("A descrição é obrigatória"),
  url: Yup.string().required("O link é obrigatório"),
});

export default newProjectValidation;
