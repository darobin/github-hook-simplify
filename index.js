
function isStr (str) {
    return typeof str === "string" || typeof str === "number";
}

// This simplifies the payload in place, taking the event type into account
// It is idempotent in that if you run it twice by mistake it should produce the same result
module.exports = function (event, pl) {
    // have the event sender be just the username instead of the full user
    if (pl.sender && !isStr(pl.sender)) pl.sender = pl.sender.login;
    
    // the source organisation is just the origanisation name
    if (pl.organization && !isStr(pl.organization)) pl.organization = pl.organization.login;
    
    // if it's a repository event, simplify its owner; otherwise convert the repository to just its
    // name
    if (event === "repository") {
        if (!isStr(pl.repository.owner)) pl.repository.owner = pl.repository.owner.login;
    }
    else {
        if (pl.repository && !isStr(pl.repository)) pl.repository = pl.repository.full_name;
    }
    
    // simplify forkee owner to just the username
    if (pl.forkee && !isStr(pl.forkee.owner)) pl.forkee.owner = pl.forkee.owner.login;

    // pull requests have their own level of extra depth
    if (pl.pull_request) {
        var pr = pl.pull_request;
        // simplify the user to just the username
        if (pr.user && !isStr(pr.user)) pr.user = pr.user.login;
        
        // simplify the assignee to just the username
        if (pr.assignee && !isStr(pr.assignee)) pr.assignee = pr.assignee.login;
        
        // for both head and base, simplify user to username and repo to repo name
        if (pr.head) {
            if (!isStr(pr.head.user)) pr.head.user = pr.head.user.login;
            if (!isStr(pr.head.repo)) pr.head.repo = pr.head.repo.full_name;
        }
        if (pr.base) {
            if (!isStr(pr.base.user)) pr.base.user = pr.base.user.login;
            if (!isStr(pr.base.repo)) pr.base.repo = pr.base.repo.full_name;
        }
    }
    
    // simplify issue reporter to username
    if (pl.issue && pl.issue.user && !isStr(pl.issue.user)) pl.issue.user = pl.issue.user.login;
    
    // simplify commenter to username
    if (pl.comment && !isStr(pl.comment.user)) pl.comment.user = pl.comment.user.login;

    // simplify issue to number in issue comments
    if (event === "issue_comment" && !isStr(pl.issue)) pl.issue = pl.issue.number;
    
    // the data is changed in place, but we return it for chainability
    return pl;
};
