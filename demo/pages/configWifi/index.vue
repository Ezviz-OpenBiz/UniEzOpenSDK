<template>
	<view style="margin: 20px;">
		<text style="font-size: 20px; font-weight: bold;">AP配网</text>
		<view style="margin-top: 20px;">
			<view style="margin: 10px 0 15px;">
				<text style="font-weight: bold;">1. 第一步查询设备信息</text>
				<button type="primary" @click="deviceQueryInfo">查询设备信息</button>
				<text>设备信息：{{ JSON.stringify(deviceInfo) }}</text>
			</view>

			<view style="margin: 10px 0 15px;">
				<text style="font-weight: bold;">2. 第二步配置设备网络</text>
				<button type="primary" :loading="configLoading" @click="deviceConfigNetwork">配置设备网络</button>
				<text>配置结果：{{ JSON.stringify(configInfo) }}</text>
			</view>

			<view style="margin: 10px 0 15px;">
				<text style="font-weight: bold;">3. 第三步添加设备到当前账号下</text>
				<button type="primary" @click="deviceAddToAccount">添加设备</button>
			</view>

			<view style="margin: 10px 0 15px;">
				<text style="font-weight: bold;">其他操作</text>
				<button type="primary" @click="deviceStopConfigNetwork">终止配网</button>
			</view>
		</view>
	</view>
</template>

<script>
	const plugin = uni.requireNativePlugin('super_ezviz');
	export default {
		data() {
			return {
				wifiSsid: '',           // WiFi的ssid
				wifiPwd: '',            // WiFi的密码
				deviceSerial: '',       // 设备序列号
				deviceType: '',         // 设备类型
				deviceVerifyCode: '',     
				deviceInfo: {},
				configInfo: {},
				configLoading: false,
			}
		},
		methods: {
			deviceQueryInfo() {
				plugin.probeDeviceInfo(this.deviceSerial, this.deviceType, (result) => {
					this.deviceInfo = result;
				}, (error) => {
					console.log('查询设备信息失败', error);
				});
			},
			deviceConfigNetwork() {
				const doCfg = () => {
					const wiFiConfigPrefix = this.getWiFiConfigPrefix(this.deviceInfo.data);
					plugin.startAPConfigWifiWithSsid(
						this.wifiSsid,
						this.wifiPwd,
						this.deviceSerial,
						this.deviceVerifyCode,
						`${wiFiConfigPrefix}_${this.deviceSerial}`,
						`${wiFiConfigPrefix}_${this.deviceVerifyCode}`,
						!this.configLoading,
						(res) => {
							this.configInfo = res;
							this.configLoading = false;

							if (this.configInfo.success) {
								if (this.deviceInfo.code === 120029) {
									uni.showToast({ title: '配网成功', icon: 'success' });
								} else {
									uni.showToast({ title: '配网成功，请添加设备', icon: 'none' });
								}
							} else {
								switch (this.configInfo.code) {
									case 1:
										uni.showToast({ title: '参数错误', icon: 'none' });
										break;
									case 2:
										uni.showToast({ title: '设备ap热点密码错误', icon: 'none' });
										break;
									case 3:
										uni.showToast({ title: '连接ap热点异常', icon: 'none' });
										break;
									case 4:
										uni.showToast({ title: '搜索WiFi热点错误', icon: 'none' });
										break;
									case 5:
										uni.showToast({ title: 'WiFi热点连接错误', icon: 'none' });
										break;
									case 15:
										uni.showToast({ title: '配置超时', icon: 'none' });
										break;
									case 105:
										uni.showToast({ title: '参数错误，请检查', icon: 'none' });
										break;
									case 110:
										uni.showToast({ title: '上一个配置任务正在执行，请先终止', icon: 'none' });
										break;
									case 120:
										uni.showToast({ title: '设备验证码错误', icon: 'none' });
										break;
									case 501:
										uni.showToast({ title: '缺少定位权限', icon: 'none' });
										break;
									case 502:
										uni.showToast({ title: 'AP配置正在执行', icon: 'none' });
										break;
									case 505:
										uni.showToast({ title: '未找到设备热点', icon: 'none' });
										break;
									case 506:
										uni.showToast({ title: '用户拒绝连接请求', icon: 'none' });
										break;
									case 507:
										uni.showToast({ title: '无法自动启用WiFi', icon: 'none' });
										break;
									case 605:
										uni.showToast({ title: '无法发送配置到设备', icon: 'none' });
										break;
									case 705:
										uni.showToast({ title: '手机媒体音量未调至最大', icon: 'none' });
										break;
									default:
										uni.showToast({ title: '未知错误', icon: 'none' });
								}
							}
						}
					);
					this.configLoading = true;
				}

				if (this.deviceInfo.success) {
					// 已联网，直接添加设备
					uni.showToast({ title: '设备已联网，直接添加设备', icon: 'none' });
				} else {
					switch (this.deviceInfo.code) {
						case 120023: // 设备不在线，未被用户添加 （这里需要网络配置）
						case 120002: // 设备不存在，未被用户添加 （这里需要网络配置）
						case 120029: // 设备不在线，已经被自己添加 (这里需要网络配置)
							doCfg();
							break;
						case 120020:
							uni.showToast({ title: '设备在线，已经被自己添加', icon: 'none' });
							break;
						case 120022:
							uni.showToast({ title: '设备在线，已经被别的用户添加', icon: 'none' });
							break;
						case 120024:
							uni.showToast({ title: '设备不在线，已经被别的用户添加', icon: 'none' });
							break;
						default:
							uni.showToast({ title: this.deviceInfo.msg ? `${this.deviceInfo.msg}` : '请先查询设备信息', icon: 'none' });
					}
				}
			},
			deviceAddToAccount() {
				plugin.addDevice(this.deviceSerial, this.deviceVerifyCode, (res) => {
					if (res.success) {
						uni.showToast({ title: '设备添加成功' });
					} else {
						uni.showToast({ title: `${res.msg}` });
					}
				});
			},
			deviceStopConfigNetwork() {
				plugin.stopAPConfigWifi();
			},
			getWiFiConfigPrefix(deviceHotSpot) {
    		let WiFiConfigPrefix = "EZVIZ";
				switch (deviceHotSpot) {
						case 1:
							WiFiConfigPrefix = "SoftAP";
							break;
						case 2:
							WiFiConfigPrefix = "CAMGO";
							break;
						default:
								break;
				}
				return WiFiConfigPrefix;
			}
		}
	}
</script>

<style>

</style>
