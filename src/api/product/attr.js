//平台属性管理模块请求文件
import request from '@/utils/request'
//获取一级分类数据的接口  /admin/product/get/category1/  get 
export const reqCategory1List = () => request({ url: '/admin/product/getCategory1', method: "get" })

//获取二级级分类数据的接口 /admin/product/getCategory2/{category1Id} get
export const reqCategory2List = (category1Id) => request({ url: `/admin/product/getCategory2/${category1Id}`, method: "get" })

//获取三级级分类数据的接口  /admin/product/getCategory3/{category2Id}  get
export const reqCategory3List = (category2Id) => request({ url: `/admin/product/getCategory3/${category2Id}`, method: "get" })

//获取平台属性接口  /admin/product/attrInfoList/{category1Id}/{category2Id}/{category3Id}  get
export const reqAttrList = (category1Id, category2Id, category3Id) => request({ url: `/admin/product/attrInfoList/${category1Id}/${category2Id}/${category3Id}`, method: 'get' })

//添加属性和属性值接口  /admin/product/saveAttrInfo post
/*
{
  "attrName": "string",     属性名
  "attrValueList": [        属性名中属性值，因为属性值可以是多个，因此需要的是数组
    {
      "attrId": 0,          属性的id
      "id": 0,              
      "valueName": "string" 属性值
    }   
  ],
  "categoryId": 0,          category3Id
  "categoryLevel": 3,       
  "id": 0
}
*/
export const reqAddOrUpdateAttr = (data) => request({ url: '/admin/product/saveAttrInfo', method: 'post', data })