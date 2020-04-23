// const App = require('./utils/ald-stat.js').App;
App({
    globalData: {
        tabtop: '62'
    },
 
    onLaunch: function () {
        var that = this;
        wx.getSystemInfo({
            success(res) {
                if (res.model == 'iPhone X') {
                    that.globalData.tabtop = '86'
                } else if (res.model == 'Redmi 6 Pro') {
                    that.globalData.tabtop = '83'
                } else if (res.model == 'Redmi K20 Pro') {
                    that.globalData.tabtop = '77'
                } else if (res.model == 'Redmi 5 Plus') {
                    that.globalData.tabtop = '69'
                } else if (res.model == 'iPhone X (GSM+CDMA)<iPhone10,3>') {
                    that.globalData.tabtop = '89'
                } else if (res.model == 'iPhone X (GSM)<iPhone10,6>') {
                    that.globalData.tabtop = '89'
                } else if (res.model == 'iPhone 5') {
                    that.globalData.tabtop = '56'
                } else if (res.model == 'iPhone 6 Plus<iPhone7,1>') {
                    that.globalData.tabtop = '65'
                } else if (res.model == 'iPhone 8 Plus (GSM+CDMA)<iPhone10,2>') {
                    that.globalData.tabtop = '65'
                } else if (res.model == 'iPhone 6/7/8 Plus') {
                    that.globalData.tabtop = '65'
                } else if (res.model == 'iPhone XS<iPhone11,2>') {
                    that.globalData.tabtop = '89'
                } else if (res.model == 'iPhone 11<iPhone12,1>') {
                    that.globalData.tabtop = '89'
                } else if (res.model == 'iPhone 11 Pro Max<iPhone12,5>') {
                    that.globalData.tabtop = '89'
                } else if (res.model == 'iPhone 11 Pro<iPhone12,3>') {
                    that.globalData.tabtop = '89'
                } else if (res.model == 'iPhone XS Max') {
                    that.globalData.tabtop = '89'
                } else if (res.model == 'SM-G9750') {
                    that.globalData.tabtop = '82'
                } else if (res.model == 'YAL-AL00') {
                    that.globalData.tabtop = '77'
                } else if (res.model == 'CLT-AL00') {
                    that.globalData.tabtop = '68'
                } else if (res.model == 'EML-AL00') {
                    that.globalData.tabtop = '69'
                } else if (res.model == 'GM1910') {
                    that.globalData.tabtop = '84'
                } else if (res.model == 'PBAM00') {
                    that.globalData.tabtop = '69'
                } else if (res.model == 'PACM00') {
                    that.globalData.tabtop = '69'
                } else if (res.model == 'iPhone XS Max China-exclusive<iPhone11,6>') {
                    that.globalData.tabtop = '89'
                } else if (res.model == 'iPhone XR<iPhone11,8>') {
                    that.globalData.tabtop = '89'
                } else if (res.model == 'V1831A') {
                    that.globalData.tabtop = '66'
                } else if (res.model == 'POT-AL00a') {
                    that.globalData.tabtop = '66'
                } else if (res.model == 'iPhone SE') {
                    that.globalData.tabtop = '89'
                } else if (res.model == 'vivo iqoo') {
                    that.globalData.tabtop = '70'
                } else if (res.model == 'OXF-AN00') {
                    that.globalData.tabtop = '78'
                } else if (res.model == 'ANA-AN00' || res.model == 'ANA-TN00' || res.model == 'ELS-AN00' || res.model == 'ELS-TN00') {
                    that.globalData.tabtop = '78'
                }
                console.log(res.model)
                console.log(res.screenWidth)
            }
        });
        wx.setStorage({
            key: 'init',
            data: false
        });
    },
})
