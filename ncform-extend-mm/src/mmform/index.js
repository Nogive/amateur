import Vue from "vue";
import vueNcform from "@ncform/ncform";
import mmInput from "@/components/controls/mmInput";
import mmNumber from "@/components/controls/mmNumber";
import mmTextarea from "@/components/controls/mmTextarea";
import mmRadio from "@/components/controls/mmRadio";
import mmCheckbox from "@/components/controls/mmCheckbox";
import mmSelect from "@/components/controls/mmSelect";
import mmDatePicker from "@/components/controls/mmDatePicker";
import mmTimePicker from "@/components/controls/mmTimePicker";
import mmPullSelect from "@/components/controls/mmPullSelect";
import mmMulSelect from "@/components/controls/mmMulSelect";
Vue.use(vueNcform, {
  extComponents: {
    mmInput,
    mmNumber,
    mmTextarea,
    mmRadio,
    mmCheckbox,
    mmSelect,
    mmDatePicker,
    mmTimePicker,
    mmPullSelect,
    mmMulSelect
  }
});
