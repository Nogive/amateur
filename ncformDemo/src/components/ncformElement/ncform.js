import Vue from "vue";
import vueNcform from "@ncform/ncform";

import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import ncformStdComps from "@ncform/ncform-theme-elementui";

Vue.use(Element);
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
      value: "this is value",
      ui: {
        label: "基础textarea",
        widget: "textarea",
        readonly: true
      }
    },
    message1: {
      type: "string",
      ui: {
        widget: "textarea",
        label: "行数，自动伸缩",
        widgetConfig: {
          rows: 3,
          autoSize: {
            minRows: 2,
            maxRows: 5
          }
        }
      }
    }
  }
};
var selectSchema = {
  type: "object",
  properties: {
    choice: {
      type: "boolean",
      value: false,
      ui: {
        label: "基础下拉框",
        widget: "select",
        readonly: true
      }
    },
    choice1: {
      type: "string",
      ui: {
        label: "文字占位符 多选",
        widget: "select",
        widgetConfig: {
          placeholder: "please select",
          clearable: true, //清除按钮
          multiple: true, //支持多选
          filterable: true, //过滤器
          enumSource: [
            {
              value: 1,
              label: "option1"
            },
            {
              value: 2,
              label: "option2"
            },
            {
              value: 3,
              label: "option3"
            }
          ]
        }
      }
    }
  }
};
var colorSchema = {
  type: "object",
  properties: {
    color: {
      type: "string",
      value: "#ccffff",
      ui: {
        widget: "color-picker",
        readonly: true
      }
    }
  }
};
var dateSchema = {
  type: "object",
  properties: {
    date: {
      type: "string",
      ui: {
        widget: "date-picker",
        placeholder: "点击这里选择日期"
      }
    },
    date1: {
      type: "string",
      ui: {
        label: "选择时间 year mouth date week datetime",
        widget: "date-picker",
        placeholder: "点击这里选择日期",
        widgetConfig: {
          type: "datetime"
        }
      }
    },
    date2: {
      type: "string",
      ui: {
        label: "显示格式————年 yyyy，月 MM，日 dd，小时 HH，分 mm，秒 ss",
        widget: "date-picker",
        placeholder: "点击这里选择日期",
        widgetConfig: {
          type: "date",
          format: "yyyy/MM/dd"
        }
      }
    }
  }
};
var sliderSchema = {
  type: "object",
  properties: {
    slider: {
      type: "number",
      value: 20,
      ui: {
        widget: "slider",
        widgetConfig: {
          min: -2,
          max: 50,
          step: 5
        }
      }
    }
  }
};
var rateSchema = {
  type: "object",
  properties: {
    rate: {
      type: "number",
      value: 3,
      ui: {
        widget: "rate",
        widgetConfig: {
          max: 10,
          allowHalf: true
        }
      }
    },
    rate1: {
      type: "number",
      value: 1.5,
      ui: {
        label: "高低分不同表现",
        widget: "rate",
        widgetConfig: {
          allowHalf: true,
          showScore: true, //显示分数
          lowThreshold: 2,
          highThreshold: 4,
          colors: ["red", "green", "blue"],
          voidColor: "black",
          voidIconClass: "el-icon-info"
        }
      }
    },
    rate2: {
      type: "number",
      value: 1.5,
      ui: {
        label: "显示辅助文字",
        widget: "rate",
        widgetConfig: {
          showText: true,
          texts: ["极差", "失望", "一般", "满意", "惊喜"],
          textColor: "red"
        }
      }
    }
  }
};
var radioSchema = {
  type: "object",
  properties: {
    radio: {
      type: "boolean",
      value: true,
      ui: {
        widgetConfig: {
          arrangement: "v"
        }
      }
    },
    radio1: {
      type: "boolean",
      value: true,
      ui: {
        label: "tab形式",
        widgetConfig: {
          type: "button"
        }
      }
    },
    radio2: {
      type: "number",
      ui: {
        label: "本地数据源",
        widget: "radio",
        widgetConfig: {
          enumSource: [
            {
              value: 1,
              label: "red"
            },
            {
              value: 2,
              label: "orange"
            },
            {
              value: 3,
              label: "blue"
            }
          ]
        }
      }
    }
  }
};
var checkSchema = {
  type: "object",
  properties: {
    check: {
      type: "boolean",
      ui: {
        widget: "checkbox"
      }
    },
    check1: {
      type: "array",
      ui: {
        label: "本地数据源",
        widget: "checkbox",
        widgetConfig: {
          //type: "button", //按钮形式
          arrangement: "v",
          enumSource: [
            {
              value: 1,
              label: "item1"
            },
            {
              value: 2,
              label: "item2"
            },
            {
              value: 3,
              label: "item3"
            }
          ]
        }
      }
    },
    check2: {
      type: "array",
      ui: {
        label: "是否显示全选",
        widget: "checkbox",
        widgetConfig: {
          selectAll: true,
          enumSource: [
            {
              value: 1,
              label: "item1"
            },
            {
              value: 2,
              label: "item2"
            },
            {
              value: 3,
              label: "item3"
            }
          ]
        }
      }
    }
  }
};
var uploadSchema = {
  type: "object",
  properties: {
    files: {
      type: "array",
      value: [
        {
          name: "女装.jpg",
          url:
            "//a.vpimg2.com/upload/merchandise/pdc/176/162/8951543587594162176/0/2152212-5.jpg"
        }
      ],
      ui: {
        widget: "upload",
        widgetConfig: {
          listType: "picture",
          showFileList: true
        }
      }
    },
    files1: {
      type: "array",
      ui: {
        label: "拖拽上传",
        widget: "upload",
        widgetConfig: {
          drag: true,
          limit: 4,
          multiple: true
          //accept: ".jpg"//接受文件的类型
        }
      }
    }
  }
};
var labelSchema = {
  type: "object",
  properties: {
    label: {
      type: "string",
      default:
        "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes",
      ui: {
        widget: "label",
        widgetConfig: {
          multiLine: true
        }
      }
    }
  }
};

