import DrinkData from "./drinkData.model";

export default interface Period {
    drinks: DrinkData[];
    isKrash: boolean;
    date: Date;
}
