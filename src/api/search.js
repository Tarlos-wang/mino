import request from '../utils/request.js'

export function getCoupon(keyword) {
  console.log('发送搜索请求:', keyword);
  return request({
    url: '/search',  
    method: 'get',
    params: { keyword }
  }).then(response => {
    console.log('API 响应:', response);
    return Array.isArray(response) ? response : [];
  }).catch(error => {
    console.error('API 请求错误:', error);
    return [];
  });
}

export function addCoupon(couponData) {
  return request({
    url: '/coupon',
    method: 'post',
    data: couponData
  })
}
