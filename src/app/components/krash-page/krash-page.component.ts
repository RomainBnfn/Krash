import { Component, Input } from "@angular/core";

@Component({
    selector: "app-krash-page",
    templateUrl: "./krash-page.component.html",
    styleUrls: ["./krash-page.component.scss"],
})
export class KrashPageComponent {
    @Input() title: string = "";
}
