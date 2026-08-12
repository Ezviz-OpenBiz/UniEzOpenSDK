# 萤石EZVIZ-UniEzOpenSDK

****

## 1、说明

本文为萤石uniapp原生APP SDK插件使用方式说明

UniEzOpenSDK基于萤石云开放平台原生APP SDK，封装为uniapp插件，帮助用户实现移动端原生能力的调用

UniEzOpenSDK包含安卓 / iOS系统的原生APP插件

> **ERTC 视频通话（含推流分辨率设置）**：本 README 说明的是直播预览与配网能力。萤石 S10 等设备的 ERTC 视频通话接口（原生模块 `super_ezviz_videotalk`，含 `setVideoEncoderParam` 的 `videoResolution` 参数与全量分辨率清单）请参见《萤石S10设备呼叫uniapp插件使用说明》。

## 2、插件使用

### 2.1 项目集成

1、在uniapp项目根目录创建文件夹：nativeplugins/super_ezviz

2、将插件包解压后的文件移入上述文件夹中

3、package.json中已经默认配置了SDK必须的配置项、版本、依赖等信息

4、打开项目根目录下的manifest.json文件，选择App原生插件配置->选择本地插件->勾选super_ezviz->确认

### 2.2 SDK引入

1、在任意页面的script中调用以下方法，引入原生SDK插件

```js
const plugin = uni.requireNativePlugin('super_ezviz');
```

2、调用initUniOpenSDK接口，初始化SDK，并传入服务域名、当前账号的appKey、accessToken

```js
plugin.initUniOpenSDK({
    "openApiServer": 'https://open.ys7.com',
    "openAuthApiServer": 'https://openauth.ys7.com',
    "appKey": '',
    "accessToken": ''
})
```

### 2.3 播放器引入

1、创建一个nvue页面（uniapp框架限制，使用原生插件必须为nvue页面）

2、在页面的template里创建一个播放器标签，标签名称为2.1节第3步package.json中配置的component的name

3、在播放器标签上添加ref属性，用于获取播放器实例

4、可以在标签上传入style，用于设置播放器样式

### 2.4 SDK使用

1、通过ref获取播放器实例

2、调用实例的createPlayer接口，创建播放器，并传入设备序列号、通道号、设备验证码

```js
videoPlayer.createPlayer(this.deviceSerial, this.channelNo, this.validCode, (res) => {
    if (res.code == '200') {
        this.isInit = true;
        uni.showToast({
            title: '创建播放器成功',
            icon: 'none'
        })
    }
});
```

## 3、功能列表
### 3.1、插件API
*1.初始化 Demo 参考 demo/pages/index/index.vue，使用前请先填入appKey、accessToken*

*2.配网 Demo 参考 demo/pages/configWifi/index.vue，使用前请先填入wifiSsid、wifiPwd、deviceSerial、deviceType、deviceVerifyCode*

