<template>
  <label v-if="label">{{ label }}</label>
  <input
    :value="modelValue"
    :placeholder="label"
    class="field"
    v-bind="$attrs"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    label: {
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>
