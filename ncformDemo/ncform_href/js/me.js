Vue.use(vueNcform, { extComponents: ncformStdComps });
var inputSchema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      ui: {
        label: "基础",
        readonly: true,
        disabled: true
      }
    },
    name1: {
      type: "string",
      ui: {
        label: "placeholder",
        placeholder: "fill name"
      }
    },
    password: {
      type: "string",
      ui: {
        label: "图标",
        widgetConfig: {
          type: "password", //input的type
          prefixIcon: "el-icon-search", //输入框前面icon
          suffixIcon: "el-icon-date" //输入框后面的icon
        }
      }
    },
    //根据输入提示
    keyword: {
      type: "string",
      ui: {
        label: "输入提示",
        widgetConfig: {
          autocomplete: {
            itemValueField: "keyword",
            itemTemplate: "<span>{{item.keyword}}</span>",
            enumSource: [
              {
                keyword: "hello"
              },
              {
                keyword: "oppo"
              },
              {
                keyword: "vivo"
              }
            ]
          }
        }
      }
    },
    //input 前置/后置标签
    keyword1: {
      type: "string",
      ui: {
        label: "前置/后置标签",
        widgetConfig: {
          compound: {
            prependLabel: "http://",
            appendLabel: "Go"
          }
        }
      }
    },
    keyword2: {
      type: "string",
      ui: {
        widgetConfig: {
          compound: {
            prependIcon: "el-icon-search",
            appendIcon: "el-icon-edit"
          }
        }
      }
    },
    //前置下拉框
    user: {
      type: "object",
      ui: {
        label: "前置/后置下拉框",
        widget: "input",
        widgetConfig: {
          modelField: "demo",
          compound: {
            prependSelect: {
              itemLabelField: "label",
              itemValueField: "value",
              enumSource: [
                {
                  value: 1,
                  label: "男"
                },
                {
                  value: 2,
                  label: "女"
                }
              ],
              modelField: "gender"
            },
            appendSelect: {
              itemLabelField: "label",
              itemValueField: "value",
              enumSource: [
                {
                  value: 1,
                  label: "18"
                },
                {
                  value: 2,
                  label: "19"
                }
              ],
              modelField: "age"
            }
          }
        }
      }
    },
    upload: {
      type: "string",
      ui: {
        label: "上传",
        widgetConfig: {
          type: "file",
          upload: {
            uploadUrl: "http://",
            resField: "data.data.url",
            fileField: "pic",
            data: {
              is_slices: 0
            },
            accept: ".jpg,.png",
            constraint: {
              width: 100,
              height: 100,
              sizeFixed: false,
              maxSize: 0,
              minSize: 0
            },
            uploadText: "点击上传"
          }
        }
      }
    }
  }
};
var inputNumberSchema = {
  type: "object",
  properties: {
    count: {
      type: "number",
      value: 20,
      ui: {
        widget: "input-number",
        label: "基础计数",
        disabled: true
      }
    },
    count1: {
      type: "number",
      ui: {
        widget: "input-number",
        label: "最大，最小值，步长",
        widgetConfig: {
          max: 8,
          step: 2
        }
      }
    }
  }
};
var textareaSchema = {
  type: "object",
  properties: {
    message: {
      type: "string",
      ui: {
        label: "基础textarea",
        widget: "textarea"
      }
    }
  }
};
new Vue({
  el: "#demo",
  data: {
    tabPosition: "left",
    inputSchema: inputSchema,
    inputNumberSchema: inputNumberSchema,
    textareaSchema: textareaSchema
  },
  methods: {
    submit(param) {
      let vm = this;
      this.$ncformValidate(param).then(data => {
        console.log(data.result);
        if (data.result) {
          //this.$data  VUE 的data数据
          console.log(this.$data[param].value); //获取表单数据
        }
      });
    }
  }
});
