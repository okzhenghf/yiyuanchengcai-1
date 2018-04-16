<template >
  <div></div>
</template>

<script type="es6">
import wx from 'weixin-js-sdk'
 
export default {
  data(){
    return {
      
    }
  },
  created(){
       this.$http.get(this.$gretUrl+'/api/weixin')
        .then((obj)=>{ 
         wx.config({
            debug: true, 
            appId: obj.data.appId, // 必填，公众号的唯一标识
            timestamp: obj.data.timestamp, // 必填，生成签名的时间戳
            nonceStr: obj.data.nonceStr, // 必填，生成签名的随机串
            signature: obj.data.signature,// 必填，签名
            jsApiList: ['openLocation','getNetworkType','onMenuShareAppMessage','onMenuShareTimeline'] 
        }); 
      });
   
  },
  methods:{
    addr(){
       wx.getLocation({
          type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
          success:  (res)=> {
              console.log(res)
          }
        });
     },
    shareFriend(){
      wx.onMenuShareAppMessage({
          title: '', // 分享标题
          desc: '', // 分享描述
          link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: '', // 分享图标
          type: '', // 分享类型,music、video或link，不填默认为link
          dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
          success: function () {
          // 用户确认分享后执行的回调函数
          },
          cancel: function () {
          // 用户取消分享后执行的回调函数
          }
      });
    } 
  }
   
}
</script>
<style> 

 </style>