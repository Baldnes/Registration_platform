export interface Phyterm {
	query_val: string;
	_id: string;
	filter_val: string[];
}
export interface Phydata {
	be_suit: string;
	describe: string;
	image: string;
	price: number;
	sales: number;
	title: string;
	_id: string;
}
// ------------获取体检详情页数据-----------
interface Crowd {
	image: string;
	name: string;
}
interface Content {
	details: string;
	thing: string;
}
interface Project {
	title: string;
	content: Content[];
}
export interface Phydetail {
	image: string;
	price: number;
	sales: number;
	title: string;
	_id: string;
	crowd: Crowd[];
	date: Date[];
	project: Project[];
}