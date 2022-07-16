<template>
  <input :value="modelValue" class="input" @input="emitValue" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputBase",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    modelModifiers: {
      default: () => ({
        capitalize: "",
      }),
    },
  },
  emits: ["update:modelValue"],
  methods: {
    emitValue(event: Event & { target: HTMLInputElement }) {
      let value = event.target.value;
      const modifierCapitalize = this.modelModifiers.capitalize;
      if (modifierCapitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1);
      }
      this.$emit("update:modelValue", value);
    },
  },
});
</script>

<style scoped></style>
