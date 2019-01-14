module.exports = (path,data) => {
  return new Promise((resolve,reject) =>{
    wx.request({
      url:`https://locally.uieee.com/${path}`,
      success:resolve,
      fail:reject
    })
  })

}