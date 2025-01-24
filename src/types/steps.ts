export interface Step {
    icon: string;
    title: string;
    color: string;
    description: string;
    costTitle?: string; 
    costs?: Cost[];
}

export interface Cost {
    range: string;
    price: number;
  };