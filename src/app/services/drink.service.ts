import { Injectable } from "@angular/core";
import {
    child,
    Database,
    DataSnapshot,
    push,
    ref,
    update,
} from "@angular/fire/database";
import DrinkData from "../models/drink-data";
import DrinkSeriesData from "../models/drink-series-data";
import Period from "../models/period";
import { FireDatabaseService } from "./fire-database.service";
import { GraphService } from "./graph.service";

@Injectable({
    providedIn: "root",
})
export class DrinkService {
    public correctIconName = [
        "beer",
        "blue-cocktail",
        "green-cocktail",
        "orange-cocktail",
        "red-cocktail",
        "red-wine",
        "white-wine",
        "yellow-cocktail",
    ];

    drinkSeriesData: DrinkSeriesData[] = [];
    //periods
    periods: Period[] = [];
    actualPeriod: Period = { drinks: [], date: new Date(), isKrash: true };
    //
    customColors: any = [];
    timer: number | undefined;
    //
    playSound = true;

    constructor(
        private graphService: GraphService,
        private database: Database,
        private fireDatabaseService: FireDatabaseService
    ) {
        //
        this.fireDatabaseService.listen("periods", this.updatePeriods);
        this.fireDatabaseService.listen("options", this.updateSoundOption);
        this.lauchTimer();
    }

    lauchTimer = () => {
        clearInterval(this.timer);
        this.timer = setInterval(this.addData, this.graphService.tickInterval);
    };

    generateData() {
        let date = Date.now(); //ms
        let timespanTick = this.graphService.tickInterval;
        let pointAmount = this.graphService.pointAmount;
        //
        this.drinkSeriesData = [];

        for (let i = 0; i < pointAmount; i++) {
            //
            this.addData(date - timespanTick * (pointAmount - i));
        }
    }

    fromSnapshotToPeriod(snapshotPeriod: any) {
        let drinks: any[] = [];
        for (let drink in snapshotPeriod.drinks) {
            drinks = [...drinks, snapshotPeriod.drinks[drink]];
        }
        let isKrash = snapshotPeriod.isKrash;
        let date = new Date(snapshotPeriod.date);

        return { drinks: drinks, isKrash: isKrash, date: date };
    }

    updatePeriods = (snapshot: DataSnapshot) => {
        const data = snapshot.val();
        let actual: Period | undefined = undefined;
        let lastPeriod = this.actualPeriod || undefined;
        this.periods = [];
        //
        let length = 0;
        for (let index in data) {
            length++;
            let snapshotPeriod = data[index];
            let period = this.fromSnapshotToPeriod(snapshotPeriod);
            //
            this.periods = [...this.periods, period];

            if (!actual) actual = period;
            else if (actual.date.getTime() < period.date.getTime())
                actual = period;
        }
        if (actual) this.actualPeriod = actual;

        this.updateColors();
        // Sort Periods by date
        this.periods = this.periods.sort((a: Period, b: Period) => {
            return a.date.getTime() - b.date.getTime();
        });

        // The app just has started
        if (length <= 1 || this.drinkSeriesData.length == 0) {
            this.generateData();
        }

        // Krash start
        if (lastPeriod && !lastPeriod.isKrash && actual && actual.isKrash) {
            this.onStartKrash();
        }
    };

    updateSoundOption = (snapshot: DataSnapshot) => {
        const data = snapshot.val();
        this.playSound = !!data["playSound"];
    };

    toogleSoundOption() {
        let updates: any = {};
        updates["/options/playSound"] = !this.playSound;
        update(ref(this.database), updates);
    }

    updateColors() {
        this.actualPeriod.drinks.forEach((drink: DrinkData) => {
            this.customColors = [
                { name: drink.name, value: drink.color },
                ...this.customColors,
            ];
        });
    }

    getPeriod(dateMs: number): Period {
        //
        let amountOfPeriods = this.periods.length;
        for (let i = 0; i < amountOfPeriods; i++) {
            let period = this.periods[amountOfPeriods - i - 1];
            //
            if (dateMs > period.date.getTime()) {
                return period;
            }
        }
        return this.actualPeriod;
    }

