 <template>
  <div class="next-table">
    <div class="next-side">
      <vside></vside>
    </div>
    <div class="next-content">
      <div>
        <h3>侧边菜单使用定位，右侧内容最外层也使用定位包裹table设置横坐标滚动，里面的内容设置最小宽带</h3>

        <el-table class="next-content-table" :data="tableData">
          <el-table-column prop="date" label="日烦烦烦期" width="130"></el-table-column>
          <el-table-column prop="name" label="姓的方法名" width="130"></el-table-column>
          <el-table-column prop="address" width="130" label="地覆盖址"></el-table-column>
          <el-table-column prop="name" label="姓规范化名" width="130"></el-table-column>
          <el-table-column prop="address" width="130" label="地豆腐干址"></el-table-column>
          <el-table-column prop="name" label="姓的方法名" width="130"></el-table-column>
          <el-table-column prop="name" label="姓的风格和名" width="130"></el-table-column>
          <el-table-column prop="address" width="130" label="地的风格和址"></el-table-column>
          <el-table-column prop="name" label="姓的风格和名" width="130"></el-table-column>
          <el-table-column prop="address" width="130" label="操作">
            <template slot="scope">
              <p>
                <a>操作11</a>
              </p>
              <p>
                <a>操作22</a>
              </p>
              <p>
                <a>操作33</a>
              </p>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import Vside from "../side";
export default {
  components: {
    Vside,
  },
  data() {
    return {
      //滚动条参数
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
};
</script>

<style >
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.next-side {
  position: fixed;
  top: 0px;
  width: 200px;
  height: 130vh;
  background: #545c64;
}
.next-content {
  /* 这一步是必须的 */
  position: absolute;
  top: 0px;
  left: 210px;
  bottom: 0px;
  width: auto;
  right: 0px;
  overflow-y: auto;
}
.next-content-table {
  /* 这一步是必须的 */
  min-width: 1350px;
  overflow: hidden;
}
p a {
  color: #3fa1e8;
  cursor: pointer;
}
</style>