| 序号 | API | 名称 | 入参 | 返回结果 |
| - | - | - | - | - |
| initUniOpenSDK | 初始化SDK | option {<br/>&nbsp;&nbsp;&nbsp;&nbsp;openApiServer 服务地址（公有云使用https://open.ys7.com）<br/>&nbsp;&nbsp;&nbsp;&nbsp;openAuthApiServer  auth地址（公有云使用https://openauth.ys7.com）<br/>&nbsp;&nbsp;&nbsp;&nbsp;appKey 萤石开放平台提供的 appkey<br/>&nbsp;&nbsp;&nbsp;&nbsp;accessToken 萤石开放平台提供的 accessToken<br/>&nbsp;&nbsp;&nbsp;&nbsp;useTKToken 是否启用小权限TKToken模式（可选，默认false）<br/>&nbsp;&nbsp;&nbsp;&nbsp;httpToken 小权限模式下的httpToken（useTKToken为true时必填）<br/>}<br/>callback 回调 | success<br/>code<br/>msg |
| setHttpToken | 设置/刷新httpToken | token httpToken字符串<br/>callback 回调 | success<br/>code<br/>msg |
| setDeviceToken | 设置设备Token | option {<br/>&nbsp;&nbsp;&nbsp;&nbsp;deviceSerial 设备序列号（必填）<br/>&nbsp;&nbsp;&nbsp;&nbsp;channelNo 通道号（传则为通道级，不传则为设备级）<br/>&nbsp;&nbsp;&nbsp;&nbsp;deviceToken 设备级token（设备级时必填）<br/>&nbsp;&nbsp;&nbsp;&nbsp;deviceGlobalToken 通道级global token（通道级时必填）<br/>&nbsp;&nbsp;&nbsp;&nbsp;deviceVideoToken 通道级video token（通道级时必填）<br/>}<br/>callback 回调 | success<br/>code<br/>msg |
| probeDeviceInfo | 【配网】查询设备信息 | deviceSerial 设备序列号<br/>deviceType 设备类型<br/>deviceVerifyCode 设备验证码<br/> | success<br/>code<br/>msg<br/>data 设备 HotSpot 类别 |
| startAPConfigWifiWithSsid | 【配网】开始AP配置 | wifiSsid WiFi名称<br/>wifiPwd WiFi密码<br/>deviceSerial 设备序列号<br/>deviceVerifyCode 设备验证码<br/>deviceHotspotName 设备热点名称（HotSpot前缀_设备序列号）<br/>deviceHotspotPwd 设备热点密码（HotSpot前缀_设备验证码）<br/>autoConnectToDeviceHotSpot 自动连接热点<br/>callback 回调 | success<br/>code<br/>msg |
| addDevice | 【配网】添加设备 | deviceSerial 设备序列号<br/>deviceVerifyCode 设备验证码<br/>callback 回调<br/> | success<br/>code<br/>msg |
| stopAPConfigWifi | 【配网】停止AP配置 | | |

### 3.2、播放组件API
| 序号  | API                   | 名称           | 入参                                                                                                                                           | 返回结果                           |
| --- | --------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| 1   | createPlayer          | 初始化播放器       | deviceSerial 设备序列号<br>channelNo 通道号<br>verifyCode 验证码<br>callback 回调                                                                         | code<br>msg                    |
| 2   | setStreamToken        | 设置取流Token    | option {<br>&nbsp;&nbsp;previewToken 预览取流token（可选）<br>&nbsp;&nbsp;talkToken 对讲取流token（可选）<br>&nbsp;&nbsp;playbackToken SD卡回放取流token（可选）<br>} | 无                              |
| 3   | startRealPlay         | 开始预览播放       | callback 回调                                                                                                                                  | code<br>msg                    |
| 4   | stopRealPlay          | 结束预览播放       | callback 回调                                                                                                                                  | code<br>msg                    |
| 5   | openSound             | 开启声音         |                                                                                                                                              |                                |
| 6   | closeSound            | 关闭声音         |                                                                                                                                              |                                |
| 7   | startTalk             | 开启对讲         | isDeviceTalkBack 是否为ipc设备对讲<br>当前仅支持全双工模式对讲                                                                                                  |                                |
| 8   | stopTalk              | 结束对讲         |                                                                                                                                              |                                |
| 9   | setVoiceTalkStatus    | 半双工对讲-切换对讲模式 | flag 对讲方向，true：手机端听-设备端说，false：手机端说-设备端听<br>默认为手机端听-设备端说                                                                                     |                                |
| 10  | changeVideoLevel      | 切换清晰度        | level 清晰度，0：流畅，1：均衡，2：高清，3：超清                                                                                                                |                                |
| 11  | startQueryRecordFiles | 查询录像片段       | startDate 开始时间<br>stopDate 结束时间<br>recordMode 回放模式，0：云存储，2：本地SD卡<br>recordType 事件类型，all：全部，CMR：告警，event：事件<br>spaceId：云录制空间id<br>callback 回调 | code<br>msg<br>data 回放片段列表     |
| 12  | playbackSeekTo        | 回放跳转至指定时间    | data 目标时间点<br>callback 回调                                                                                                                    | code<br>msg                    |
| 13  | startPlayBack         | 开始回放播放       | file 回放文件（startQueryRecordFiles返回的片段列表中的单个元素）<br>recordMode 回放模式，0：云存储，2：本地SD卡<br>callback 回调                                                | code<br>msg                    |
| 14  | stopPlayBack          | 停止回放         | callback 回调                                                                                                                                  | code<br>msg                    |
| 15  | fullscreen            | 全屏           |                                                                                                                                              |                                |
| 16  | exitFullscreen        | 退出全屏         |                                                                                                                                              |                                |
| 17  | capturePicture        | 截图           | fileName 文件名称（默认为时间戳）<br>savePath 文件保存路径（默认为APP所在位置的sandbox）<br>callback 回调<br>download 是否保存图片至相册（不传或传true会在截图后自动保存至系统相册）                    | code<br>msg<br>data 图片base64数据 |
| 18  | startRealPlayRecord   | 开始录制         | callback 回调                                                                                                                                  | code<br>msg                    |
| 19  | stopRealPlayRecord    | 结束录制         | callback 回调                                                                                                                                  | code<br>msg                    |
| 20  | ptzOption             | 云台操作         | command 方向，0：左，1：右，2：上，3：下，8：物理放大，9：物理缩小<br>action 指令，START开始转动，STOP停止转动                                                                     |                                |
| 21  | changePlayBackSpeed   | 倍速回放         | speed 回放速度，1：1倍速，2：二倍速，3：0.5倍速，4：4倍速，8：8倍速，16：16倍速                                                                                           |                                |
| 22  | getStreamFlow         | 获取流量数据       | callback 回调                                                                                                                                  | code<br>data 累计消耗流量            |
| 23  | release               | 销毁播放器        | callback 回调                                                                                                                                  | res销毁结果                        |

## 4、消息回调

插件提供回调事件，在播放、对讲、操作云台时返回对应的执行结果。

在页面的适当的时机监听“onMessage”事件，插件会在执行完成后通过该全局事件回调结果。

具体使用方式可以参考demos。

若有更多回调事件需求，可以通过GitHub issues向我们反馈。

```js
globalEvent.addEventListener('onMessage', (e) => {
    console.log("onMessage=" + JSON.stringify(e));
    const messageKey = Object.keys(e)[0];
    switch (messageKey) {
        case 'handlePlaySuccess': // 播放成功
            // ...
            break;

        case 'handlePlayFail': // 播放失败
            // ...
            break;

        case 'handleTalkSuccess': // 对讲成功
            // ...
            break;

        case 'handleTalkFail': // 对讲失败
            // ...
            break;

        case 'handleTalkStopSuccess': // 结束对讲
            // ...
            break;

        case 'handleSetVideoModeSuccess': // 切换清晰度成功
            // ...
            break;

        case 'handlePTZSuccess': // 云台操作成功
            // ...
            break;

        case 'handlePTZFail': // 云台操作失败
            // ...
            break;

        default:
            break;
    }
});
```

## 5、小权限 TKToken 模式

### 5.1 注意事项

1. **两种模式互斥**：`initUniOpenSDK` 传入 `useTKToken: true` 后，`setAccessToken` 被 SDK 禁用，两种模式不可混用
2. **不传则兼容**：不传 `useTKToken` 或传 `false`，完全走原有大 Token 逻辑，对现有用户零影响
3. **切换需重启**：运行时不能动态切换授权模式，切换需重启应用
4. **后端签发**：所有小权限 token 由业务后端调用萤石开放平台接口签发，客户端不能自行生成

### 5.2 各场景需要的 Token

**所有场景都需要先设置 httpToken**（通过 `initUniOpenSDK` 传入）。

#### 视频组件（预览/对讲/回放/清晰度/云台等）

| 设置时机 | 需要的 Token | 设置方式 |
|---------|-------------|---------|
| 初始化时 | httpToken | `initUniOpenSDK({useTKToken:true, httpToken})` |
| 进入设备页面，调用 API 之前一次性设好 | deviceGlobalToken + deviceVideoToken | `plugin.setDeviceToken({deviceSerial, channelNo, deviceGlobalToken, deviceVideoToken})` |
| 取流操作前一次性设好 | previewToken + talkToken + playbackToken | `player.setStreamToken({previewToken, talkToken, playbackToken})` |

调用顺序：

```
initUniOpenSDK({useTKToken:true, httpToken})
    ↓
plugin.setDeviceToken({deviceSerial, channelNo, deviceGlobalToken, deviceVideoToken})
    ↓
player.setStreamToken({previewToken, talkToken, playbackToken})
    ↓
createPlayer → startRealPlay / startTalk / startPlayBack / changeVideoLevel...
```

> **说明**：`setDeviceToken` 和 `setStreamToken` 需在调用具体业务 API 之前一次性设置好。`setStreamToken` 可只传部分字段，未传的保持之前的值不变。云存储回放走 SDK 内部 ticket 认证，无需设置 streamToken。

#### ERTC 视频通话

| 设置时机 | 需要的 Token | 设置方式 |
|---------|-------------|---------|
| 初始化时 | httpToken | `initUniOpenSDK({useTKToken:true, httpToken})` |
| ERTC 通话前 | deviceGlobalToken + deviceVideoToken | `plugin.setDeviceToken({deviceSerial, channelNo, deviceGlobalToken, deviceVideoToken})` |
| 进入房间时 | ertcClientToken + ertcDeviceToken | `enterRoom({ertcClientToken, ertcDeviceToken, ...})`（ERTC 独立体系，非 TKToken） |

调用顺序：

```
initUniOpenSDK({useTKToken:true, httpToken})
    ↓
plugin.setDeviceToken({deviceSerial, channelNo, deviceGlobalToken, deviceVideoToken})
    ↓
initErtcEngine({appId, appKey})          ← 无需 accessToken
    ↓
enterRoom({ertcClientToken, ertcDeviceToken, ...})
    ↓ 进入房间后自动 inviteDeviceEnterMeeting（内部使用 deviceGlobalToken + deviceVideoToken 鉴权）
```

> **说明**：`initErtcEngine` 本身不依赖任何 TKToken，但 `inviteDeviceEnterMeeting`（邀请设备入会）底层 HTTP 请求含设备序列号+通道号，SDK 内部会路由到 deviceGlobalToken + deviceVideoToken，所以必须提前通过 `plugin.setDeviceToken` 设置。

### 5.3 小权限 Token 如何生成

业务后端使用萤石开放平台 Java SDK 生成各分片 token，各 Generator 类与前端接口对应关系：

| 前端分片 | 后端 SDK 类 | 关键参数 |
|---------|-----------|---------|
| httpToken | `NonDeviceOpsTokenGenerator` | urlPattern=`/**` |
| deviceGlobalToken | `DeviceGeneralTokenGenerator` | resourceCategory=`global`，channelNo=具体通道号 |
| deviceVideoToken | `DeviceGeneralTokenGenerator` | resourceCategory=`video`，channelNo=具体通道号 |
| previewToken | `StreamTokenGenerator` | actionType=`PREVIEW` |
| talkToken | `StreamTokenGenerator` | actionType=`TALK`，channelNo=`0`（IPC设备） |
| playbackToken | `StreamTokenGenerator` | actionType=`PLAYBACK` |

完整参数说明及生成示例请参考 [小权限token生成文档](小权限token生成文档.md)。

### 5.4 新增 API 汇总

| API | 所属 | 入参 | 说明 |
|-----|------|------|------|
| `setHttpToken` | Module (plugin) | token, callback | 设置/刷新非设备类 httpToken，首次设置和过期刷新都调用此方法 |
| `setDeviceToken` | Module (plugin) | {deviceSerial, channelNo?, deviceToken?, deviceGlobalToken?, deviceVideoToken?}, callback | 设置设备级或通道级 token |
| `setStreamToken` | Component (player) | {previewToken?, talkToken?, playbackToken?} | 设置取流 token，一次传入三种场景，播放器按操作自动选用 |
