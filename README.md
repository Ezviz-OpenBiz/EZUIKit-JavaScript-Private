# UIKit JavaScript使用文档 - 私有云项目
- [简介](#intro)
- [获取UIKit JavaScript](#get)
- [示例](#demo)
- [直播](#live)
- [预览、回放](#back)
- [播放地址获取及EZOPEN协议说明](#ezopen)

## <a name="intro"> 一、简介</a>
UIKit，是基于萤石开放平台OpenSDK封装的UI组件，使用过程中不必学习专业的业务概念，更不用调用繁琐的接口，能够以极简的嵌入方式，快速在您的应用中集成视频功能。


### 2.引入
  **本地引入**

  `<script src="{{location path}}/ezuikit.js">/ezuikit.js</script>`


   >*ps : 页面引入方式适用直播场景，预览和回放功能实现原理为本地解码，需要本地引入的方式加载本地解码库*
## <a name="demo">二、示例</a>
>环境准备：需确认本地80端口未被占用
- 主目录启动web服务，浏览器输入http://localhost:80/demo/demo-monitor.html
>注意：开发时需将包放到服务器上，不支持引用。

## <a name="back">三、预览，回放</a>

  1.页面创建div标签
  ```
    <div id="myPlayer"></div>

  ```
  2.初始化
  ```
   var player = new EZUIPlayer({
        id: 'myPlayer',
        url: url,
        autoplay: true,
        accessToken: "at.8o2k6dbpcvtr13reaa96hbnya6fee2wf-9gu6zcjmh2-1j4yrsb-imvlc5poc",
        decoderPath: '{{location path}}',
        width: 600,
        height: 400,
        env: {
          domain: "https://ezcpcloudopen.ys7.com",
        }
      });
  ```

  **配置说明：**
  
  属性名|示例|默认值|说明
  ---|:--:|---|---:
  id| myPlayer| null|*必填，元素标签id
  url | ezopen://open.ys7.com/f01018a141094b7fa138b9d0b856507b.live |null| 直播地址<br>支持ezopen协议格式（推荐）<br>支持ws, wss格式预览地址播放<br>多窗口模式请用英文逗号（,）分隔
  accessToken|"at.8o2k6dbpcvtr13reaa96hbnya6fee2wf-9gu6zcjmh2-1j4yrsb-imvlc5poc"|null|用户通过官网或者接口获取的accessToken
  decoderPath|解码器相对路径|null|*必填，预览需要本地加载解码器，请填写ezuikit所在相对路径，例如，将项目包放到/public/asserts 目录，值为"/public/asserts"|
  width|400|null|视频元素宽度
  height|400|null|视频元素高度
  autoplay|true|true|是否自动播放
  handleError|null|null|错误回调方法，用于捕获错误
  env|true|null|环境变量，用于指定私有云域名信息，{domain: "https://ezcpcloudopen.ys7.com"}即指向https://ezcpcloudopen.ys7.com私有云域名


  3.方法集
  - 预览，回放开始播放

    `player.play()`
  - 预览，回放停止

    `player.stop()` 

## 四、<a name="ezopen">播放地址获取及EZOPEN协议说明</a>

  你可以通过开放平台官网获取各种格式视频直播地址，包含HLS格式，RTMP格式，WS格式，FLV格式等，EZUIKit支持所有格式直播视频播放。你可以将以上格式直播地址配置在UIKIT中直接播放，但需要注意，并非所有浏览器支持任意格式直播地址，为方便开发者使用，开放平台通过EZOPEN协议可以通过你终端类型帮助你轻松适配最优播放地址格式：
  EZOPEN协议格式为 ：

   【直播】 ezopen://open.ys7.com/[uuid][.hd].live   
   >*示例：ezopen://open.ys7.com/f01018a141094b7fa138b9d0b856507b.hd.live*
   
  【预览】 ezopen://open.ys7.com/[uuid][.hd].live
        或ezopen://open.ys7.com/序列号/通道号[.hd].live
  >*示例：ezopen://open.ys7.com/f01018a141094b7fa138b9d0b856507b.hd.live*
   
  【回放】 ezopen://open.ys7.com/[uuid].rec?begin=yyyyMMddhhmmss&end=yyyyMMddhhmmss
         或ezopen://open.ys7.com/序列号/通道号.rec?begin=yyyyMMddhhmmss&end=yyyyMMddhhmmss
  >*示例：ezopen://open.ys7.com/f01018a141094b7fa138b9d0b856507b.rec?begin=20180808000000&end=20180808235959*

  >*简写模式：ezopen://open.ys7.com/f01018a141094b7fa138b9d0b856507b.rec?begin=20180808&end=20180808*

  > *将播放2018年8月8日0点0分0秒至2018年8月8日23点59分59秒回放*

