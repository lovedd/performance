//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    dataList: [
        {name: 'data 0组', url: '../data_0/list'},
        {name: 'data 1组', url: '../data_1/list'},
        {name: 'data 10组', url: '../data_10/list'},
        {name: 'data 100组', url: '../data_100/list'},
        {name: 'data 200组', url: '../data_200/list'},
        {name: 'data 400组', url: '../data_400/list'},
        {name: 'data 1000组', url: '../data_1000/list'}
    ],
    complexDataList: [
        {name: 'complex data 1000组', url: '../data_complex_1000/list'},
    ],
      complexDataSetDataList: [
          {name: 'complex data Set Data 1000组', url: '../data_set_data_complex_1000/list'},
      ]
  },
  //事件处理函数
  toPage: function(e) {
    let navTime = new Date().getTime();
    let data = e.currentTarget.dataset;
    let url = data.url;
    url += '?navTime=' + navTime;
    wx.navigateTo({
      url: url
    })
  },
  onLoad: function () {
  }
})
