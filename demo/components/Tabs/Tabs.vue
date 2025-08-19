<template>
	<view class="custom-tab-com">
		<scroll-view :scroll-x="scrollable" class="custom-tabs" @scroll="scroll" scroll-with-animation
			:scroll-left="scrollLeft">
			<view class="in" :style="[customStyle, inStyle]">
				<view class="item" v-for="(item, index) in list" @click="tabClick(item)"
					:class="[`item-${index}`, { selected: item.value === tabValue }]"
					:style="[getItemStyle(item.value === tabValue), itemStyle]" :key="index">
					{{ item.name }}
				</view>
				<view v-show="showLine" class="active-item" :style="[{ left: left + 'px' }, customLineStyle]"></view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: 'CustomTab',
		components: {},
		props: {
			list: {
				type: Array,
				default: () => {
					// {
					//     name:'',
					//     value:''
					// }
					return []
				},
			},
			modelValue: {
				type: String,
				default: '',
			},
			scrollable: {
				type: Boolean,
				default: true,
			},
			// 线条宽度 单位rpx
			lineWidth: {
				type: String,
				default: '',
			},
			// 线条高度 单位rpx
			lineHeight: {
				type: String,
				default: '',
			},
			// 线条颜色
			lineColor: {
				type: String,
				default: '',
			},
			//  item得样式
			itemStyle: {
				type: Object,
				default: () => {
					return {}
				},
			},
			// class为in得样式
			customStyle: {
				type: Object,
				default: () => {
					return {}
				},
			},
			// 选中得样式
			activeStyle: {
				type: Object,
				default: () => {
					return {}
				},
			},
			// 未选择得样式
			inactiveStyle: {
				type: Object,
				default: () => {
					return {}
				},
			},
			// 居中方式,scrollable 和这个属性不能共用
			justifyContent: {
				type: String,
				default: () => {
					return ''
				},
			},
		},
		data() {
			return {
				domList: {},
				faDom: {},
				listDom: [],
				left: 0,
				showLine: false,
				scrollDetail: {},
				scrollLeft: 0,
				scrollWidth: 0,
			}
		},
		emits: ['update:modelValue', 'change'],
		computed: {
			tabValue: {
				get() {
					return this.modelValue || ''
				},
				set(newValue) {
					this.$emit('update:modelValue', newValue)
				},
			},
			customLineStyle() {
				let style = {}
				if (this.lineWidth) {
					style['width'] = this.lineWidth + 'rpx'
				}
				if (this.lineHeight) {
					style['height'] = this.lineHeight + 'rpx'
				}
				if (this.lineColor) {
					style['background'] = this.lineColor
				}
				return style
			},
			inStyle() {
				let style = {}
				if (this.justifyContent) {
					style['justify-content'] = this.justifyContent
				}
				return style
			},
		},
		watch: {
			list: {
				deep: true,
				immediate: true,
				handler(val) {
					if (!val) return
					this.$nextTick(() => {
						this.showLine = false
						this.init(val)
					})
				},
			},
		},
		mounted() {},
		created() {},
		methods: {
			async init(val) {
				const query = uni.createSelectorQuery().in(this)
				// 父元素
				this.faDom = await this.selectQuery(query, `.custom-tab-com`)
				const promiseAllArr = val.map((item, index) => {
					return this.selectQuery(query, `.item-${index}`)
				})
				// 子元素列表
				this.listDom = await Promise.all(promiseAllArr)
				this.listDom.forEach(item => {
					// 计算这个scroll的总宽度
					this.scrollWidth += item.width
				})
				if (this.listDom.length > 0) {
					this.moveLine(this.tabValue)
					this.moveScroll(this.tabValue)
				}
			},
			selectQuery(query, className) {
				return new Promise(resolve => {
					query
						.select(className)
						.boundingClientRect(data => {
							resolve(data)
						})
						.exec()
				})
			},
			tabClick(item) {
				this.tabValue = item.value
				this.$emit('change', item)
				this.moveLine(item.value)
				this.moveScroll(item.value)
			},
			// 移动线
			moveLine(val) {
				// 判断当前选中的是第几个
				const index = this.list.findIndex(item => {
					return item.value === val
				})

				this.showLine = true
				this.listDom[index].left +
					this.listDom[index].width / 2 -
					this.faDom.left
			},
			// 移动scroll
			moveScroll(val) {
				if (!this.scrollable) return
				// 判断当前选中的是第几个
				const index = this.list.findIndex(item => {
					return item.value === val
				})
				let scrollLeftWidth = this.listDom
					.slice(0, index)
					.reduce((total, curr) => total + curr.width, 0)
				const max = this.scrollWidth - this.faDom.width

				let scrollLeft =
					scrollLeftWidth - (this.faDom.width - this.listDom[index].width) / 2
				scrollLeft = Math.min(scrollLeft, max)
				this.scrollLeft = Math.max(0, scrollLeft)
			},
			getItemStyle(judge) {
				return judge ? this.activeStyle : this.inactiveStyle
			},
			scroll(e) {
				this.scrollDetail = e.detail
			},
		},
	}
</script>
<style lang="less" scoped>
	.custom-tab-com {
		width: 100%;
		position: relative;
	}

	.custom-tabs {
		width: 100%;
		box-sizing: border-box;
		white-space: nowrap;

		.in {
			width: 100%;
			position: relative;
			box-sizing: border-box;
			display: flex;
			height: 50rpx;
		}

		.item {
			// flex: 1;
			height: 42rpx;
			padding: 0 11px;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 28rpx;
		}
	}

	.active-item {
		position: absolute;
		bottom: 0;
		left: 27px;
		width: 20px;
		transform: translateX(-50%);
		transition-duration: 300ms;
		height: 6rpx;
		// background: #3c9cff;
		background-size: cover;
	}
</style>
