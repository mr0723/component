const app = getApp()
Page({
    data: {

    },
    onLoad: function () {
        var that = this;
        that.setData({
            tabtop: app.globalData.tabtop
        })
    },
})
