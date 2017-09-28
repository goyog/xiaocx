Page({
  data: {
    // banner数据
    banner:{
      imgUrls: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],
      indicatorDots: true,
      indicatorColor: "#000",
      indicatorActiveColor: "#003955",
      autoplay: true,
      interval: 5000,
      duration: 1000
    },
    // 功能数据
    function:{
      array:[{
        "img":"../../image/functionImg.png",
        "name":"限时抢购"
      },{
        "img": "../../image/functionImg.png",
        "name":"当天可达"
      }, {
        "img": "../../image/functionImg.png",
        "name": "新人礼券"
      },{
        "img": "../../image/functionImg.png",
        "name": "全部商品"
      },{
        "img": "../../image/functionImg.png",
        "name": "水果蛋糕"
      },{
        "img": "../../image/functionImg.png",
        "name": "奶油蛋糕"
      },{
        "img": "../../image/functionImg.png",
        "name": "创意蛋糕"
      },{
          "img": "../../image/functionImg.png",
        "name": "新品推荐"
      }]
    },
    // 品牌街
    brand:{
      title:"品牌街",
      array:[
        "../../image/brandImg.jpg",
        "../../image/brandImg.jpg",
        "../../image/brandImg.jpg",
        "../../image/brandImg.jpg",
        "../../image/brandImg.jpg",
        "../../image/brandImg.jpg",
        "../../image/brandImg.jpg"
      ]
    },
    goods:{
      array:[{
        "img":"../../image/goodsImg.jpg",
        "name":"【全国配送】八宝聚富",
        "nameBrand":"wink cake",
        "newMoney":"￥125",
        "oldMoney":"原价138",
        "evaluate":"1805",
        "goDone":"最快3小时送达"
      }, {
        "img": "../../image/goodsImg.jpg",
        "name": "【全国配送】八宝聚富",
        "nameBrand": "wink cake",
        "newMoney": "￥125",
        "oldMoney": "原价138",
        "evaluate": "1805",
        "goDone": "最快3小时送达"
        }, {
          "img": "../../image/goodsImg.jpg",
          "name": "【全国配送】八宝聚富",
          "nameBrand": "wink cake",
          "newMoney": "￥125",
          "oldMoney": "原价138",
          "evaluate": "1805",
          "goDone": "最快3小时送达"
      }, {
        "img": "../../image/goodsImg.jpg",
        "name": "【全国配送】八宝聚富",
        "nameBrand": "wink cake",
        "newMoney": "￥125",
        "oldMoney": "原价138",
        "evaluate": "1805",
        "goDone": "最快3小时送达"
        }, {
          "img": "../../image/goodsImg.jpg",
          "name": "【全国配送】八宝聚富",
          "nameBrand": "wink cake",
          "newMoney": "￥125",
          "oldMoney": "原价138",
          "evaluate": "1805",
          "goDone": "最快3小时送达"
      }, {
        "img": "../../image/goodsImg.jpg",
        "name": "【全国配送】八宝聚富",
        "nameBrand": "wink cake",
        "newMoney": "￥125",
        "oldMoney": "原价138",
        "evaluate": "1805",
        "goDone": "最快3小时送达"
        }, {
          "img": "../../image/goodsImg.jpg",
          "name": "【全国配送】八宝聚富",
          "nameBrand": "wink cake",
          "newMoney": "￥125",
          "oldMoney": "原价138",
          "evaluate": "1805",
          "goDone": "最快3小时送达"
      }, {
        "img": "../../image/goodsImg.jpg",
        "name": "【全国配送】八宝聚富",
        "nameBrand": "wink cake",
        "newMoney": "￥125",
        "oldMoney": "原价138",
        "evaluate": "1805",
        "goDone": "最快3小时送达"
      }]
    },
    more:{
      "plain": "true",
      "loading":false
    }
  },
  addMore:function(){
    this.setData({
      "loading": true
    })
    setTimeout(function(){
      this.setData({
        "loading": false
      })
    }.bind(this),5000)
  }
})