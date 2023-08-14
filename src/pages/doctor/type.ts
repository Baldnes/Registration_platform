// --------------选择挂号医生的日期-------
export interface Doctortime {
	date: string;
	dep_id: string;
	nu_source: number;
	week: string;
}
// --------------挂号医生列表-------
export interface Doctorlist {
	avatar: string;
	good_at: string;
	name: string;
	post: string;
	_id: string;
}
// ------------挂号医生主页-----------
interface DoctorHomeTime {
	already: number;
	nu_source: number;
	when: number;
	the_time: string[];
}
interface Appment {
	day: string;
	total_source: number;
	week: string;
	time: DoctorHomeTime[];
}
export interface Doctorhome {
	avatar: string;
	cost: number;
	good_at: string;
	hospital: string;
	name: string;
	post: string;
	_id: string;
	App_ment: Appment[];
}
export interface Data{
    show:boolean;
    week:string;
    the_time:string[];
    when:number,
    _id:string
  }