import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    isLoggedIn: boolean = false;

    login (): void {
        this.isLoggedIn = true;
    }
    logout (): void {
        this.isLoggedIn = false;
    }
}