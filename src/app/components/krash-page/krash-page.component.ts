import { Component, Input } from "@angular/core";

@Component({
    selector: "app-krash-page",
    templateUrl: "./krash-page.component.html",
    styleUrls: ["./krash-page.component.scss"],
})
export class KrashPageComponent {
    @Input() showHeader: boolean = true;
    @Input() showFooter: boolean = true;
    @Input() title: string = "";
    @Input() class: string = "";

    get containerClass(): string {
        return `krash-page-content ${this.class}`;
    }
}
