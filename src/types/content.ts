export interface Metric {
  value: string;
  label: string;
  detail?: string;
}

export interface FunctionItem {
  name: string;
  description: string;
}

export interface FunctionGroup {
  label: string;
  shared?: boolean;
  items: FunctionItem[];
}

export interface Boundary {
  counterpart: string;
  marketingOwns: string;
  counterpartOwns: string;
  sharedSeam: string;
}

