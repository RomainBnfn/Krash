import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { environment } from "src/environments/environment";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxChartsModule } from "@swimlane/ngx-charts";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Firebase
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import {
    connectDatabaseEmulator,
    getDatabase,
    provideDatabase,
} from "@angular/fire/database";
import { Auth, provideAuth } from "@angular/fire/auth";

// Material
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDividerModule } from "@angular/material/divider";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AuthService } from "./services/auth.service";
import { getAuth } from "@firebase/auth";
import { AuthGuardService } from "./services/auth-guard.service";

// Components
import { KrashGraphComponent } from "./components/krash-graph/krash-graph.component";
import { ViewPageComponent } from "./pages/view-page/view-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { DrinkItemComponent } from "./components/drink-item/drink-item.component";
import { DrinkListComponent } from "./components/drink-list/drink-list.component";
import { AdminPageComponent } from "./pages/admin-page/admin-page.component";
import { DeleteDrinkDialogComponent } from "./dialogs/delete-drink-dialog/delete-drink-dialog.component";
import { EditAddDrinkDialogComponent } from "./dialogs/edit-add-drink-dialog/edit-add-drink-dialog.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { StartEndKrashDialogComponent } from "./dialogs/start-end-krash-dialog/start-end-krash-dialog.component";
import { DrinkTableComponent } from "./components/drink-table/drink-table.component";
import { RegisterFormComponent } from "./components/register-form/register-form.component";
import { KrashIconComponent } from "./components/krash-icon/krash-icon.component";
import { FireDatabaseService } from "./services/fire-database.service";
import { AdminOptionsComponent } from "./components/admin-options/admin-options.component";
import { IconsRefComponent } from "./components/icons-ref/icons-ref.component";
import { KrashPageComponent } from "./components/krash-page/krash-page.component";
import { KrashPresentationComponent } from "./components/krash-presentation/krash-presentation.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { DashboardItemComponent } from "./components/dashboard-item/dashboard-item.component";
import { AdminSidebarComponent } from "./components/admin-sidebar/admin-sidebar.component";
import { DashboardPageComponent } from "./pages/dashboard-page/dashboard-page.component";

@NgModule({
    declarations: [
        KrashPageComponent,
        IconsRefComponent,
        AppComponent,
        KrashGraphComponent,
        ViewPageComponent,
        HomePageComponent,
        DashboardPageComponent,
        HeaderComponent,
        FooterComponent,
        DrinkItemComponent,
        DrinkListComponent,
        AdminPageComponent,
        DeleteDrinkDialogComponent,
        EditAddDrinkDialogComponent,
        DrinkTableComponent,
        StartEndKrashDialogComponent,
        LoginFormComponent,
        RegisterFormComponent,
        KrashIconComponent,
        AdminOptionsComponent,
        KrashPresentationComponent,
        DashboardItemComponent,
        DashboardComponent,
        AdminSidebarComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        provideFirebaseApp(() => initializeApp(environment.firebase.config)),
        provideFirestore(() => getFirestore()),
        provideDatabase(() => {
            const database = getDatabase();
            if (environment.useEmulators) {
                connectDatabaseEmulator(database, "localhost", 9000);
            }
            return database;
        }),
        provideAuth(() => getAuth()),
        NgxChartsModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatTableModule,
        MatIconModule,
        MatToolbarModule,
        MatDividerModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        NgbModule,
        MatSlideToggleModule,
    ],
    providers: [
        {
            provide: AuthService,
            deps: [FireDatabaseService, Auth],
        },
        {
            provide: AuthGuardService,
            deps: [Auth, AuthService],
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
