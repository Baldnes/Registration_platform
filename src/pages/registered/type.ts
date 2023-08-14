// -----------请求的父科室数据----------
export interface Department {
	dep_ment: string;
	_id: string;
}
// -----------请求的字科室数据
interface DepList {
	dep_id: string;
	dep_name: string;
}
export interface Reglist {
	dep_ment: string;
	_id: string;
	dep_ment_list: DepList[];
}