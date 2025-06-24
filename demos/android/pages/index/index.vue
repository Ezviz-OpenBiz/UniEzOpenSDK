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
			<button type="primary" @click="videoPlayerAndroid()">使用Android SDK</button>
		</view>
		<view class="text-area">
			<button type="primary" @click="videoPlayerIOS()" style="margin-top: 10px;">使用iOS SDK</button>
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
				appKey: '60456617e78c44088f04e2ee8ce3c308',
				accessToken: 'at.aeqt6jqvbzqew5j69augh5hi8ahnl8ax-3nrvyd6mcn-0o9sy6u-6idu1o19i'
			}
		},
		onLaunch() {
			if (uni.getSystemInfoSync().platform === 'android') {
				uni.addNativePlugin('EzvizApplication', this.onNativePluginReady);
			}
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
			videoPlayerAndroid() {
				if (uni.getSystemInfoSync().platform === 'android') {
					if (this.openApiServer.length > 0 && this.openAuthApiServer.length > 0 && this.appKey.length > 0 && this.accessToken.length > 0) {
						plugin.initUniOpenSDK({
							"openApiServer": this.openApiServer,
							"openAuthApiServer": this.openAuthApiServer,
							"appKey": this.appKey,
							"accessToken": this.accessToken
						})
						uni.navigateTo({
							url: './androidsdk'
						});
					} else {
						uni.showToast({
							title: '请检查初始化参数',
							icon: 'none'
						})
					}
				} else {
					uni.showModal({
						title: 'SDK类型选择异常',
						content: '当前为iOS系统，无法使用Android SDK'
					})
				}
			},
			videoPlayerIOS() {
				if (uni.getSystemInfoSync().platform === 'ios') {
					uni.navigateTo({
						url: './ios'
					});
				} else {
					uni.showModal({
						title: 'SDK类型选择异常',
						content: '当前为Android系统，无法使用iOS SDK'
					})
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
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
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
