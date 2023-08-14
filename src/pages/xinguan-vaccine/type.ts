interface Time {
	end_time: string;
	over: number;
	start_time: string;
	when: number;
}
interface Period {
	period: string;
	time: Time[];
}
interface Week {
	Have: string;
	date: string;
	day: string;
}
export interface Newapptime {
	Hospital: string;
	address: string;
	company: string[];
	lasting: Period[];
	week: Week[];
}