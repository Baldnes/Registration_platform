export interface Rescovidapi {
	name: string;
	id_card: string;
	phone: string;
	address: string;
	de_address: string;
	crowd_sort: string;
	date: string;
	period: string;
	reserve_time: string;
	when: number;
}
export interface Wxloginapi {
	appid: string;
	secret: string;
	nickName: string;
	avatarUrl: string;
	code: string;
}
export interface Covidcancelapi {
	_id: string;
}
// 查询hpv套餐价格---
export interface Hpvpriceapi {
	hpv_id: string;
	combo_id: string;
	time_id: string;
}
// 提交hpv疫苗
export interface Reshpvapi {
	name: string;
	id_card: string;
	gender: string;
	born_date: string;
	phone: string;
	combo: string;
	ino_time: string;
	price: number;
	hpv_name: string;
}
// 核酸检测提交
export interface Resnuataapi {
	name: string;
	phone: string;
	id_card: string;
	time: string;
}
// ----------提交就诊人------
export interface Patientres {
	name: string;
	sex: string;
	born: string;
	relation: string;
	id_card: string;
	phone: string;
}
// 提交图文咨询
export interface Graphics {
	illness: string;
	guide: boolean;
	ins_report: string[];
	patient_id: string;
}
// ---------查询体检套餐---------
export interface FilterData {
	type: string;
	sales: string;
	price: string;
}
export interface PhyId {
	id: string;
}
// --------提交体检套餐预约----------
export interface PhyRes {
	phy_name: string;
	phy_time: string;
	patient_id: string;
}
// 提交挂号预约
export interface Regappoin {
	week: string;
	the_time: string;
	when: number;
	_id: string;
	patient_id: string;
}