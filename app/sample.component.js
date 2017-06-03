"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SampleComponent = (function () {
    function SampleComponent() {
        this.name = "asha";
        this.imageUrl = "http://lorempixel.com/400/200";
        this.realName = "asha";
        this.showHeader = true;
        this.items = ["tv", "Fridge", "AC", "Car"];
        this.price = 1500;
    }
    SampleComponent.prototype.runMe = function () {
        console.log("hey wait !!!,did you click me");
    };
    SampleComponent.prototype.send = function (asha) {
        console.log(asha.target.value);
    };
    return SampleComponent;
}());
SampleComponent = __decorate([
    core_1.Component({
        selector: 'sample',
        template: "<div class=\"container\" *ngIf=\"showHeader\">\n\t          <h1>this is sample page</h1>\n\t          <br>\n\t          she is:{{name|uppercase}}<br>\n\t          <img [src]=\"imageUrl\"/><br><br>\n\t          <button class=\"btn btn-primary\"  (click)=\"runMe()\">click me</button><br><br>\n\t          Name:<input type=\"text\" [(ngModel)]=\"realName\" (keyup.enter)=\"send($event)\"/>\n\t          <br>\n\t          {{realName}}\n\t          <br><br>\n\t          <ul *ngFor=\"let item of items\">\n\t          <li>{{item}}</li></ul>\n\t          <br>\n\t          Display price:{{price|currency:'USD':true}}\n\t          </div>"
    }),
    __metadata("design:paramtypes", [])
], SampleComponent);
exports.SampleComponent = SampleComponent;
//# sourceMappingURL=sample.component.js.map