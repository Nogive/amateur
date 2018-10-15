<template>
  <div class="input-box">
    <ncform :form-schema="formSchema" form-name="your-form-name" v-model="formSchema.value"></ncform>
    <van-button size="small" @click="submit()">Submit</van-button>
  </div>
</template>
<script>
import "@/mmform/index"
const userSchema={
  type: "array",
  items: {
    type: "object",
    properties:{
      name: {
        type: 'string',
        ui: {
          label:'Input 输入框',
          widget: 'mm-input',
          placeholder:'请输入姓名'
        }
      },
      count:{
        type:'number',
        ui:{
          label:'input-number 计数',
          widget:'mm-number'
        }
      },
      ok:{
        type:'boolean',
        ui:{
          label:'radio 是否',
          widget:'mm-radio'
        }
      },
      pullselect:{
        type:'string',
        value:'2',
        ui:{
          label:'select 下拉框选择器',
          widget:'mm-pull-select',
          widgetConfig:{
            enumSource:[
              {
                value:1,
                label:'选项1'
              },
              {
                value:2,
                label:'选项2'
              },
              {
                value:3,
                label:'选项3'
              },
            ]
          }
        }
      }
    },
    ui:{
      label:'南区标准'
    }
  },
  ui: {
    showLegend:true,
    label:'object',
    legend:'SKU配置表',
    widget: 'mm-object',
    widgetConfig: {
      collapsed: false
    }
  }
};

export default {
  data () {
    return {
      formSchema: {
        type: 'object',
        properties: {
          sku: userSchema
        }
      }
    }
  },
  methods: {
    submit () {
      this.$ncformValidate('your-form-name').then(data => {
        if (data.result) {
          console.log(this.$data.formSchema.value)
        }
      })
    }
  }
}
</script>
<style scoped lang="stylus">
.input-box
  width 100%
  padding 10px
</style>

