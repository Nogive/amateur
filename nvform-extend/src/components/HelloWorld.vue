<template>
  <div>
    <ncform :form-schema="formSchema" form-name="your-form-name" v-model="formSchema.value" @submit="submit()"></ncform>
    <button @click="submit()">Submit</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      formSchema: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          },
          custom: {
            type: 'string',
            ui: {
              widget: 'my-custom-comp',
              placeholder:'input',
              widgetConfig: {
                msg: 'hi',
              }
            }
          },
          other: {
            type: 'string',
            ui: {
              widget: 'my-custom-other',
              placeholder:'other',
              widgetConfig: {
                msg: 'hihi',
              }
            }
          },
        }
      }
    }
  },
  methods: {
    submit () {
      this.$ncformValidate('your-form-name').then(data => {
        if (data.result) {
          console.log(this.$data.formSchema.value)
          // do what you like to do
        }
      })
    }
  }
}
</script>
