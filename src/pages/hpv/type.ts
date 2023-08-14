export interface Hpvselect {
	name: string
	_id: string
}
export interface Hpvlist {
	hpv_id: string;
	name: string;
	describe: string[];
	price: string[];
	_id: string;
}
// 套餐名称
interface HpvName {
	combo: string;
	combo_id: string;
}
export interface Hpvcomboname {
	title: string;
	name: HpvName[];
}
// 接种时间
interface HpvTime {
	time: string;
	time_id: string;
}
export interface Hpvcombotime {
	title: string;
	name: HpvTime[];
}