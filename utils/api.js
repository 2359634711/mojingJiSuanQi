const postI = '2'
const header = {
  'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
}
const serverUri = 'https://mojing.yika.co/app/ewei_shopv2_api.php'
const request = (r, data) => new Promise(resolve => {
  wx.request({
    url: serverUri + '?i=' + postI + '&r=' + r + '&openid=',
    data,
    header,
    method: data ? 'POST' : 'GET',
    dataType: 'json',
    responseType: 'text',
    success: function(res) {
      resolve(res.data)
    },
    fail: function(res) {},
    complete: function(res) {},
  })
})

module.exports = {
  getIndex: () => request('mojing.jisuanqi.index'),
  getLogin: () => request('mojing.jisuanqi.main'),
  sendCode: data => request('mojing.jisuanqi.send_code', data),
  login: data => request('mojing.jisuanqi.login', data),
  getLevels: () => request('mojing.jisuanqi.shenfen'),
  startClc: data => request('mojing.jisuanqi.jisuan', data)
}