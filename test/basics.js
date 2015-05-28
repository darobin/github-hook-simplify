/*jshint -W079 */

var ghs = require("..")
,   expect = require("expect.js")
;

describe("Simplify", function () {
    it("should simplify sender", function () {
        expect(ghs("test", { sender: { login: "ok" }}).sender).to.equal("ok");
        expect(ghs("test", { sender: "ok" }).sender).to.equal("ok");
    });
});
