"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var netmessage_1 = require('./netmessage');
var Account = (function (_super) {
    __extends(Account, _super);
    function Account() {
        _super.call(this, "", "", true);
    }
    return Account;
}(netmessage_1.NetMessage));
exports.Account = Account;
//# sourceMappingURL=account.js.map