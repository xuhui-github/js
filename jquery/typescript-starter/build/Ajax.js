"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ajax = void 0;
var Ajax = /** @class */ (function () {
    function Ajax() {
        this.READY_STATUS_CODE = 4;
    }
    Ajax.prototype.isCompleted = function (request) {
        return request.readyState === this.READY_STATUS_CODE;
    };
    Ajax.prototype.httpGet = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // Create a request
            var request = new XMLHttpRequest();
            // Attach an event listener
            request.onreadystatechange = function () {
                if (_this.isCompleted(request)) {
                    resolve(request);
                }
            };
            // Specify the HTTP verb and URL
            request.open('GET', url, true);
            // Send the request
            request.send();
        });
    };
    return Ajax;
}());
exports.Ajax = Ajax;
