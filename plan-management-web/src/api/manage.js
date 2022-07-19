import request from '@/utils/request'

const api = {
  user: '/user',
  role: '/role',
  service: '/service',
  permission: '/permission',
  permissionNoPager: '/permission/no-pager',
  orgTree: '/org/tree'
}

export default api

export function getUserList (parameter) {
  return request({
    url: api.user,
    method: 'get',
    params: parameter
  })
}

export function getRoleList (parameter) {
  return request({
    url: api.role,
    method: 'get',
    params: parameter
  })
}

export function getServiceList (parameter) {
  return request({
    url: api.service,
    method: 'get',
    params: parameter
  })
}

export function getPermissions (parameter) {
  return request({
    url: api.permissionNoPager,
    method: 'get',
    params: parameter
  })
}

export function getOrgTree (parameter) {
  return request({
    url: api.orgTree,
    method: 'get',
    params: parameter
  })
}

// id == 0 add     post
// id != 0 update  put
export function saveService (parameter) {
  return request({
    url: api.service,
    method: parameter.id === 0 ? 'post' : 'put',
    data: parameter
  })
}

export function saveSub (sub) {
  return request({
    url: '/sub',
    method: sub.id === 0 ? 'post' : 'put',
    data: sub
  })
}

// 计划管理 》》》 接收
export function getPlansReceptionList(data) {
  console.log(data)
  return request({
    url: '/psms-manager-service/planManager/getPlanList',
    method: 'get',
    params: {
      ...data
    }
  })
}
// 计划管理 》》》请求
export function PostSendPlanRequest(data) {
  console.log(data)
  return request({
    url: '/psms-manager-service/planManager/sendPlanRequest',
    method: 'post',
    ...data
  })
}

// 码段申领list 》》》 接收
export function CodeSectionForList(data) {
  return request({
    url: '/psms-manager-service/barCodeManager/getPlanBarcodeList',
    method: 'get',
    params: {
      ...data
    }
  })
}
// 排产计划维护 》》》排产
export function ProductionSchedulingMaintenance(data) {
  return request({
    url: '/psms-manager-service/arrangeManager/getProductionArrangeList',
    method: 'get',
    params: {
      ...data
    }
  })
}
// 排产计划维护 》》》排产删除
export function removeProductionArrange(data) {
  return request({
    url: '/psms-manager-service/arrangeManager/removeProductionArrange',
    method: 'post',
    data
  })
}
// 排产计划维护 》》》排产添加
export function PostaddProductionArrange(data) {
  return request({
    url: '/psms-manager-service/arrangeManager/addProductionArrange',
    method: 'post',
    data
  })
}

// 单据 》》》卷烟班次确认单list
export function getBillPlanList(data) {
  return request({
    url: '/psms-manager-service/printBill/list/bill',
    method: 'get',
    data
  })
}
// 单据 》》》确认单list展开
export function getExpansionTable(data) {
  return request({
    url: '/psms-manager-service/printBill/type',
    method: 'get',
    data
  })
}
// 单据 》》》确认单详情页list
export function getprintBilldetailList(data) {
  return request({
    url: '/psms-manager-service/printBill/detail/bill',
    method: 'get',
    data
  })
}
