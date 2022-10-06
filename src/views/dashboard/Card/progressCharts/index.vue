<template>
  <!-- 容器 -->
  <div class="charts" ref="charts"></div>
</template>

<script>
//引入echarts
import echarts from "echarts";
export default {
  name: "",
  mounted() {
    //初始化echarts实例
    let lineCharts = echarts.init(this.$refs.charts);
    //配置数据
    lineCharts.setOption({
      xAxis: {
        //隐藏x轴
        show: false,
        //最小值与最大值的设置
        min: 0,
        max: 100,
      },
      yAxis: {
        //隐藏y轴
        show: false,
        //均分
        type: "category",
      },
      //系列
      series: [
        {
          //图标形式-柱状图
          type: "bar",
          data: [78],
          color: "#b03a5b",
          //背景颜色的设置
          showBackground: true,
          backgroundStyle: {
            color: "#eee",
          },
          //柱状图的宽度
          barWidth: 10,
          //文本标签
          label: {
            show: true,
            //改变文本内容
            formatter: "|",
            //文本标签位置调试
            position: "right",
          },
        },
      ],
      //布局调试
      grid: {
        top: "0px",
        left: "0px",
        right: "0px",
        bottom: "0px",
      },
    });
  },
};
</script>

<style scoped>
.charts {
  width: 100%;
  height: 100%;
}
</style>