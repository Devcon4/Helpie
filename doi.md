# CSS Paint API (aka Houdini)

Allows programmatic creation of an image anywhere CSS properties expect an image.

Similar to canvas.

https://ishoudinireadyyet.com/

Supported in Chrome 65+ and in development in other browsers.

Unsupported browser? Use CSS Paint Polyfill or try progressive enhancement fallback:

    textarea {
        background-image: linear-gradient(0, red, blue);
        background-image: paint(myGradient, red, blue);
    }

Other benefits of Paint API:

- Paint worklet reduce the size of your DOM.
- Less code
- Quicker, more efficient polyfills of new CSS features that are not yet implemented

# Page Lifecycle API

coming soon
