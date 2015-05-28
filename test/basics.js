/*jshint -W079 */

var ghs = require("..")
,   expect = require("expect.js")
;

describe("Simplify", function () {
    it("should simplify sender", function () {
        expect(ghs("test", { sender: { login: "ok" }}).sender).to.equal("ok");
        expect(ghs("test", { sender: "ok" }).sender).to.equal("ok");
    });
    it("should simplify organization", function () {
        expect(ghs("test", { organization: { login: "ok" }}).organization).to.equal("ok");
        expect(ghs("test", { organization: "ok" }).organization).to.equal("ok");
    });
    it("should simplify repository owner", function () {
        expect(ghs("repository", { repository: { owner: { login: "ok" }}}).repository.owner).to.equal("ok");
        expect(ghs("repository", { repository: { owner: "ok"}}).repository.owner).to.equal("ok");
    });
    it("should simplify repository", function () {
        expect(ghs("test", { repository: { full_name: "ok" }}).repository).to.equal("ok");
        expect(ghs("test", { repository: "ok" }).repository).to.equal("ok");
    });
    it("should simplify forkee.owner", function () {
        expect(ghs("test", { forkee: { owner: { login: "ok" }}}).forkee.owner).to.equal("ok");
        expect(ghs("test", { forkee: { owner: "ok" }}).forkee.owner).to.equal("ok");
    });
    it("should simplify pull_request user", function () {
        expect(ghs("test", { pull_request: { user: { login: "ok" }}}).pull_request.user).to.equal("ok");
        expect(ghs("test", { pull_request: { user: "ok" }}).pull_request.user).to.equal("ok");
    });
    it("should simplify pull_request assignee", function () {
        expect(ghs("test", { pull_request: { assignee: { login: "ok" }}}).pull_request.assignee).to.equal("ok");
        expect(ghs("test", { pull_request: { assignee: "ok" }}).pull_request.assignee).to.equal("ok");
    });
    it("should simplify pull_request head.{user,repo}", function () {
        expect(ghs("test", { pull_request: { head: { user: { login: "ok" }, repo: { full_name: "ok" } }}}).pull_request.head.user).to.equal("ok");
        expect(ghs("test", { pull_request: { head: { user: { login: "ok" }, repo: { full_name: "ok" } }}}).pull_request.head.repo).to.equal("ok");
        expect(ghs("test", { pull_request: { head: { user: "ok", repo: "ok" }}}).pull_request.head.user).to.equal("ok");
        expect(ghs("test", { pull_request: { head: { user: "ok", repo: "ok" }}}).pull_request.head.repo).to.equal("ok");
    });
    it("should simplify pull_request base.{user,repo}", function () {
        expect(ghs("test", { pull_request: { base: { user: { login: "ok" }, repo: { full_name: "ok" } }}}).pull_request.base.user).to.equal("ok");
        expect(ghs("test", { pull_request: { base: { user: { login: "ok" }, repo: { full_name: "ok" } }}}).pull_request.base.repo).to.equal("ok");
        expect(ghs("test", { pull_request: { base: { user: "ok", repo: "ok" }}}).pull_request.base.user).to.equal("ok");
        expect(ghs("test", { pull_request: { base: { user: "ok", repo: "ok" }}}).pull_request.base.repo).to.equal("ok");
    });
    it("should simplify issue user", function () {
        expect(ghs("test", { issue: { user: { login: "ok" }}}).issue.user).to.equal("ok");
        expect(ghs("test", { issue: { user: "ok" }}).issue.user).to.equal("ok");
    });
    it("should simplify comment user", function () {
        expect(ghs("test", { comment: { user: { login: "ok" }}}).comment.user).to.equal("ok");
        expect(ghs("test", { comment: { user: "ok" }}).comment.user).to.equal("ok");
    });
    it("should simplify issue number", function () {
        expect(ghs("issue_comment", { issue: { number: 42 }}).issue).to.equal(42);
        expect(ghs("issue_comment", { issue: 42 }).issue).to.equal(42);
    });
});
