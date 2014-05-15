/**
* reveal jQuery Plugin
* v0.1
* 
* Author: ehudc (http://github.com/ehudc)
* Created May 2014
* 
* Toggles an element's appearance to "reveal" the element behind it.
* @param property - opacity, width, height
* @param button - the clicked element initiliazing the animation
* @param cover - the top element (that "covers" the one being revealed)
* @param speed - value for animation time
*
**/

(function($){
    $.fn.reveal = function (property, button, cover, speed) {
        // variables can't be object literal keys
        var animation = {};
        animation[property] = 'toggle';

        $(this).find(button).on('click', function(){
            $(cover).animate( animation, speed );
        });
    }
})(jQuery);