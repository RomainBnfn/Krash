import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-krash-presentation",
    templateUrl: "./krash-presentation.component.html",
    styleUrls: ["./krash-presentation.component.scss"],
})
export class KrashPresentationComponent implements OnInit {
    @Input() complete: boolean = false;

    constructor() {}

    ngOnInit(): void {}
}
