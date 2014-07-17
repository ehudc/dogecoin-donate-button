#Dogecoin Donate Button

A donation button written in HTML (with CSS and jQuery) that can be placed on your website or blog.

Included with this button is a custom jQuery function called "reveal" (that may be expanded on in the future) that toggles an element's appearance to reveal the element behind it. 

In this case, it allows for customized animations for revealing your coin donation address. This gif shows an example of using the animation properties `opacity`, `height` and `width` :

![](http://i.imgur.com/MRPbzZV.gif)

### Placing the button on your webpage

_(An example `index.html` is in the repo)_

To use this button:

1. Include `dogeButtonStyle.css` and `dogeButton.js` in your `<head>`
2. Place the following div where you want the button to go:

        <div id="dogecoin-widget-container" data-property="" data-speed="" data-address=""></div>

3. Put your Dogecoin address in the `data-address` field, and adjust the `property` and `speed` fields as desired.