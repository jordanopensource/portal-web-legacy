<template>
  <div class="input-control">
    <label>
      <slot /></label>
    <input v-if="controlType === 'input'" v-bind="$attrs" :value="value" @input="$emit('input', $event.target.value)"
      :placeholder="label" :required="required">
    <input v-if="controlType === 'email'" type="email" v-bind="$attrs" :value="value"
      @input="$emit('input', $event.target.value)" :placeholder="label" :required="required">
    <input v-if="controlType === 'password'" type="password" v-bind="$attrs" :value="value"
      @input="$emit('input', $event.target.value)" :placeholder="label" :required="required">
    <textarea v-if="controlType === 'textarea'" rows="5" :value="value" @input="$emit('input', $event.target.value)"
      :placeholder="label" :required="required"></textarea>
  </div>
</template>

<script>
  export default {
    name: 'AppInputControl',
    props: {
      controlType: {
        type: String,
        default: 'input'
      },
      value: {
        type: String,
        default: ''
      },
      label: {
        type: String,
        default: ''
      },
      required: {
        type: Boolean,
        default: false
      }
    }
  }

</script>

<style scoped>
  input {
    @apply w-full mb-4 p-4 rounded-sm;
  }

  input::placeholder {
    @apply text-josa-warm-grey-dark;
  }

  textarea::placeholder {
    @apply text-josa-warm-grey-dark;
  }

  .input-control label {
    display: block;
  }

  .input-control input,
  .input-control textarea {
    display: block;
    width: 100%;
    box-sizing: border-box;
    font: inherit;
    border: 1px solid #e0dddb;
    padding: 10px;
  }

  .input-control input:focus,
  .input-control textarea:focus {
    background-color: #f7f6f5;
    outline: none;
  }

</style>
