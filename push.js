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
exports.PushNotification = void 0;
var notification_1 = require("./notification");
var PushNotification = /** @class */ (function (_super) {
    __extends(PushNotification, _super);
    function PushNotification(destination, date, message) {
        return _super.call(this, destination, date, message) || this;
    }
    PushNotification.prototype.sendNotification = function () {
        _super.prototype.sendNotification.call(this);
        console.log('type: Push Notification');
        console.log('to: ' + _super.prototype.getDestination.call(this));
    };
    return PushNotification;
}(notification_1.Notify));
exports.PushNotification = PushNotification;
