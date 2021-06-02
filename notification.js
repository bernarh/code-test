"use strict";
exports.__esModule = true;
exports.Notify = void 0;
var Notify = /** @class */ (function () {
    function Notify(destination, date, message) {
        this.destination = destination;
        this.date = date;
        this.message = message;
    }
    Notify.prototype.sendNotification = function () {
        console.log('Enviando notificación ');
    };
    Notify.prototype.getDestination = function () {
        return this.destination;
    };
    return Notify;
}());
exports.Notify = Notify;
