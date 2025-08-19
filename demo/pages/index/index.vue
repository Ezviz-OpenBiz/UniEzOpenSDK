<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<text>服务地址</text>
		<input placeholder="请输入服务请求地址" :value="openApiServer" @input="onOpenApiServerChange" style="height: 32px;border: 1px solid #aaa;margin-bottom: 10px;" />
		<text>auth认证地址</text>
		<input placeholder="请输入auth认证请求地址" :value="openAuthApiServer" @input="onOpenAuthApiServerChange" style="height: 32px;border: 1px solid #aaa;margin-bottom: 10px;" />
		<text>appkey</text>
		<input placeholder="请输入appkey" :value="appKey" @input="onAppKeyChange" style="height: 32px;border: 1px solid #aaa;margin-bottom: 10px;" />
		<text>accessToken</text>
		<input placeholder="请输入accessToken" :value="accessToken" @input="onAccessTokenChange" style="height: 32px;border: 1px solid #aaa;margin-bottom: 10px;" />
		<view class="text-area">
			<button style="margin-bottom: 10px;" type="primary" @click="navigateToVideoPlayer()">视频组件</button>
			<button type="primary" @click="navigateToConfigWifi()">配网API</button>
		</view>
	</view>
</template>

<script>
	const plugin = uni.requireNativePlugin('super_ezviz');
	export default {
		data() {
			return {
				openApiServer: 'https://open.ys7.com',
				openAuthApiServer: 'https://openauth.ys7.com',
				appKey: '',      // 从萤石开放平台控制台获取
				accessToken: ''  // 从萤石开放平台控制台获取
			}
		},
		onLaunch() {
			uni.addNativePlugin('EzvizApplication', this.onNativePluginReady);
		},
		onLoad() {

		},
		methods: {
			onOpenApiServerChange(e) {
				this.openApiServer = e.detail.value;
			},
			onOpenAuthApiServerChange(e) {
				this.openAuthApiServer = e.detail.value;
			},
			onAppKeyChange(e) {
				this.appKey = e.detail.value;
			},
			onAccessTokenChange(e) {
				this.accessToken = e.detail.value;
			},
			isInit() {
				if (this.openApiServer.length > 0 && this.openAuthApiServer.length > 0 && this.appKey.length > 0 && this.accessToken.length > 0) {
					plugin.initUniOpenSDK({
						"openApiServer": this.openApiServer,
						"openAuthApiServer": this.openAuthApiServer,
						"appKey": this.appKey,
						"accessToken": this.accessToken
					});
					return true;
				} else {
					uni.showToast({
						title: '请检查初始化参数',
						icon: 'none'
					});
					return false;
				}
			},
			navigateToVideoPlayer() {
				if (this.isInit()) {
					uni.navigateTo({
						url: './sdk'
					});
				}
			},
			navigateToConfigWifi() {
				if (this.isInit()) {
					uni.navigateTo({
						url: '../configWifi/index'
					});
				}
			},
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 20px;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.uni-toast {
		font-size: 18px;
		padding: 10px;
		width: 200px;
		height: 200px;
	}
</style>
