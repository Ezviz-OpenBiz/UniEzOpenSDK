# 萤石S10设备呼叫 UniApp 插件使用说明

## 概述

本插件（`super_ezviz`）为 UniApp 原生插件，封装了萤石开放平台 ERTC（实时音视频通信）能力，支持手机端与萤石 S10 设备之间的双向视频通话。

**支持平台：** Android / iOS  
**支持场景：**
- 手机主动呼叫设备（客户端发起）
- 设备呼叫手机（设备发起，手机接听）

---

## 前置条件

1. 在 [萤石开放平台](https://open.ys7.com) 注册开发者账号
2. 创建应用，获取 `AppKey`
3. 创建 ERTC 项目，获取 ERTC `AppId`
4. 通过服务端接口获取 `AccessToken`、`ertcClientToken`、`ertcDeviceToken` 等鉴权参数
5. 设备已添加到账号下，获取设备序列号（`deviceSerial`）

---

## 一、插件集成

### 1.1 安装插件

将 `super_ezviz` 插件目录放置到 UniApp 项目的 `nativeplugins/super_ezviz/` 目录下。

目录结构：
```
your-uniapp-project/
├── nativeplugins/
│   └── super_ezviz/
│       ├── package.json
│       ├── android/          # Android 平台 aar 文件
│       └── ios/              # iOS 平台 framework 文件
├── pages/
├── manifest.json
└── ...
```

### 1.2 配置 manifest.json

在 `manifest.json` 中引入原生插件：

```json
{
  "app-plus": {
    "nativePlugins": {
      "super_ezviz": {
        "__plugin_info__": {
          "name": "super_ezviz",
          "platforms": "Android,iOS",
          "isCloud": false
        }
      }
    }
  }
}
```

### 1.3 配置页面

在 `pages.json` 中添加视频通话页面：

```json
{
  "pages": [
    {
      "path": "pages/videoTalk/index",
      "style": {
        "navigationBarTitleText": "视频通话"
      }
    }
  ]
}
```

> **注意：** 视频通话页面必须使用 `.nvue` 文件（原生渲染），因为 `ErtcVideoView` 是原生组件。

---

## 二、Android 端配置

### 2.1 权限配置

在 `manifest.json` 的 `app-plus > distribute > android > permissions` 中添加：

```json
"permissions": [
  "<uses-permission android:name=\"android.permission.INTERNET\"/>",
  "<uses-permission android:name=\"android.permission.CAMERA\"/>",
  "<uses-permission android:name=\"android.permission.RECORD_AUDIO\"/>",
  "<uses-permission android:name=\"android.permission.MODIFY_AUDIO_SETTINGS\"/>",
  "<uses-permission android:name=\"android.permission.BLUETOOTH\"/>",
  "<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\"/>",
  "<uses-permission android:name=\"android.permission.CHANGE_NETWORK_STATE\"/>",
  "<uses-permission android:name=\"android.permission.ACCESS_WIFI_STATE\"/>",
  "<uses-permission android:name=\"android.permission.CHANGE_WIFI_STATE\"/>",
  "<uses-permission android:name=\"android.permission.ACCESS_FINE_LOCATION\"/>",
  "<uses-permission android:name=\"android.permission.WRITE_EXTERNAL_STORAGE\"/>",
  "<uses-permission android:name=\"android.permission.READ_EXTERNAL_STORAGE\"/>",
  "<uses-permission android:name=\"android.permission.FOREGROUND_SERVICE\"/>"
]
```

### 2.2 SDK 版本要求

| 配置项 | 要求 |
|--------|------|
| minSdkVersion | 21 (Android 5.0) |
| targetSdkVersion | 28+ |
| 编译选项 | Java 1.8 |
| ABI 支持 | armeabi-v7a, arm64-v8a, x86 |

### 2.3 依赖说明

插件已内置以下依赖（无需手动配置）：
- 萤石 SDK（ezviz-sdk）
- ERTC 实时音视频引擎
- OkHttp、Gson 等基础库
- AndroidX 兼容库

---

## 三、iOS 端配置

### 3.1 隐私权限配置

在 `manifest.json` 的 `app-plus > distribute > ios > privacyDescription` 中添加：

```json
"privacyDescription": {
  "NSCameraUsageDescription": "需要访问您的摄像头以进行视频通话",
  "NSMicrophoneUsageDescription": "需要访问您的麦克风以进行语音通话",
  "NSPhotoLibraryUsageDescription": "需要访问您的相册以保存截图",
  "NSPhotoLibraryAddUsageDescription": "需要访问您的相册以保存截图"
}
```

### 3.2 系统框架依赖

插件已内置以下系统框架（无需手动配置）：
- AVFoundation、AudioToolbox、VideoToolbox
- CoreMedia、CoreTelephony、SystemConfiguration
- GLKit、OpenAL、MobileCoreServices
- libsqlite3.0、libc++、libiconv、libbz2、libz

### 3.3 Capabilities 配置

插件需要 Hotspot Configuration 能力（用于配网功能），确保 App 的 Entitlements 中包含：
```
com.apple.developer.networking.HotspotConfiguration = true
```

### 3.4 部署目标

| 配置项 | 要求 |
|--------|------|
| Deployment Target | iOS 11.0+ |

---

## 四、插件 API 说明

### 4.1 引入插件

```javascript
// 视频通话模块
const videoTalk = uni.requireNativePlugin('super_ezviz_videotalk');
```

### 4.2 模块方法

#### initErtcEngine(options, callback)

初始化 ERTC 引擎。**必须在其他操作之前调用。**

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| options.appId | String | 是 | ERTC 项目 ID |
| options.appKey | String | 是 | 萤石开放平台 AppKey |
| options.accessToken | String | 是 | 萤石开放平台 AccessToken |
| options.openApiServer | String | 否 | 服务地址，用于切换测试/生产环境；不传默认使用生产 `https://open.ys7.com` |
| options.openAuthApiServer | String | 否 | auth 认证地址；不传默认使用生产 `https://openauth.ys7.com` |

```javascript
videoTalk.initErtcEngine({
  appId: 'your_ertc_app_id',
  appKey: 'your_app_key',
  accessToken: 'your_access_token'
}, (res) => {
  if (res.success) {
    console.log('引擎初始化成功');
  } else {
    console.error('初始化失败:', res.msg);
  }
});
```

---

#### registerEventListener(callback)

注册事件监听（持久化回调），用于接收通话过程中的各类事件。

```javascript
videoTalk.registerEventListener((event) => {
  console.log('事件:', event.event, event);
  switch (event.event) {
    case 'onEnterRoomSuccess':
      // 进入房间成功
      break;
    case 'onRemoteUserEnterRoom':
      // 远端用户（设备）进入房间，event.userId 为设备用户ID
      break;
    case 'onUserVideoAvailable':
      // 远端视频可用，event.userId, event.available
      break;
    case 'onRemoteUserLeaveRoom':
      // 远端用户离开房间
      break;
    case 'onCallTimeout':
      // 呼叫超时（20秒设备未接听）
      break;
    case 'onInviteDeviceFailed':
      // 邀请设备入会失败
      break;
    case 'onError':
      // 错误，event.errorCode
      break;
  }
});
```

---

#### setVideoEncoderParam(options)

设置视频编码参数。建议在 `initErtcEngine` 成功后、`enterRoom` 之前调用（须在发起/接听通话前设置方可生效，调用语义不变）。

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| options.videoResolution | String | 否 | 期望推流分辨率，如 `"480x270"`；命中下方分辨率清单时**最高优先级**生效，未传或未命中则回退 width/height 换算 |
| options.width | Number | 否 | 视频宽度，默认 640（仅在 videoResolution 未命中时用于换算） |
| options.height | Number | 否 | 视频高度，默认 480（仅在 videoResolution 未命中时用于换算） |
| options.fps | Number | 否 | 帧率，默认 15 |
| options.bitrate | Number | 否 | 码率（bps），默认 512000 |
| options.resMode | Number | 否 | 横竖屏模式（数值，双端一致）：`0` 为横屏（默认），`1` 为竖屏（SDK 内部交换宽高）。iOS 仅识别数字；Android 兼容 `"portrait"`/`"landscape"` 字符串，但**双端统一建议传数字 `0`/`1`**。缺省或非法值静默回退横屏 |

**分辨率解析优先级（iOS / Android 双端一致）：**

1. `videoResolution` 命中清单 → 直接生效（来源 `FROM_VIDEO_RESOLUTION`）
2. 未传或未命中 → `width`/`height` 就近换算到最接近的预设分辨率（来源 `FROM_WIDTH_HEIGHT`）
3. 均未提供 → 默认 640×480（来源 `FROM_DEFAULT`）

> 解析失败（格式非法、不在清单内）会**静默回退**，不抛异常、不中断通话，并输出 `生效分辨率=WxH, 来源=...` 日志便于排查；`fps`/`bitrate` 逻辑不受影响。

**videoResolution 格式：** 提取字符串中前两个连续数字作为宽、高，分隔符不限。以下写法均解析为 640×480：`"640x480"`、`"640X480"`、`"640*480"`、`"640_480"`、`"640 480"`、`"640-480"`。

**支持的分辨率清单（共 20 项，需与设备/账号能力匹配）：**

| 宽高比 | 分辨率 |
|--------|--------|
| 1:1 | 120×120、160×160、270×270、480×480 |
| 4:3 | 160×120、240×180、280×210、320×240、400×300、480×360、640×480、960×720 |
| 16:9 | 160×90、256×144、320×180、**480×270**、640×360、960×540、1280×720（720P）、1920×1080（1080P） |

> `videoResolution` 的宽高需与清单某项**完全相等**才命中（不做就近取整）；不在清单内（如 `"500x500"`）则回退 width/height 换算。

**横竖屏（resMode）说明：**

上方分辨率清单均为**横向**（宽 ≥ 高）。`resMode` 只决定编码方向，不改变分辨率档位的选择：

- `resMode: 0`（默认，横屏）：按清单原始 宽×高 编码，如 `480×270`。
- `resMode: 1`（竖屏）：SDK 内部**交换宽高**，如 `480×270` 实际编码为 `270×480`。

> 双端口径一致：iOS 仅识别数字 `0`/`1`；Android 额外兼容 `"landscape"`/`"portrait"` 字符串，但为保证 iOS/Android 表现一致，**统一传数字 `0`/`1`**。

```javascript
// 方式一：字符串精确指定分辨率（推荐，命中清单即精确生效）
videoTalk.setVideoEncoderParam({
  videoResolution: "480x270",
  resMode: 0, // 横竖屏：0=横屏(默认) / 1=竖屏（数值，iOS/Android 一致）
  fps: 15,
  bitrate: 512000
});

// 方式二：不传 videoResolution，走 width/height 就近换算
videoTalk.setVideoEncoderParam({
  width: 1280,
  height: 720,
  fps: 15,
  bitrate: 512000
});

// 方式三：竖屏推流（480×270 命中清单，resMode=1 后实际编码 270×480）
videoTalk.setVideoEncoderParam({
  videoResolution: "480x270",
  resMode: 1, // 1=竖屏
  fps: 15,
  bitrate: 512000
});
```

---

#### enterRoom(options, callback)

进入视频通话房间。

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| options.appId | String | 是 | ERTC 项目 ID |
| options.roomId | String | 是 | 房间 ID |
| options.userId | String | 是 | 当前用户 ID |
| options.ertcClientToken | String | 是 | 客户端入会 Token |
| options.ertcDeviceToken | String | 条件必填 | 设备端 Token（主动呼叫时必填） |
| options.deviceSerial | String | 条件必填 | 设备序列号（主动呼叫时必填） |
| options.channelNo | Number | 否 | 设备通道号，默认 1 |
| options.isClientCall | Boolean | 是 | true=手机呼叫设备，false=接听设备来电 |

```javascript
videoTalk.enterRoom({
  appId: 'your_ertc_app_id',
  roomId: 'room_123',
  userId: 'user_001',
  ertcClientToken: 'client_token_from_server',
  ertcDeviceToken: 'device_token_from_server',
  deviceSerial: 'DEVICE_SERIAL',
  channelNo: 1,
  isClientCall: true
}, (res) => {
  if (res.success) {
    console.log('进入房间成功');
  } else {
    console.error('进入房间失败:', res.msg);
  }
});
```

> **说明：** 当 `isClientCall = true` 时，进入房间成功后插件会自动邀请设备入会，无需手动调用。

---

#### hangUp(callback)

挂断视频通话，退出房间并释放资源。

```javascript
videoTalk.hangUp((res) => {
  console.log('已挂断:', res.msg);
});
```

---

#### enableLocalAudio(enable)

开启/关闭本地麦克风。

| 参数 | 类型 | 说明 |
|------|------|------|
| enable | Boolean | true=开启，false=静音 |

---

#### enableLocalVideo(enable)

开启/关闭本地摄像头。

| 参数 | 类型 | 说明 |
|------|------|------|
| enable | Boolean | true=开启，false=关闭 |

---

#### switchCamera()

切换前后摄像头。

---

#### setSpeakerPhoneOn(enable)

切换扬声器/听筒模式。

| 参数 | 类型 | 说明 |
|------|------|------|
| enable | Boolean | true=扬声器，false=听筒 |

---

#### destroyEngine()

销毁 ERTC 引擎，释放所有资源。建议在页面 `onUnload` 时调用。

```javascript
onUnload() {
  videoTalk.destroyEngine();
}
```

---

### 4.3 视频渲染组件 — ErtcVideoView

`ErtcVideoView` 是原生视频渲染组件，用于显示本地预览和远端视频画面。

#### 基本用法

```html
<template>
  <view class="video-container">
    <!-- 远端视频（大窗） -->
    <ErtcVideoView ref="remoteView" class="remote-video" />
    <!-- 本地预览（小窗） -->
    <ErtcVideoView ref="localView" class="local-video" />
  </view>
</template>
```

#### 组件方法

| 方法 | 参数 | 说明 |
|------|------|------|
| `bindLocalViewWithMode(mode)` | mode: 0=FIT, 1=FILL | 绑定为本地预览视图 |
| `bindRemoteViewWithMode(userId, streamType, mode)` | userId: 远端用户ID; streamType: 0=大码流, 1=小码流; mode: 0=FIT, 1=FILL | 绑定为远端视频视图 |
| `unbindLocalView()` | 无 | 解绑本地预览 |
| `unbindRemoteView(userId)` | userId: 远端用户ID | 解绑远端视频 |

#### 绑定时机

- **本地预览：** 在 `enterRoom` 回调成功后立即绑定
- **远端视频：** 在收到 `onUserVideoAvailable` 事件且 `available = true` 时绑定

```javascript
// 进入房间成功后绑定本地预览
videoTalk.enterRoom(options, (res) => {
  if (res.success) {
    this.$refs.localView.bindLocalViewWithMode(0);
  }
});

// 收到远端视频可用事件后绑定远端视图
videoTalk.registerEventListener((event) => {
  if (event.event === 'onUserVideoAvailable' && event.available) {
    this.$refs.remoteView.bindRemoteViewWithMode(event.userId, 0, 0);
  }
});
```

---

## 五、完整使用示例

### 5.1 页面模板（.nvue）

```html
<template>
  <view class="page">
    <!-- 视频区域 -->
    <view class="video-area">
      <!-- 远端视频（大窗） -->
      <view class="remote-video">
        <ErtcVideoView ref="remoteView" class="fill-view" />
        <view class="status-bar" v-if="!isDeviceOnline && isInRoom">
          <text class="status-text">等待设备接听...</text>
        </view>
      </view>
      <!-- 本地预览（小窗） -->
      <view class="local-video">
        <ErtcVideoView ref="localView" class="fill-view" />
      </view>
      <!-- 通话时长 -->
      <view class="duration-bar" v-if="isDeviceOnline">
        <text class="duration-text">通话中 {{ formatDuration(talkSeconds) }}</text>
      </view>
    </view>

    <!-- 控制按钮 -->
    <view class="controls" v-if="isInRoom">
      <button @click="toggleMic">{{ isMicOn ? '静音' : '取消静音' }}</button>
      <button @click="toggleSpeaker">{{ isSpeakerOn ? '听筒' : '扬声器' }}</button>
      <button @click="doSwitchCamera">切换摄像头</button>
      <button @click="doHangUp">挂断</button>
    </view>

    <!-- 呼叫/接听按钮 -->
    <view class="actions" v-if="!isInRoom">
      <button @click="doCall">呼叫设备</button>
      <button @click="doAnswer">接听设备来电</button>
    </view>
  </view>
</template>
```

### 5.2 脚本逻辑

```javascript
<script>
const videoTalk = uni.requireNativePlugin('super_ezviz_videotalk');

export default {
  data() {
    return {
      isInRoom: false,
      isDeviceOnline: false,
      isMicOn: true,
      isSpeakerOn: true,
      talkSeconds: 0,
      talkTimer: null
    }
  },
  onLoad() {
    // 注册事件监听
    videoTalk.registerEventListener((event) => {
      switch (event.event) {
        case 'onEnterRoomSuccess':
          console.log('进入房间成功');
          break;
        case 'onRemoteUserEnterRoom':
          this.isDeviceOnline = true;
          this.startTimer();
          break;
        case 'onUserVideoAvailable':
          if (event.available) {
            this.$refs.remoteView.bindRemoteViewWithMode(event.userId, 0, 0);
          }
          break;
        case 'onRemoteUserLeaveRoom':
          this.doHangUp();
          break;
        case 'onCallTimeout':
          this.resetState();
          uni.showToast({ title: '设备接听超时', icon: 'none' });
          break;
        case 'onError':
          console.error('ERTC错误:', event.errorCode);
          break;
      }
    });
  },
  onUnload() {
    this.stopTimer();
    videoTalk.destroyEngine();
  },
  methods: {
    /**
     * 手机主动呼叫设备
     * 参数需从业务服务端获取
     */
    doCall() {
      // TODO: 从业务服务端获取以下参数
      const params = {
        appKey: '',        // 萤石开放平台 AppKey
        accessToken: '',   // 萤石开放平台 AccessToken
        appId: '',         // ERTC 项目 ID
        roomId: '',        // 房间 ID（业务自定义或服务端生成）
        userId: '',        // 当前用户 ID
        ertcClientToken: '',  // 客户端入会 Token（服务端生成）
        ertcDeviceToken: '',  // 设备端 Token（服务端生成）
        deviceSerial: '',     // 设备序列号
        channelNo: 1          // 设备通道号
      };
      this.initAndEnterRoom(true, params);
    },

    /**
     * 接听设备来电
     * 参数来自推送消息或业务服务端
     */
    doAnswer() {
      // TODO: 从推送消息/业务服务端获取以下参数
      const params = {
        appKey: '',
        accessToken: '',
        appId: '',
        roomId: '',           // 设备创建的房间 ID
        userId: '',           // 当前用户 ID
        ertcClientToken: '',  // 客户端入会 Token（服务端生成）
        deviceSerial: '',     // 设备序列号
        channelNo: 1
      };
      this.initAndEnterRoom(false, params);
    },

    /**
     * 初始化引擎并进入房间
     * @param {Boolean} isClientCall - true: 主动呼叫; false: 接听
     * @param {Object} params - 通话参数
     */
    initAndEnterRoom(isClientCall, params) {
      videoTalk.initErtcEngine({
        appId: params.appId,
        appKey: params.appKey,
        accessToken: params.accessToken
      }, (res) => {
        if (!res.success) {
          uni.showToast({ title: '引擎初始化失败', icon: 'none' });
          return;
        }
        // 设置视频编码参数
        videoTalk.setVideoEncoderParam({ width: 1280, height: 720, fps: 15, bitrate: 512000 });
        // 进入房间
        videoTalk.enterRoom({
          appId: params.appId,
          roomId: params.roomId,
          userId: params.userId,
          ertcClientToken: params.ertcClientToken,
          ertcDeviceToken: params.ertcDeviceToken || '',
          deviceSerial: params.deviceSerial || '',
          channelNo: params.channelNo || 1,
          isClientCall: isClientCall
        }, (res) => {
          if (res.success) {
            this.isInRoom = true;
            // 绑定本地预览
            this.$refs.localView.bindLocalViewWithMode(0);
          } else {
            uni.showToast({ title: '进入房间失败: ' + res.msg, icon: 'none' });
          }
        });
      });
    },

    toggleMic() {
      this.isMicOn = !this.isMicOn;
      videoTalk.enableLocalAudio(this.isMicOn);
    },
    toggleSpeaker() {
      this.isSpeakerOn = !this.isSpeakerOn;
      videoTalk.setSpeakerPhoneOn(this.isSpeakerOn);
    },
    doSwitchCamera() {
      videoTalk.switchCamera();
    },
    doHangUp() {
      this.stopTimer();
      videoTalk.hangUp((res) => {
        this.resetState();
      });
    },
    resetState() {
      this.isInRoom = false;
      this.isDeviceOnline = false;
      this.talkSeconds = 0;
    },
    startTimer() {
      this.talkSeconds = 0;
      this.talkTimer = setInterval(() => { this.talkSeconds++; }, 1000);
    },
    stopTimer() {
      if (this.talkTimer) {
        clearInterval(this.talkTimer);
        this.talkTimer = null;
      }
    },
    formatDuration(seconds) {
      const m = Math.floor(seconds / 60);
      const s = seconds % 60;
      return `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
    }
  }
}
</script>
```

---

## 六、事件列表

| 事件名 | 触发时机 | 附带数据 |
|--------|---------|---------|
| `onEnterRoomSuccess` | 成功进入房间 | 无 |
| `onExitRoom` | 退出房间 | `{ reason }` |
| `onRemoteUserEnterRoom` | 远端用户（设备）进入房间 | `{ userId }` |
| `onRemoteUserLeaveRoom` | 远端用户离开房间 | `{ userId, reason }` |
| `onUserVideoAvailable` | 远端视频流可用状态变化 | `{ userId, available, streamType }` |
| `onUserAudioAvailable` | 远端音频流可用状态变化 | `{ userId, available }` |
| `onCallTimeout` | 呼叫超时（约20秒） | `{ reason: "timeout", msg }` |
| `onInviteDeviceFailed` | 邀请设备入会失败 | `{ errorCode, msg }` |
| `onError` | ERTC 引擎错误 | `{ errorCode }` |

---

## 七、调用流程

### 7.1 手机呼叫设备

```
业务服务端获取参数 → initErtcEngine → setVideoEncoderParam → enterRoom(isClientCall=true)
    → [自动邀请设备入会]
    → onEnterRoomSuccess
    → onRemoteUserEnterRoom（设备接听）
    → onUserVideoAvailable（绑定远端视图）
    → 通话中...
    → hangUp（挂断）
