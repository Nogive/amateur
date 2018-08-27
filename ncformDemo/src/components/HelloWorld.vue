<template>
  <div class="hello">
    <el-tabs :tab-position="tabPosition">
      <el-tab-pane label="input">
        <ncform :form-schema="inputSchema" form-name="inputSchema" v-model="inputSchema.value"></ncform>
        <el-button @click="submit('inputSchema')">Submit</el-button>
      </el-tab-pane>
      <el-tab-pane label="input-number">
        <ncform :form-schema="inputNumberSchema" form-name="inputNumberSchema" v-model="inputNumberSchema.value"></ncform>
        <el-button @click="submit('inputNumberSchema')">Submit</el-button>
      </el-tab-pane>
      <el-tab-pane label="textarea">
        <ncform :form-schema="textareaSchema" form-name="textareaSchema" v-model="textareaSchema.value"></ncform>
        <el-button @click="submit('textareaSchema')">Submit</el-button>
      </el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script src="./ncform.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
