// pages/person/person.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
		image: 'https://tdesign.gtimg.com/miniprogram/images/avatar1.png',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        canIUseGetUserProfile: false,
        canIUseOpenData:
            wx.canIUse("open-data.type.userAvatarUrl") &&
            wx.canIUse("open-data.type.userNickName"), // 如需尝试获取用户信息可改为false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        if (wx.getUserProfile) {
            this.setData({
                canIUseGetUserProfile: true,
            });
        }
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {},

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        if (typeof this.getTabBar === "function" && this.getTabBar()) {
            const page = getCurrentPages().pop();
            this.getTabBar().setData({
                value: "/" + page.route,
            });
        }
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {},

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {},

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {},

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {},

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {},
    getUserProfile(e) {
        // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
        wx.getUserProfile({
            desc: "展示用户信息", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
                console.log(res);
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true,
                });
            },
        });
    },
    getUserInfo(e) {
        // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
        console.log(e);
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true,
        });
    },
    gotomap(){
      wx.navigateTo({
        url: '/pages/heatmap/index',
      })
	},
	gotologin(){
		wx.navigateTo({
		  url: '/pages/login/login',
		})
	}
});
