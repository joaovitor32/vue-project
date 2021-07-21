<template>
  <Form v-slot="{ errors }" :validation-schema="schema" @submit="onSubmit">
    <Input
      :name="'name'"
      :type="'text'"
      :label="'nome'"
      :is-errored="!!errors.name"
    />
    <Input
      :name="'description'"
      :type="'text'"
      :label="'descrição'"
      :is-errored="!!errors.description"
    />
    <Input
      :name="'url'"
      :type="'text'"
      :label="'url'"
      :is-errored="!!errors.url"
    />
    <Button :button-title="'Cadastrar'" />
  </Form>
</template>

<script lang="ts">
// https://jasonwatmore.com/post/2020/10/01/vue-3-veevalidate-form-validation-example
// https://vee-validate.logaretm.com/v4/guide/components/validation#custom-field-labels

/*

https://codesandbox.io/s/custom-text-input-with-vee-validate-v4-8k9gy?from-embed=&file=/src/App.vue

*/

import { defineComponent } from "vue";
import newProjectValidation from "../../shared/validations/newProjectValidation";
import { Form } from "vee-validate";
export default defineComponent({
  name: "NewProject",
  components: {
    Form,
  },
  setup() {
    const schema = newProjectValidation;
    const onSubmit = () => {
      console.log("Button");
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
</style>