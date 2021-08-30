"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var card_1 = require("@angular/material/card");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var toolbar_1 = require("@angular/material/toolbar");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var character_info_component_1 = require("./character-info/character-info.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                character_info_component_1.CharacterInfoComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                card_1.MatCardModule,
                toolbar_1.MatToolbarModule,
                input_1.MatInputModule,
                form_field_1.MatFormFieldModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
