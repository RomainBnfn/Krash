import { Component } from "@angular/core";
import { Krash } from "../../models/krash.model";

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
    krashS: Krash[] = []; // todo
}
