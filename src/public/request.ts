const baseURL = "https://meituan.thexxdd.cn/api/"
import {Base64} from 'js-base64'
import type { Rescovidapi,Wxloginapi,Covidcancelapi, Hpvpriceapi,Reshpvapi,Resnuataapi,Patientres,Graphics, FilterData, PhyId, PhyRes,Regappoin } from './type'
//获取token
function getToken():string {
    const token = uni.getStorageSync('wxuser').user_Token || ''
    const base64_token = Base64.encode(token + ":")
    return 'Basic ' + base64_token
}
// 请求
function request(url:string,method:"GET"|"POST",data:string|object|ArrayBuffer){
    return new Promise((resolve, reject) => {
        uni.request({
            url:baseURL+url,
            method,
            data,
            header:{Authorization:getToken()},
            success:(res:any)=>{
                if(res.statusCode == 200) {
                    resolve(res)
                } else if(res.statusCode == 401){
                    // 无权限访问接口，跳转登陆界面
                    uni.navigateTo({url:"/pages/login/index"})
                    reject(res)
                } else if(res.statusCode == 400) {
                    uni.showToast({
                        title:'开发者某个字段或参数填写不对',
                        duration:1000,
                        icon:"none"
                    })
                    reject(res)
                } else if(res.statusCode == 500) {
                    uni.showToast({
                        title:'服务器出现错误',
                        duration:1000,
                        icon:"none"
                    })
                    reject(res)
                } else if(res.statusCode == 202) {
                    uni.showToast({
                        title:res.data.msg,
                        icon:"none",
                        duration:1000
                    })
                    reject(res)
                } else {
                    uni.showToast({
                        title:'服务器出现错误',
                        duration:1000,
                        icon:"none"
                    })
                    reject(res)
                }
            },
            fail:(err:any) => {
                uni.showToast({
                    title:'服务器出现错误',
                    duration:1000,
                    icon:"none"
                })
                reject(err)
            }
        })
    })
}

//接口
const RequestApi = {
    //首页数据
    Frontpage:()=>request('frontpage','GET',{}),
    //新冠疫苗预约
    NewappTime:()=>request('newapptime','GET',{}),
    //新冠疫苗提交预约
    RescoVid:(data:Rescovidapi)=>request('rescovid','POST',data),
    // 小程序登陆
	WxLogin: (data: Wxloginapi) => request('wx_login', 'POST', data),
    // 新冠疫苗预约订单
	CoviduserOrder: () => request('coviduser_order', 'GET', {}),
	// 取消新冠疫苗预约
	CovidCancel: (data: Covidcancelapi) => request('covidcancel', 'GET', data),
    // HPV疫苗列表
	OtuHpv: () => request('otuhpv', 'GET', {}),
	// HPV疫苗套餐
	HpvPack: () => request('hpv_pack', 'GET', {}),
	// 查询HPV套餐价格
	HpvPrice: (data: Hpvpriceapi) => request('hpv_price', 'POST', data),
	// 提交HPV疫苗
	ResHpv: (data: Reshpvapi) => request('reshpv', 'POST', data),
	// HPV疫苗预约订单
	HpvuserOrder: () => request('hpvuser_order', 'GET', {}),
	// 取消HPV预约
	HpvCancel: (data: Covidcancelapi) => request('hpvcancel', 'GET', data),
    	// 获取核酸检测页面数据
	NuataGet: () => request('nuataget', 'GET', {}),
	// 提交核酸检测预约
	ResNuata: (data: Resnuataapi) => request('resnuata', 'POST', data),
	// 核酸检测订单
	NuatauserOrder: () => request('nuatauser_order', 'GET', {}),
	// 取消核酸检测预约
	NuataCancel: (data: Covidcancelapi) => request('nuatacancel', 'GET', data),
    // 获取就诊人信息
	GetpaTient: () => request('get_patient', 'GET', {}),
	// 提交就诊人
	PatientRes: (data: Patientres) => request('patient_res', 'POST', data),
	// 提交图文咨询
	GrapHics: (data: Graphics) => request('graphics', 'POST', data),
    // 获取体检筛选条件
	PhyTerm: () => request('phyterm', 'GET', {}),
	// 获取全部体检套餐
	PhySget: () => request('physget', 'GET', {}),
	// 查询筛选体检套餐
	PhyQuery: (data: FilterData) => request('phyquery', 'POST', data),
	// 体检套餐详情页数据
	PhydaTeil: (data: PhyId) => request('phydateil', 'GET', data),
	// 体检预约提交
	ResPhy: (data: PhyRes) => request('resphy', 'POST', data),
	//获取体检套餐订单
	PhyuserOrder: () => request('phyuser_order', 'GET', {}),
	//取消体检预约
	PhyCancel: (data: Covidcancelapi) => request('phycancel', 'GET', data),
    // 获取抑郁症题目   
	DepressionTopics: () => request('depression_topics', 'GET', {}),
	// 抑郁症测试结果  
	DepressiSon: (data: { value: string[] }) => request('depression', 'GET', data),
	// 获取早泄题目    
	PrematureTopics: () => request('premature_topics', 'GET', {}),
	// 早泄测试结果    
	PremaTure: (data: { value: string[] }) => request('premature', 'GET', data),
	// 获取失眠题目    
	InsomniaTopics: () => request('insomnia_topics', 'GET', {}),
	// 失眠测试结果    
	InsoMnia: (data: { value: string[] }) => request('insomnia', 'GET', data),
    // 获取短视频数据
	VideoList: (data: { page: number }) => request('video_list', 'GET', data),
    // 获取父科室列表 
	DeparTment: () => request('department', 'GET', {}),
	// 获取父科室下的子科室 
	RegList: (data: { id: string }) => request('reglist', 'GET', data),
    // 获取选择医生的日期
	TimeSele: (data: { dep_id: string }) => request('timesele', 'GET', data),
	// 获取选择的科室下的全部医生列表 
	AlldList: (data: { dep_id: string }) => request('alldlist', 'GET', data),
	// 根据时间筛选挂号医生 
	EverydList: (data: { dep_id: string; week: string }) => request('everydlist', 'GET', data),
	// 挂号医生主页 
	DoctorHome: (data: { _id: string }) => request('doctorhome', 'GET', data),
	// 提交挂号预约 
	RegAppoin: (data: Regappoin) => request('regappoin', 'POST', data),
	// 获取每个用户的挂号记录 
	UserreGistrat: () => request('user_registrat', 'GET', {}),
	// 取消预约挂号 
	RegistCancel: (data: { _id: string }) =>
		request('regist_cancel', 'GET', data),
}

// 图片上传接口
let IMAGEURL = baseURL + 'upload_picture';
// 身份证识别
let AICARD = baseURL + 'ai_card';
export {RequestApi,IMAGEURL,AICARD}