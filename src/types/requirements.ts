export interface Requirement {
	icon: string;
	title: string;
	items: Item[];
	color?: string;
}

export interface Item {
	description: string;
}
