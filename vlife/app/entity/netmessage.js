"use strict";
var NetMessage = (function () {
    function NetMessage(type, content, autoClose) {
        this.type = type;
        this.content = content;
        this.autoClose = autoClose;
    }
    return NetMessage;
}());
exports.NetMessage = NetMessage;
//# sourceMappingURL=netmessage.js.map