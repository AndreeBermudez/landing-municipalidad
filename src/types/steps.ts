export interface Step {
    icon: string;
    title: string;
    color: string;
    description: string;
    costTitle?: string;
    costs?: Cost[];
    adicionalMessage?: string;
}

export interface Cost {
    type: string;
    price: number;
  };