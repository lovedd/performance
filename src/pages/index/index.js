//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    dataList: [
        {name: 'data 0组', url: '../data_0/list'},
        {name: 'data 10组', url: '../data_10/list'},
        {name: 'data 400组', url: '../data_400/list'},
        {name: 'data 1000组', url: '../data_1000/list'},
        {name: 'complex data 1000组', url: '../data_complex_1000/list'},
        {name: 'other data 1000组', url: '../data_other_1000/list'},
        {name: 'nest data 1000组', url: '../data_nest_1000/list'},
        {name: 'set data 1000组', url: '../set_data_1000/list'},
        {name: 'complex set data 1000', url: '../set_data_complex_1000/list'},
        {name: 'nest set data 1000', url: '../set_data_nest_1000/list'},
        {name: 'other set data 1000组', url: '../set_data_other_1000/list'},
        {name: 'other set data nest 1000组', url: '../set_data_other_nest_1000/list'},
        {name: 'other set data complex 1000组', url: '../set_data_other_complex_1000/list'}
    ],
    pieceDataList: [
        {name: 'set data 1000组', url: '../set_data_1000/list'},
        {name: 'piece set data whole 1000/10', url: '../piece_set_data_continue_whole_1000_10/list'},
        {name: 'piece set data part 1000/10', url: '../piece_set_data_continue_part_1000_10/list'}
    ],
      complexDataSetDataList: [
          {name: 'complex data 1000 Set Data 1000', url: '../data_set_data_complex_1000_1000/list'},
          {name: 'complex data 1000 Set Data other 0', url: '../data_set_data_other_complex_1000_0/list'},
          {name: 'complex data 1000 Set Data other 1000', url: '../data_set_data_other_complex_1000_1000/list'}
      ],
      changeSetDataList: [
          {name: 'complex set data change nokey 0_400_1000', url: '../set_data_complex_change_nokey_0_400_1000/list'},
          {name: 'complex set data change key 0_400_1000', url: '../set_data_complex_change_key_0_400_1000/list'}
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
