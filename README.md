# 萤石EZVIZ-UniEzOpenSDK

****

## 1、说明

本文为萤石uniapp原生APP SDK插件使用方式说明

UniEzOpenSDK基于萤石云开放平台原生APP SDK，封装为uniapp插件，帮助用户实现移动端原生能力的调用

UniEzOpenSDK包含安卓 / iOS系统的原生APP插件

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
    "openApiServer": 'https://ezcpcloudopen.wens.com.cn',
    "openAuthApiServer": 'https://ezcpcloudopenauth.wens.com.cn',
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

| 序号  | API                   | 名称        | 入参                                                                                                                                           | 返回结果                           |
| --- | --------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| 1   | createPlayer          | 初始化播放器    | deviceSerial 设备序列号<br>channelNo 通道号<br>verifyCode 验证码<br>callback 回调                                                                         | code<br>msg                    |
| 2   | startRealPlay         | 开始预览播放    | callback 回调                                                                                                                                  | code<br>msg                    |
| 3   | stopRealPlay          | 结束预览播放    | callback 回调                                                                                                                                  | code<br>msg                    |
| 4   | openSound             | 开启声音      |                                                                                                                                              |                                |
| 5   | closeSound            | 关闭声音      |                                                                                                                                              |                                |
| 6   | startTalk             | 开启对讲      | isDeviceTalkBack 是否为ipc设备对讲<br>当前仅支持全双工模式对讲                                                                                                  |                                |
| 7   | stopTalk              | 结束对讲      |                                                                                                                                              |                                |
| 8   | changeVideoLevel      | 切换清晰度     | level 清晰度，0：流畅，1：均衡，2：高清，3：超清                                                                                                                |                                |
| 9   | startQueryRecordFiles | 查询录像片段    | startDate 开始时间<br>stopDate 结束时间<br>recordMode 回放模式，0：云存储，2：本地SD卡<br>recordType 事件类型，all：全部，CMR：告警，event：事件<br>spaceId：云录制空间id<br>callback 回调 | code<br>msg<br>data 回放片段列表     |
| 10  | playbackSeekTo        | 回放跳转至指定时间 | data 目标时间点<br>callback 回调                                                                                                                    | code<br>msg                    |
| 11  | startPlayBack         | 开始回放播放    | file 回放文件（startQueryRecordFiles返回的片段列表中的单个元素）<br>recordMode 回放模式，0：云存储，2：本地SD卡<br>callback 回调                                                | code<br>msg                    |
| 12  | stopPlayBack          | 停止回放      | callback 回调                                                                                                                                  | code<br>msg                    |
| 13  | fullscreen            | 全屏        |                                                                                                                                              |                                |
| 14  | exitFullscreen        | 退出全屏      |                                                                                                                                              |                                |
| 15  | capturePicture        | 截图        | fileName 文件名称（默认为时间戳）<br>savePath 文件保存路径（默认为APP所在位置的sandbox）<br>callback 回调                                                                  | code<br>msg<br>data 图片base64数据 |
| 16  | startRealPlayRecord   | 开始录制      | callback 回调                                                                                                                                  | code<br>msg                    |
| 17  | stopRealPlayRecord    | 结束录制      | callback 回调                                                                                                                                  | code<br>msg                    |
| 18  | ptzOption             | 云台操作      | command 方向，0：左，1：右，2：上，3：下，8：物理放大，9：物理缩小，10-调近焦距，11-调远焦距<br>action 指令，START开始转动，STOP停止转动                                                     |                                |
| 19  | changePlayBackSpeed   | 倍速回放      | speed 回放速度，1：1倍速，2：二倍速，3：0.5倍速，4：4倍速，8：8倍速，16：16倍速                                                                                           |                                |
| 20  | getStreamFlow         | 获取流量数据    | callback 回调                                                                                                                                  | code<br>data 累计消耗流量            |
| 21  | release               | 销毁播放器     | callback 回调                                                                                                                                  | res销毁结果                        |
