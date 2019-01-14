# Days of Innovation Devyn and Jared

### Project Overview:

- Explore and research up and coming features from the **latest W3C Spec**.
- How can Centeva **stay current** on bleeding-edge tech and stay ahead of the competition?
- Develop a **set of helpers** with high modularity for other Centeva projects to leverage.
- Continue polishing and **publish as an NPM package**

# CSS Paint API (aka Houdini)

Allows programmatic creation of an image anywhere CSS properties expect an image. (Background-image, url, etc.)

Similar to canvas.

https://ishoudinireadyyet.com/

Supported in Chrome 65+ and in development in other browsers.

Unsupported browser? Use CSS Paint Polyfill or try progressive enhancement fallback:

    textarea {
        background-image: linear-gradient(0, red, blue);
        background-image: paint(myGradient, red, blue);
    }

Other benefits of Paint API:

- Paint worklets help reduce the size of your DOM.
- Less code/fewer bytes
- Write quicker, more efficient polyfills of new CSS features that are not yet implemented

# Page Lifecycle API

Gives developers access under the hood to the browser lifecycle. 

Chrome 68+

The Page Lifecyle API allows the browser to be **more aggressive with conserving resources** by allowing web developers to keep up with system intervention events. 

As browsers become more efficient users of system resources, developers can hook into these lifecycle events to further improve usability.

In Chrome, a **tab can have many different states** e.g. Active, Passive, Hidden, Frozen, and Terminated.  
- User-initiated (User clicks to different tab)
- Browser-initiated (Frozen)

Can we hook into these events to store a partially completed form for the user?  Which one is best?

**Hidden** -> The last state that is observable by developers, and the one in which user ends up in when closing the tab.

How can we store the state of the form?

IndexedDB - NoSQL storage, client-side.  Object-store for contain different types of data.  Read/Write simple Key/value pairs or complex documents.

Service Worker - a Javascript file that allows the developer to do work off the main thread and in the background.  Fully asynchronous.  This will allow us to continue to do work after the user clicks "close" on the tab, but before the browser kills it.

EventListener - allows us to listen to changes in the browser's state.

Put this all together for an awesome example of the power of the Page Lifecycle API!
