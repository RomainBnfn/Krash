import { Component } from "@angular/core";
import { Krash } from "../../models/krash.model";

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
    krashS: Krash[] = [
        {
            id: "",
            name: "i2c",
            owner: {
                id: "",
                name: "me",
            },
            allowedUsers: [],
        },
        {
            id: "",
            name: "tezfze",
            owner: {
                id: "2754322",
                name: "me",
            },
            allowedUsers: [],
        },
        {
            id: "",
            name: "rzvervre",
            owner: {
                id: "15895",
                name: "me",
            },
            allowedUsers: [],
        },
    ]; // todo
}
