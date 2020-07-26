<template>
<span @click="update">
  <input type="radio" :id="id" :value="value">
  <div class="check" :class="{'checked' : this.model == this.value }"></div>
  <label :for="id">{{ label }}</label>
</span>
</template>

<script>
export default {
  name: 'RadioButton',
  model: {
      prop: 'model',
      event: 'onUpdate'
  },
  props: {
    id: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    model: {
      default: ''
    }
  },
  methods: {
    update() {
      this.$emit('onUpdate', this.value)
    }
  }
}
</script>

<style scoped>
input[type="radio"] {
  @apply absolute hidden;

}

span {
  @apply text-josa-black block relative h-auto;
}

[dir="ltr"] span {
  @apply float-left mr-4;
}

[dir="rtl"] span {
  @apply float-right ml-4;
}

input[type=radio] {
  position: absolute;
  visibility: hidden;
}

label {
  @apply block relative cursor-pointer;
  z-index: 9;
  -webkit-transition: all 0.25s linear;
}

[dir="ltr"] label {
  padding: 4px 0 4px 40px;
}

[dir="rtl"] label {
  padding: 4px 40px 4px 0;
}

span:hover label {
  @apply text-josa-blue
}

.check {
  @apply border border-josa-blue border-solid rounded;
  display: block;
  position: absolute;
  height: 30px;
  width: 30px;
  z-index: 5;
}

.check::before {
  content: '';
  @apply rounded block absolute;
  height: 20px;
  width: 20px;
  top: 4px;
  left: 4px;
  margin: auto;
  transition: background 0.25s linear;
  -webkit-transition: background 0.25s linear;
}

span:hover .check::before {
  @apply bg-josa-blue;
}

.checked::before {
  @apply bg-josa-blue;
}
</style>