    saveDrink(drink: DrinkData) {
        // Get a new ID for the new period that will be created
        const newID = push(child(ref(this.database), "periods")).key;

        // Check if drink doesn't not exist
        let drinks = this.drinks.filter((drinkF) => drinkF.name != drink.name);
        drinks = [...drinks, drink];

        let period = {
            date: Date.now(),
            isKrash: this.isInKrash,
            drinks: drinks,
        };

        let updates: any = {};
        updates["/periods/" + newID] = period;

        return update(ref(this.database), updates);
    }

    deleteDrink(drink: DrinkData) {
        // Get a new ID for the new period that will be created
        const newID = push(child(ref(this.database), "periods")).key;

        // Check if drink doesn't not exist
        let drinks = this.drinks.filter((drinkF) => drinkF.name != drink.name);

        let period = {
            date: Date.now(),
            isKrash: this.isInKrash,
            drinks: drinks,
        };

        let updates: any = {};
        updates["/periods/" + newID] = period;

        return update(ref(this.database), updates);
    }

    startEndKrash(drinks: DrinkData[]) {
        // Get a new ID for the new period that will be created
        const newID = push(child(ref(this.database), "periods")).key;

        let period = {
            date: Date.now(),
            isKrash: !this.isInKrash,
            drinks: drinks,
        };

        let updates: any = {};
        updates["/periods/" + newID] = period;

        return update(ref(this.database), updates);
    }

    addData = (dateMs: number | undefined) => {
        let date: Date;
        let period: Period;
        //
        if (dateMs) {
            date = new Date(dateMs);
            period = this.getPeriod(dateMs);
        } else {
            date = new Date();
            period = this.actualPeriod;
        }

        // For each drink
        for (let index in period.drinks) {
            let drink = period.drinks[index];
            // Can be a new one

            // Price
            let price = drink.price;
            let noice = this.graphService.noiceEuro;
            if (price > 5 * noice) {
                price = price + noice * (1 - 2 * Math.random());
            }
            //
            let result = this.drinkSeriesData.filter(
                (data: DrinkSeriesData) => data.name == drink.name
            );
            let drinkSeriesData: DrinkSeriesData;
            if (result && result.length == 1) {
                // Old
                drinkSeriesData = result[0];
            } else {
                // New one
                drinkSeriesData = {
                    name: drink.name,
                    series: [],
                };
                this.drinkSeriesData = [
                    ...this.drinkSeriesData,
                    drinkSeriesData,
                ];
            }
            //
            drinkSeriesData.series = [
                ...drinkSeriesData.series,
                { name: date, value: price },
            ];
        }
        //
        let i = 0;
        for (let index in this.drinkSeriesData) {
            let drinkSeriesData: DrinkSeriesData = this.drinkSeriesData[index];

            if (drinkSeriesData.series.length == 0) {
                this.drinkSeriesData.splice(i, 1);
                continue;
            }
            let timespanBetweenPointAndNow =
                Date.now() - drinkSeriesData.series[0].name.getTime();
            if (timespanBetweenPointAndNow > this.graphService.graphTimespan) {
                //
                this.drinkSeriesData[index].series.shift();
            }
            i++;
        }
        this.drinkSeriesData = [...this.drinkSeriesData]; // Needed to make the graph refresh
    };

    public async onStartKrash() {
        if (this.playSound) {
            console.log("Starting audio...");
            let audio = new Audio();
            audio.src = "../../../assets/sounds/krash.wav";
            audio.load();
            await audio.play();
        }
    }

    public isCorrectIconName(name: string): boolean {
        return this.correctIconName.filter((icon) => icon == name).length > 0;
    }

    public cleanHistory = () => {
        // Get a new ID for the new period that will be created
        const newID = push(child(ref(this.database), "periods")).key;

        let period = this.actualPeriod;

        let updates: any = {};
        updates["/periods/"] = null;
        update(ref(this.database), updates);

        updates = {};
        updates["/periods/" + newID] = period;
        return update(ref(this.database), updates);
    };

    public get hasData(): boolean {
        return this.actualPeriod.drinks.length > 0;
    }

    public get isInKrash(): boolean {
        return this.actualPeriod.isKrash;
    }

    public get drinks(): DrinkData[] {
        return this.actualPeriod.drinks;
    }
}
