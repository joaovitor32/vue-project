<template>
  <Form
    v-slot="{ errors }"
    class="form"
    :validation-schema="schema"
    @submit="onSubmit">
    <Input
      :name="'name'"
      :type="'text'"
      :label="'nome'"
      :is-errored="!!errors.name" />
    <Input
      :name="'description'"
      :type="'text'"
      :label="'descrição'"
      :is-errored="!!errors.description" />
    <Input
      :name="'url'"
      :type="'text'"
      :label="'url'"
      :is-errored="!!errors.url" />
    <Button :button-title="'Cadastrar'" />
  </Form>
</template>

<script lang="ts">
// https://jasonwatmore.com/post/2020/10/01/vue-3-veevalidate-form-validation-example
// https://vee-validate.logaretm.com/v4/guide/components/validation#custom-field-labels

import { defineComponent } from "vue";
import { Form, FormState } from "vee-validate";
import { uuid } from "vue-uuid";
import newProjectValidation from "../../shared/validations/newProjectValidation";
import api from "../../shared/service/axios";

import Project from "../../shared/entities/ProjectEntity";

type ProjectData = Omit<Project, "id">;

interface IResetForm {
  resetForm: (state?: Partial<FormState<ProjectData>>) => void;
}

export default defineComponent({
  name: "NewProject",
  components: {
    Form,
  },
  setup() {
    const schema = newProjectValidation;
    const onSubmit = async (
      { name, description, url }: Omit<Project, "id">,
      { resetForm }: IResetForm
    ) => {
      await api.post("projects", {
        id: uuid.v4(),
        name,
        description,
        url,
      });
      resetForm();
    };
    return {
      schema,
      onSubmit,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
  justify-items: center;
  text-align: center;
  align-items: center;
  margin-top: 8%;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}
</style>