# UniApp 原生插件小权限 TKToken 接入指南

## 4.4 小权限 Token 生成指南

### 概述

小权限 Token 将传统的 accessToken（大 Token）按功能职责拆分为多个独立分片，各分片权限隔离、过期时间独立，遵循最小权限原则。

业务方后端使用萤石开放平台 Java SDK 生成各分片 token，前端通过 `initUniOpenSDK` / `setDeviceToken` / `setStreamToken` 三个接口传给插件。SDK 对接详见 [开放平台小权限 Token 文档](https://open.ys7.com/doc/zh/book/index/tktoken.html)。

### 前端 Token 分片与后端 SDK 类对应关系

| 前端分片 | 后端 SDK 类 | 说明 |
|---------|-----------|------|
| httpToken（nonDeviceOps） | `NonDeviceOpsTokenGenerator` | 非设备类，不含序列号/通道号的接口鉴权 |
| deviceToken（global / video） | `DeviceGeneralTokenGenerator` | 设备级或通道级，含序列号的接口鉴权 |
| streamToken（preview / talk / playback） | `StreamTokenGenerator` | 取流鉴权，预览/对讲/SD卡回放 |

### 前端接口与 Token 类型对应关系

| 前端接口 | Token 类型 | 生成时的关键参数 |
|---------|-----------|----------------|
| `initUniOpenSDK({httpToken})` | httpToken（非设备类） | urlPattern=`/**` |
| `setDeviceToken({deviceSerial, deviceToken})` | deviceToken（设备级） | resourceCategory=`global`, channelNo=`*` |
| `setDeviceToken({deviceSerial, channelNo, deviceGlobalToken, deviceVideoToken})` | deviceGlobalToken + deviceVideoToken（通道级） | channelNo=具体通道号, resourceCategory=`global`/`video` |
| `setStreamToken({previewToken, talkToken, playbackToken})` | 取流 Token（预览/对讲/回放） | actionType=`PREVIEW`/`TALK`/`PLAYBACK` |

### 各分片生成参数

#### httpToken（非设备类）

```json
{
  "appKey": "<AppKey>",
  "expire": 10000000,
  "secretKey": "<SecretKey>",
  "urlPattern": "/**"
}
```

| 参数 | 值 | 说明 |
|------|---|------|
| appKey | 萤石开放平台 AppKey | 必填 |
| secretKey | 萤石开放平台 SecretKey | 必填 |
| expire | 自定义（秒） | 过期时间 |
| urlPattern | `/**` | 全放开，不限制接口路径 |

---

#### deviceToken（设备级，配网/设备探测/添加设备用）

```json
{
  "action": "*",
  "appKey": "<AppKey>",
  "channelNo": "*",
  "deviceSerial": "<设备序列号>",
  "expire": 1000000,
  "resourceCategory": "global",
  "secretKey": "<SecretKey>"
}
```

| 参数 | 值 | 说明 |
|------|---|------|
| action | `*` | 不限制操作类型 |
| channelNo | `*` | 通配符，不绑定特定通道 |
| deviceSerial | 设备序列号 | 必填 |
| resourceCategory | `global` | 设备级 scope |

---

#### deviceGlobalToken（设备通道级 global，取流前置流程必须）

```json
{
  "action": "*",
  "appKey": "<AppKey>",
  "channelNo": 1,
  "deviceSerial": "<设备序列号>",
  "expire": 1000000,
  "resourceCategory": "global",
  "secretKey": "<SecretKey>"
}
```

| 参数 | 值 | 说明 |
|------|---|------|
| channelNo | 具体通道号（如 `1`） | 绑定特定通道 |
| resourceCategory | `global` | SDK 内部取流前置流程使用 |

---

#### deviceVideoToken（设备通道级 video，清晰度/云台/查录像/邀请入会用）

```json
{
  "action": "*",
  "appKey": "<AppKey>",
  "channelNo": 1,
  "deviceSerial": "<设备序列号>",
  "expire": 1000000,
  "resourceCategory": "video",
  "secretKey": "<SecretKey>"
}
```

| 参数 | 值 | 说明 |
|------|---|------|
| channelNo | 具体通道号（如 `1`） | 绑定特定通道 |
| resourceCategory | `video` | 清晰度/云台/查询录像片段等接口使用 |

---

#### 取流 Token（预览/对讲/回放）

**预览 previewStreamToken**：

```json
{
  "actionType": "PREVIEW",
  "appKey": "<AppKey>",
  "channelNo": 1,
  "deviceSerial": "<设备序列号>",
  "expire": 1000000,
  "expire2": 1000000,
  "resourceCategory": "global",
  "secretKey": "<SecretKey>"
}
```

**对讲 talkStreamToken**：

```json
{
  "actionType": "TALK",
  "appKey": "<AppKey>",
  "channelNo": 0,
  "deviceSerial": "<设备序列号>",
  "expire": 1000000,
  "expire2": 1000000,
  "resourceCategory": "global",
  "secretKey": "<SecretKey>"
}
```

> **注意**：IPC 设备对讲必须使用 **channelNo=0**。

**回放 playbackStreamToken**：

```json
{
  "actionType": "PLAYBACK",
  "appKey": "<AppKey>",
  "channelNo": 1,
  "deviceSerial": "<设备序列号>",
  "expire": 1000000,
  "expire2": 1000000,
  "resourceCategory": "global",
  "secretKey": "<SecretKey>"
}
```

| 参数 | 说明 |
|------|------|
| actionType | `PREVIEW` / `TALK` / `PLAYBACK`，决定 token 的取流权限 |
| channelNo | 通道号（对讲固定 `0`，其余用实际通道号） |
| expire | token 有效期（秒） |
| expire2 | 取流 session 有效期（秒） |
| resourceCategory | 固定 `global` |

---

### 前端使用示例

```javascript
const plugin = uni.requireNativePlugin('super_ezviz');

// 1. 初始化（传 httpToken）
plugin.initUniOpenSDK({
    appKey: '<AppKey>',
    openApiServer: 'https://open.ys7.com',
    openAuthApiServer: 'https://openauth.ys7.com',
    useTKToken: true,
    httpToken: '<httpToken>'
}, (res) => { console.log('初始化结果:', res); });

// 2. 设置通道级 Token（预览/对讲/回放/清晰度等操作前）
plugin.setDeviceToken({
    deviceSerial: '<设备序列号>',
    channelNo: 1,
    deviceGlobalToken: '<deviceGlobalToken>',
    deviceVideoToken: '<deviceVideoToken>'
}, (res) => { console.log('设备Token设置:', res); });

// 3. 设置取流 Token（一次设置，播放器按场景自动选用）
// 在 UniOpenSDK 组件 ref 上调用
this.$refs.player.setStreamToken({
    previewToken: '<previewStreamToken>',
    talkToken: '<talkStreamToken>',
    playbackToken: '<playbackStreamToken>'
});

// 4. 正常调用预览/对讲/回放，插件自动在取流前 apply 对应 token
this.$refs.player.startRealPlay();        // 自动用 previewToken
this.$refs.player.startTalk(true);        // 自动用 talkToken
this.$refs.player.startPlayBack(item, 2); // 自动用 playbackToken（SD卡）
```

### Token 使用时机与 SDK API 对照

| Token 类型 | 设置接口 | SDK 内部使用时机 |
|-----------|---------|----------------|
| httpToken | `initUniOpenSDK` | 所有不含设备序列号的接口（如 getDeviceList） |
| deviceToken | `setDeviceToken(serial, token)` | 含序列号不含通道号的接口（设备探测/配网/添加设备） |
| deviceGlobalToken | `setDeviceToken(serial, ch, global, video)` | SDK 内部取流前置流程（取流必须） |
| deviceVideoToken | 同上 | 含序列号+通道号的接口（清晰度/云台/查录像/邀请入会） |
| previewStreamToken | `setStreamToken({previewToken})` | `startRealPlay` 前自动 apply |
| talkStreamToken | `setStreamToken({talkToken})` | `startTalk` 前自动 apply |
| playbackStreamToken | `setStreamToken({playbackToken})` | `startPlayBack`（SD卡）前自动 apply |

### 注意事项

1. **两种模式互斥**：`useTKToken: true` 后 `setAccessToken` 被 SDK 禁用，切换模式需重启应用
2. **对讲通道号**：IPC 设备对讲 token 必须用 `channelNo=0` 签发
3. **云存储回放**：SDK 内部走 ticket 认证，无需设置 streamToken
4. **Token 刷新**：过期后调用方主动重新签发并调用对应 set 接口，插件本地不持久化 token
5. **resourceCategory 大小写**：必须小写（`global` / `video`），大写会导致签发失败
6. **调用顺序**：httpToken → setDeviceToken → setStreamToken → 业务操作（预览/对讲/回放等）
7. **setStreamToken 一次设置**：三个取流 token 可一次传入，插件按操作场景自动选用，无需每次切换手动重设
