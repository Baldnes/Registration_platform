interface Options {
	son_id: string;
	title: string;
}
export interface Topic {
	topic: string;
	_id: string;
	options: Options[];
}
// 测评结果
interface Recommend {
	dep_id: string;
	dep_name: string;
	hospital: string;
}
export interface Testres {
	result: string;
	scope: string;
	suggest: string;
	_id: string;
	outline: string[];
	recommend: Recommend[] | [];
}
// 测评分享
export interface Sharedata {
	type: string;
	name: string;
	share_title: string;
	share_path: string;
	share_url: string;
}