<template>
  <div
    class="bg-primary container"
    :style="containerStyle">
    <p
      :style="labelStyle"
      class="text-secondary label">
      {{ label }}
    </p>

    <input
      :id="name"
      :name="name"
      :type="type"
      :value="inputValue"
      :placeholder="placeholder"
      @input="handleChange"
      @blur="handleBlur">
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useField } from "vee-validate";

interface IIsErroredContainer {
  color?: string;
  border?: string;
  background?: string;
}

interface IIsErroredLabel {
  color?: string;
  border?: string;
  background?: string;
}

export default defineComponent({
  name: "Input",
  props: {
    label: {
      type: String,
      required: false,
      default: "",
    },
    value: {
      type: String,
      required: false,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    isErrored: {
      type: Boolean,
      required: false,
      default: false,
    },
    isFocused: {
      type: Boolean,
      required: false,
      default: false,
    },
    type: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isErroredLocal: this.isErrored,
      isFocusedLocal: this.isFocused,
    };
  },
  setup(props) {
    // we don't provide any rules here because we are using form-level validation
    // https://vee-validate.logaretm.com/v4/guide/validation#form-level-validation
    const {
      value: inputValue,
      errorMessage,
      handleBlur,
      handleChange,
      meta,
    } = useField(props.name, undefined, {
      initialValue: props.value,
    });

    return {
      handleChange,
      handleBlur,
      errorMessage,
      inputValue,
      meta,
    };
  },
  computed: {
    containerStyle(): IIsErroredContainer {
      if (this.isErroredLocal) {
        return {
          border: "1px solid #c53030",
          background: "rgba(197,48,48,0.5)",
        };
      }
      if (this.isFocusedLocal) {
        return {
          border: "1px solid #c53030",
          background: "rgba(197,48,48,0.5)",
        };
      }
      return {};
    },
    labelStyle(): IIsErroredLabel {
      if (this.isErrored) {
        return {
          color: "#c53030",
        };
      }
      return {};
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  border-radius: 10px;
  padding: 16px;
  width: 90%;
  margin: 0% auto;
  display: flex;
  align-items: center;
}
.label {
  margin-right: 16px;
}
.input {
  flex: 1;
  background: transparent;
  border: 0;
  color: #f4ede8;
}
.input::placeholder {
  color: #666360;
}
</style>