<template>
  <div class="hello">
    <el-tabs :tab-position="tabPosition" :value="currentTab">
      <el-tab-pane label="input" name="input">
        <ncform :form-schema="inputSchema" form-name="inputSchema" v-model="inputSchema.value"></ncform>
        <el-button @click="submit('inputSchema')">Submit</el-button>
      </el-tab-pane>
      <el-tab-pane label="input-number" name="input-number">
        <ncform :form-schema="inputNumberSchema" form-name="inputNumberSchema" v-model="inputNumberSchema.value"></ncform>
        <el-button @click="submit('inputNumberSchema')">Submit</el-button>
      </el-tab-pane>
      <el-tab-pane label="textarea" name="textarea">
        <ncform :form-schema="textareaSchema" form-name="textareaSchema" v-model="textareaSchema.value"></ncform>
        <el-button @click="submit('textareaSchema')">Submit</el-button>
      </el-tab-pane>
      <el-tab-pane label="select" name="select">
        <ncform :form-schema="selectSchema" form-name="selectSchema" v-model="selectSchema.value"></ncform>
        <el-button @click="submit('selectSchema')">Submit</el-button>
      </el-tab-pane>
      <el-tab-pane label="color" name="color">
        <ncform :form-schema="colorSchema" form-name="colorSchema" v-model="colorSchema.value"></ncform>
        <el-button @click="submit('colorSchema')">Submit</el-button>
      </el-tab-pane>
      <el-tab-pane label="date" name="date">
        <ncform :form-schema="dateSchema" form-name="dateSchema" v-model="dateSchema.value"></ncform>
        <el-button @click="submit('dateSchema')">Submit</el-button>
      </el-tab-pane>
      <el-tab-pane label="slider" name="slider">
        <ncform :form-schema="sliderSchema" form-name="sliderSchema" v-model="sliderSchema.value"></ncform>
        <el-button @click="submit('sliderSchema')">Submit</el-button>
      </el-tab-pane>
      <el-tab-pane label="rate" name="rate">
        <ncform :form-schema="rateSchema" form-name="rateSchema" v-model="rateSchema.value"></ncform>
        <el-button @click="submit('rateSchema')">Submit</el-button>
      </el-tab-pane>
      <el-tab-pane label="radio" name="radio">
        <ncform :form-schema="radioSchema" form-name="radioSchema" v-model="radioSchema.value"></ncform>
        <el-button @click="submit('radioSchema')">Submit</el-button>
      </el-tab-pane>
      <el-tab-pane label="check" name="check">
        <ncform :form-schema="checkSchema" form-name="checkSchema" v-model="checkSchema.value"></ncform>
        <el-button @click="submit('checkSchema')">Submit</el-button>
      </el-tab-pane>
      <el-tab-pane label="upload" name="upload">
        <ncform :form-schema="uploadSchema" form-name="uploadSchema" v-model="uploadSchema.value"></ncform>
        <el-button @click="submit('uploadSchema')">Submit</el-button>
      </el-tab-pane>
      <el-tab-pane label="label" name="label">
        <ncform :form-schema="labelSchema" form-name="labelSchema" v-model="labelSchema.value"></ncform>
        <el-button @click="submit('labelSchema')">Submit</el-button>
      </el-tab-pane>
      <el-tab-pane label="object" name="object">
        <ncform :form-schema="objectSchema" form-name="objectSchema" v-model="objectSchema.value"></ncform>
        <el-button @click="submit('objectSchema')">Submit</el-button>
      </el-tab-pane>
      <el-tab-pane label="array" name="array">
        <ncform :form-schema="arraySchema" form-name="arraySchema" v-model="arraySchema.value"></ncform>
        <el-button @click="submit('arraySchema')">Submit</el-button>
      </el-tab-pane>
      <el-tab-pane label="demo" name="demo">
        <ncform :form-schema="demoSchema" form-name="demoSchema" v-model="demoSchema.value"></ncform>
        <el-button @click="submit('demoSchema')">Submit</el-button>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script src="./ncform.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
