import { Component, Input, OnInit } from "@angular/core";
import { Krash } from "../../models/krash.model";
import { hasUserRight } from "../../models/krashUserRight.model";

@Component({
    selector: "app-dashboard-item",
    templateUrl: "./dashboard-item.component.html",
    styleUrls: ["./dashboard-item.component.scss"],
})
export class DashboardItemComponent implements OnInit {
    @Input() krash: Krash | undefined;

    // user
    constructor() {}

    ngOnInit(): void {}

    get hasUserWriteRight(): boolean {
        if (!this.krash) {
            return false;
        }
        return hasUserRight("", "RW", this.krash.allowedUsers);
    }
}
