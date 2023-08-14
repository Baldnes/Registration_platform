interface Date {
	date: string;
	week: string;
}
interface Style {
	title: string;
	desc: string[];
}
export interface Nucleicacid {
	address: string;
	hospital: string;
	logo: string;
	name: string;
	phone: string;
	price: number;
	boon: string[];
	date: Date[];
	style: Style[];
	_id?: string;
}