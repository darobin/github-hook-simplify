
# github-hook-simplify

GitHub is great in that it supports hooks that provide information about a *lot* of things. These
events are very detailed, and de-normalised.

This is really useful if you need to process them immediately, but it becomes less interesting if
you need to store them. Not only is it a fair bit more data to store, but the de-normalised parts
are likely to have become wrong in the mean time.

What this library does is that it simplifies and trims down the payload for GitHub hook data so as
to, for instance, replace the user details with just the user name or a full issue description with
just the issue number.

## Install

The usual:

    npm install --save github-hook-simplify

## Usage

It's pretty simple:

    var ghs = require("github-hook-simplify");
    ghs("event-name", eventPayload);

The first parameter is the event type (the same string provided in the GitHub API), and the second
is the payload.

The payload is modified in place, so be careful if you want to keep the original around; you will 
need to clone it. It is also returned so that one can chain.

The module will also detect if it's dealing with an already-simplified payload and handle that 
gracefully. You therefore don't need to be careful about how many times you apply simplification.
(This is notably useful if the module gets an update in the future such that it supports more 
simplifications. You will be able to re-simplify what you already have without breaking it.)