```

### 7.2 设备呼叫手机（接听）

```
收到设备呼叫推送 → 从推送/服务端获取参数 → initErtcEngine → setVideoEncoderParam
    → enterRoom(isClientCall=false)
    → onEnterRoomSuccess
    → onRemoteUserEnterRoom（设备已在房间）
    → onUserVideoAvailable（绑定远端视图）
    → 通话中...
    → hangUp（挂断）
```

---

## 八、参数获取说明

以下参数需要通过业务服务端从萤石开放平台接口获取：

| 参数 | 获取方式 |
|------|---------|
| AppKey | 萤石开放平台控制台 → 应用管理 |
| AccessToken | 服务端调用萤石开放平台 Token 接口获取 |
| ERTC AppId | 萤石开放平台控制台 → ERTC 项目管理 |
| roomId | 业务自定义或由服务端生成 |
| userId | 业务系统中的用户标识 |
| ertcClientToken | 服务端调用 ERTC Token 生成接口获取（绑定 roomId + userId） |
| ertcDeviceToken | 服务端调用 ERTC Token 生成接口获取（绑定 roomId + 设备ID） |
| deviceSerial | 设备序列号，设备添加到账号后可获取 |

> **安全提示：** `AccessToken`、`ertcClientToken`、`ertcDeviceToken` 等鉴权信息应由业务服务端生成并下发给客户端，切勿在客户端硬编码或暴露 AppSecret。

---

## 九、注意事项

1. **页面类型：** 视频通话页面必须使用 `.nvue` 文件，`ErtcVideoView` 为原生组件，不支持 `.vue` 页面。

2. **权限申请：** Android 端需在运行时动态申请摄像头和麦克风权限，插件内部会自动触发权限申请弹窗。

3. **生命周期管理：**
   - 页面 `onUnload` 时务必调用 `destroyEngine()` 释放资源
   - 通话结束后调用 `hangUp()` 正确退出房间

4. **呼叫超时：** 手机主动呼叫设备时，若设备 20 秒内未接听，插件会自动触发 `onCallTimeout` 事件并释放资源。

5. **网络要求：** 视频通话对网络质量要求较高，建议在 WiFi 或 4G/5G 环境下使用。

6. **自定义基座：** 由于使用了原生插件，开发调试时需要使用自定义基座（HBuilderX → 运行 → 运行到手机或模拟器 → 制作自定义调试基座）。

7. **iOS 真机调试：** iOS 端需要有效的开发者证书和 Provisioning Profile，且需在 Xcode 中配置 Hotspot Configuration 能力。

8. **小权限 TKToken 模式：** 若使用小权限模式（`initUniOpenSDK` 传 `useTKToken:true`），在发起 ERTC 通话前必须通过 `plugin.setDeviceToken` 设置好 `deviceGlobalToken` + `deviceVideoToken`，否则 `inviteDeviceEnterMeeting` 会鉴权失败。详见 §十一。

---

## 十、常见问题

**Q: 初始化失败，提示 appId 不能为空？**  
A: 确认传入的 `appId` 为 ERTC 项目 ID（非 AppKey），可在萤石开放平台控制台的 ERTC 项目管理中获取。

**Q: 进入房间成功但看不到远端视频？**  
A: 确认在 `onUserVideoAvailable` 事件中正确调用了 `bindRemoteViewWithMode`，且传入的 `userId` 与事件中的一致。

**Q: 呼叫设备无响应？**  
A: 检查 `ertcDeviceToken` 和 `deviceSerial` 是否正确，确认设备在线且已添加到当前账号下。

**Q: iOS 端编译报错缺少 framework？**  
A: 确认插件目录中包含完整的 `EZOpenSDKFramework.framework` 和 ERTC 相关 framework，以及 AI 超分辨率模型文件（`.bin`）和 Metal 着色器库文件。

**Q: Android 端运行时崩溃？**  
A: 检查是否配置了所有必要权限，确认 minSdkVersion ≥ 21，且 ABI 过滤包含目标设备架构。

---

## 十一、小权限 TKToken 模式下使用 ERTC

### 11.1 注意事项

1. **两种模式互斥**：`initUniOpenSDK` 传 `useTKToken: true` 后，`setAccessToken` 被 SDK 禁用，不可混用；不传则走原有大 Token 逻辑
2. **ERTC 引擎初始化不依赖 TKToken**：`initErtcEngine` 本身无需任何小权限 token 即可初始化
3. **邀请设备入会需要 deviceGlobalToken + deviceVideoToken**：`inviteDeviceEnterMeeting` 底层是 EZOpenSDK HTTP 请求（含设备序列号+通道号），SDK 内部会路由到 deviceGlobalToken + deviceVideoToken，必须提前设置
4. **切换模式需重启应用**，运行时不能动态切换

### 11.2 ERTC 通话前需设置的 Token

| 设置时机 | 需要的 Token | 设置方式 | 说明 |
|---------|-------------|---------|------|
| SDK 初始化时 | httpToken | `initUniOpenSDK({useTKToken:true, httpToken})` | 非设备类接口鉴权 |
| ERTC 通话前 | deviceGlobalToken + deviceVideoToken | `plugin.setDeviceToken({deviceSerial, channelNo, deviceGlobalToken, deviceVideoToken})` | inviteDeviceEnterMeeting 内部使用 |
| 进入房间时 | ertcClientToken + ertcDeviceToken | `enterRoom({ertcClientToken, ertcDeviceToken, ...})` | ERTC 独立体系，非 TKToken |

**调用时序：**

```
initUniOpenSDK({useTKToken:true, httpToken, appKey, ...})
    ↓
