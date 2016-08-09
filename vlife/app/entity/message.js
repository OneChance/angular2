"use strict";
var Message = (function () {
    function Message(type, content, autoClose) {
        this.type = type;
        this.content = content;
        this.autoClose = autoClose;
    }
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=message.js.map