import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
    @Input() title: string = "";

    constructor(private router: Router, private authService: AuthService) {}

    clickOnLogOut() {
        this.authService.signOut();
        this.router.navigate(["/"]);
    }

    public get url(): string {
        return this.router.url;
    }

    public get isAuth(): boolean {
        return this.authService.isAuth;
    }
}
