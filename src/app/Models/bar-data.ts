export interface BarData {
    data: {
        labels: string[],
        datasets: dataset[]
    },
    options?: {}
}

export interface dataset {
  label: string;
  data: string[];
  backgroundColor: string;
}