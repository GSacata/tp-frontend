import { NgFor, NgIf } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [],
    imports: [
        NgFor, NgIf, HttpClientModule
    ],
    exports: [
        NgFor, NgIf, HttpClientModule
    ],
    providers: [],
    bootstrap: []
})
export class AppModule {  }