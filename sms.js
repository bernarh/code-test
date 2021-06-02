"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.SMSNoification = void 0;
var notification_1 = require("./notification");
var SMSNoification = /** @class */ (function (_super) {
    __extends(SMSNoification, _super);
    function SMSNoification(destination, date, message) {
        return _super.call(this, destination, date, message) || this;
    }
    SMSNoification.prototype.sendNotification = function () {
        _super.prototype.sendNotification.call(this);
        console.log('type: SMS Notification');
        console.log('to: ' + _super.prototype.getDestination.call(this));
    };
    return SMSNoification;
}(notification_1.Notify));
exports.SMSNoification = SMSNoification;