var objectSchema = {
  type: "object",
  properties: {
    user: {
      type: "object",
      properties: {
        name: {
          type: "string",
          ui: {
            label: "姓名",
            placeholder: "请输入姓名",
            description: "请填写你的姓名",
            help: {
              show: true,
              text: "*",
              content: "关于填写姓名的重要性"
            }
          }
        }
      }
    },
    user1: {
      type: "object",
      properties: {
        name: {
          type: "string"
          // ui: {
          //   columns: 6
          // }
        },
        pass: {
          type: "string"
          // ui: {
          //   columns: 6
          // }
        },
        email: {
          type: "string"
          // ui: {
          //   columns: 12
          // }
        }
      },
      ui: {
        widgetConfig: {
          layout: "h",
          labelWidth: "150px"
          //collapsed: true//是否折叠
        }
      }
    }
  }
};
var arraySchema = {
  type: "object",
  properties: {
    array: {
      type: "array",
      items: {
        type: "string"
      },
      ui: {
        widget: "array-table",
        label: "array-table",
        widgetConfig: {
          addTxt: "增加",
          delAllTxt: "删除全部",
          disableReorder: true //禁止排序
        }
      }
    },
    arrayTabs: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: {
            type: "string"
          },
          pass: {
            type: "string"
          }
        }
      },
      ui: {
        widget: "array-tabs",
        widgetConfig: {
          tabPosition: "left"
          //disableDel: true //禁止删除项
        }
      }
    },
    arrayTabs1: {
      type: "array",
      items: {
        type: "string"
      },
      ui: {
        widget: "array-tabs",
        showLegend: true, //是否显示标题
        legend: "这里是标题",
        widgetConfig: {
          //disableDel: true //禁止删除项
        }
      }
    }
  }
};
var demoSchema = {
  type: "object",
  properties: {
    isRequired: {
      type: "boolean",
      ui: {
        label: "是否必填",
        linkFields: [
          {
            fieldPath: "num_1",
            rules: ["required"]
          },
          {
            fieldPath: "num_2",
            rules: ["required"]
          }
        ]
      }
    },
    num_1: {
      type: "number",
      ui: {
        description: "num_1 >= num_2",
        columns: 6,
        linkFields: [
          {
            fieldPath: "num_2",
            rules: ["maximum"]
          }
        ]
      },
      rules: {
        required: {
          value: "dx: {{$root.isRequired}}"
        },
        minimum: {
          value: "dx: {{$root.num_2}} || 0",
          errMsg: "num_1 >= num_2"
        }
      }
    },
    num_2: {
      type: "number",
      ui: {
        columns: 6,
        linkFields: [
          {
            fieldPath: "num_1",
            rules: ["minimum"]
          }
        ]
      },
      rules: {
        required: {
          value: "dx: {{$root.isRequired}}"
        },
        maximum: {
          value: "dx: {{$root.num_1}} || 0",
          errMsg: "num_2 <= num_1"
        }
      }
    },
    age: {
      type: "string",
      ui: {
        placeholder: 'dx: "年龄必须大于" + {{$const.ageLimit}}'
      },
      rules: {
        customRule: [
          {
            script: "dx: {{$root.age}} > {{$const.ageLimit}}",
            errMsg: "请填写正确的年龄"
          }
        ]
      }
    }
  },
  globalConfig: {
    constants: {
      ageLimit: 18
    }
  }
};
export default {
  name: "HelloWorld",
  data() {
    return {
      tabPosition: "left",
      currentTab: "input",
      inputSchema: inputSchema,
      inputNumberSchema: inputNumberSchema,
      textareaSchema: textareaSchema,
      selectSchema: selectSchema,
      colorSchema: colorSchema,
      dateSchema: dateSchema,
      sliderSchema: sliderSchema,
      rateSchema: rateSchema,
      radioSchema: radioSchema,
      checkSchema: checkSchema,
      uploadSchema: uploadSchema,
      labelSchema: labelSchema,
      objectSchema: objectSchema,
      arraySchema: arraySchema,
      demoSchema: demoSchema
    };
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
};
