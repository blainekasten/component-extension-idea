# Why is this a bad idea

> or is it?

I'm curious if this is a bad idea to create our own `Component` and have it maintain some internal functionality that extends `React.Component`.

If this isn't a bad idea, I think we can create a really cool state library that makes your application state a first class citizen of React components.

* How does React 17 async mode affect this?
* Is this a bad idea?
* Is this a great idea?
* What holes am I not seeing?


Here is the hack Component over-ride https://github.com/blainekasten/component-extension-idea/blob/master/src/Component.js
Here is an implementation https://github.com/blainekasten/component-extension-idea/blob/master/src/App.js#L2-L21


#### Reasons why I think this is cool

1. App state is first class.
2. There isn't weirdly implicit props. Props should be passed in explicitly.
  - I always found state systems weird that props had a bunch of things that weren't passed in through parents.
3. Structuring your application doesn't require you to do weird hacks like:
  - index.js and Component.js so you can have individual imports for things like tests.
  - Component.js with an export default + export (component)
