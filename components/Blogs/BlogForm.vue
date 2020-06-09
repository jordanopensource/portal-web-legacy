<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedBlog.title">Blog Title</AppControlInput>
    <AppControlInput v-model="editedBlog.body" controlType='textarea'>Body</AppControlInput>
    <AppButton btn-style="button-blue-full" type="submit">Save</AppButton>
    <AppButton type="button" style="margin-left: 10px" btn-style="button-grey" @click="onCancel">Cancel</AppButton>
  </form>
</template>

<script>
  import axios from 'axios'
  import AppControlInput from "@/components/form-components/AppControlInput";
  import AppButton from "@/components/form-components/AppButton";
  export default {
    components: {
      AppControlInput,
      AppButton,
    },
    props: {
      blog: {
        type: Object,
        required: false
      }
    },
    data() {
      return {
        editedBlog: this.blog ?
          {
            ...this.blog
          } :
          {
            id: "",
            title: "",
            body: "",
          }
      };
    },
    methods: {
      onSave() {
        // Save the blog
        this.$emit('submit', this.editedBlog)
      },
      onCancel() {
        // Navigate back
        this.$router.back();
      }
    },
    head() {
      return {
        title: this.editedBlog.id ? 'Edit Blog' : 'Create Blog'
      }
    }
  };

</script>
