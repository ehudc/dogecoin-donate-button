#Dogecoin Donate Button
----------

A donation button written in HTML (with CSS and JQuery) that can be placed on your website or blog.

Included with this button is a custom JQuery function called "reveal" (that may be expanded on in the future) that toggles an element's appearance to reveal the element behind it. 

In this case, it allows for customized animations for revealing your coin donation address. This gif shows an example of using the animation properties `opacity`, `height` and `width` :

![](http://i.imgur.com/MRPbzZV.gif)

### Using the Button and Plugin

To use this button on your webpage, include the CSS and JS in your `<head>` and choose your animation style:

```
<script>
    $(document).ready(function () {
        $('.donateBox').reveal('ANIMATION_PROPERTY', '#coinButton', '.cover', 'slow');
    });
</script>
```
