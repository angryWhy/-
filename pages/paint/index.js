// pages/paint/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        sortList:[
            [
                "0-2岁",
                "3-6岁",
                "7-9岁",
                "10岁+"
            ],
            [
                "童话故事",
                "习惯培养",
                "启蒙认知",
                "安全教育"
            ],
            [
                "国内",
                "国外"
            ]
        ],
        paintShowList:[
            {
                imageSrc:"../../assets/img/paint/first.png",
                desc:"简笔画第3季游乐园有什么",
                simpleDes:"教你画出游乐园里有什么",
                sortPic:[ 
                    "../../assets/img/paint/编组备份 3.png",
                    "../../assets/img/paint/编组备份 4.png"
                ]
            },
            {
                imageSrc:"../../assets/img/paint/second.png",
                desc:"双语乐读之中英联读系列1",
                simpleDes:"小小英语，天天动听",
                sortPic:[

                ]
            },
            {
                imageSrc:"../../assets/img/paint/thrid.png",
                desc:"简笔画第2季笔下美食",
                simpleDes:"让我们一起来画点好吃的",
                sortPic:[

                ]
            },
            {
                imageSrc:"../../assets/img/paint/fourth.png",
                desc:"植物大战僵尸之美德故事1",
                simpleDes:"在故事中学习美德",
                sortPic:[

                ]
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})