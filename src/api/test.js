export function getdoubandata(_vue) {
  return new Promise((resolve, reject) => {
    _vue.$http.get(`/douyuapi/RoomApi/live?offset=1&limit=20`).then(res => {
      resolve(res.data.data);
    }).catch(err => {
      reject(err);
    })
  })
}
export function getmockdata(_vue, page) {
  return new Promise((resolve, reject) => {
    _vue.$http.get(`/mockapi/getpagedata/${page}`).then(res => {
      resolve(res.data.data);
    }).catch(err => {
      reject(err);
    })
  })
}
export function getnodedata(_vue) {
  return new Promise((resolve, reject) => {
    _vue.$http.get(`/testapi/index`).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err);
    })
  })
}