plugin.setDeviceToken({deviceSerial, channelNo, deviceGlobalToken, deviceVideoToken})
    ↓
initErtcEngine({appId, appKey})              ← 小权限模式下无需传 accessToken
    ↓
enterRoom({ertcClientToken, ertcDeviceToken, deviceSerial, channelNo, isClientCall:true})
    ↓ 进入房间成功后自动调用 inviteDeviceEnterMeeting
      （内部使用已设置的 deviceGlobalToken + deviceVideoToken 完成 HTTP 鉴权）
```

### 11.3 Token 生成说明

ERTC 视频通话场景共涉及 5 个 token，分属两个独立体系：

**TKToken 体系**（萤石开放平台 Token 签发接口生成）：

| Token | 后端 SDK 类 | 关键参数 |
|-------|-----------|---------|
| httpToken | `NonDeviceOpsTokenGenerator` | urlPattern=`/**` |
| deviceGlobalToken | `DeviceGeneralTokenGenerator` | resourceCategory=`global`，channelNo=具体通道号 |
| deviceVideoToken | `DeviceGeneralTokenGenerator` | resourceCategory=`video`，channelNo=具体通道号 |

**ERTC 体系**（ERTC Token 生成接口生成）：

| Token | 获取方式 | 说明 |
|-------|---------|------|
| ertcClientToken | 服务端调用 ERTC Token 生成接口 | 绑定 roomId + userId |
| ertcDeviceToken | 服务端调用 ERTC Token 生成接口 | 绑定 roomId + 设备 userId |

完整的 TKToken 各分片生成参数请参考 [小权限token生成文档](小权限token生成文档.md)。

### 11.4 新增 API

| API | 所属模块 | 入参 | 说明 |
|-----|---------|------|------|
| `setHttpToken` | super_ezviz (Module) | token, callback | 设置/刷新 httpToken |
| `setDeviceToken` | super_ezviz (Module) | {deviceSerial, channelNo?, deviceToken?, deviceGlobalToken?, deviceVideoToken?}, callback | 设置设备级或通道级 token，ERTC 场景需传通道级 |

> **注意**：ERTC 场景不涉及 `setStreamToken`（取流 token），取流 token 仅用于视频组件的预览/对讲/回放。