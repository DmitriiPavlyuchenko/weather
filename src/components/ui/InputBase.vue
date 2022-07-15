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
  },
  emits: ["update:modelValue"],
  methods: {
    emitValue(event: Event & { target: HTMLInputElement }) {
      const value = event.target.value;
      this.$emit("update:modelValue", value);
    },
  },
});
</script>

<style scoped></style>
