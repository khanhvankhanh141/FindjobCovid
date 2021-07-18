Page({

  data: {
    fixedHeader: false,
    width: 300,
    height: 300
  },
  onPageScroll(event) {
    this.setData({ fixedHeader: event.scrollTop > 20 });
  },
  onTapCart() {
    console.log('onTapCart');
  },
  onLoad() {
    my.getSystemInfo({
      success: (systemInfo) => {
        console.log('width :>> ', JSON.stringify(systemInfo));
        console.log('height :>> ', systemInfo.windowHeight);
        // this.setData({ width, height });
      },
    });
  },
  onLoad(query) {
  },
  onReady() {
  },
  onShow() {
  },
  onHide() {
  },
  onUnload() {
  }

  
});