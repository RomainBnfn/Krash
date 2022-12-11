export default interface DrinkSeriesData {
    name: string;
    series: {
        name: Date;
        value: number;
    }[];
}
