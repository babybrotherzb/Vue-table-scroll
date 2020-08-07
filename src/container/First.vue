 <template>
  <div class="frist-table">
    <div class="frist-side">
      <vside></vside>
    </div>
    <div class="frist-content">
      <h3>手写滚动条，关联table滚动条，计算偏移量比例</h3>
      <el-table class="table" :data="tableData">
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
    <!-- 滚动条 -->
    <div class="out_box" style="width:calc(100% - 280px)" ref="out_box">
      <img
        style="left:210px;position:fixed;bottom:0px;"
        src="http://img.s.youfenba.com/material_thumb/74NGnHkeQs.png"
      />
      <div
        class="in_box"
        @mousedown="mouseDown"
        @mouseup="mouseUp"
        @mouseout="mouseUp"
        :style="old_new"
        ref="in_box"
      ></div>
      <img
        style="position:fixed;bottom:0px;right:55px;"
        src="http://img.s.youfenba.com/material_thumb/WTzsMr6RSX.png"
      />
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
      newx: "", // 第一次坐标
      oldx: "", // 移动的坐标
      outBoxWidth: "", // 滚动条长度
      moveWidth: "", // 可移动的长度
      old_new: {
        // 滚动条偏移量
        left: 0,
      },
      windowWidth: document.body.clientWidth - 280, //table宽度
      f: 0,
      leftstr: "",
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
  methods: {
    //滚动条事件
    mouseDown(event) {
      let e = event || window.event;
      let _self = this;
      this.f = 1;
      this.newx = e.clientX;
      this.leftstr = this.old_new.left;
      this.$refs.in_box.addEventListener("mousemove", function (event) {
        let e = event || window.event;
        _self.oldx = e.clientX;
        _self.moveWidth =
          (1 - _self.windowWidth / 1300) * _self.windowWidth -
          parseFloat(_self.leftstr); //模拟滚动条可移动长度
        if (_self.f) {
          _self.old_new.left =
            _self.oldx - _self.newx <= -parseFloat(_self.leftstr)
              ? "0px"
              : _self.oldx - _self.newx >= _self.moveWidth
              ? _self.moveWidth + parseFloat(_self.leftstr) + "px"
              : _self.oldx - _self.newx + parseFloat(_self.leftstr) + "px"; //模拟滚动条偏移量
          document.querySelectorAll(".el-table__body-wrapper")[0].scrollLeft =
            _self.oldx - _self.newx <= -parseFloat(_self.leftstr)
              ? 0
              : _self.oldx - _self.newx >= _self.moveWidth
              ? (_self.moveWidth + parseFloat(_self.leftstr)) *
                (1300 / _self.windowWidth)
              : (_self.oldx - _self.newx + parseFloat(_self.leftstr)) *
                (1300 / _self.windowWidth); //实际滚动条偏移量
        }
      });
    },
    mouseUp() {
      this.f = 0;
    },
    ifmove() {
      if (this.$route.path == "/") {
        //防止window.onresize 滥用
        let that = this;
        that.windowWidth = document.body.clientWidth - 280;
        if (that.windowWidth < 1300) {
          document.querySelectorAll(
            ".el-table__body-wrapper"
          )[0].style.overflow = "hidden";
          that.$refs.out_box.style.display = "block";
          that.$refs.in_box.style.width =
            (that.windowWidth / 1300) * that.windowWidth + "px"; //显示区域占百分比，在滚动条显示
          that.moveWidth = (1 - that.windowWidth / 1300) * that.windowWidth; //可移动宽度
        } else {
          that.$refs.out_box.style.display = "none";
        }
      }
    },
    //滚动条事件
  },
  mounted() {
    const that = this;
    window.onresize = function () {
      //监听浏览器窗口
      that.ifmove();
    };
    this.ifmove();
    window.onmouseup = () => {
      this.mouseUp();
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
.frist-table {
  position: relative;
}
.frist-side {
  position: fixed;
  top: 0px;
  width: 200px;
  height: 130vh;
  background: #545c64;
}
.frist-content {
  position: absolute;
  top: 0px;
  left: 200px;
  bottom: 0px;
  right: 0px;
}
.table {
  overflow: auto;
}
p a {
  color: #3fa1e8;
  cursor: pointer;
}
.out_box {
  height: 15px;
  width: calc(100% - 280px);
  background: #dfdfdf;
  z-index: 9;
  position: fixed;
  left: 225px;
  bottom: 0px;
}
.in_box {
  position: absolute;
  z-index: 9;
  left: 0px;
  height: 15px;
  background: #bebdbd;
  cursor: pointer;
}
.in_box:hover {
  background: #959595;
}
</style>
