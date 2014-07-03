$(document).ready(function() {
    var widget = $("#dogecoin-widget-container").data();

    $("#dogecoin-widget-container").html(
        '<div class="donateBox"><div id="coinButton"><img id="logo" src="dogecoin-100.png"></div>'
        + '<div id="address"><input style="width: 180px" type="text" readonly="readonly" value="'
        + widget['address'] + '" /><a href="Dogecoin:' + widget['address'] + 
        '"><img src="wallet.png" title="Open In Wallet" /></a></div><div class="cover">Dogecoin accepted here</div></div>'
        );

    reveal(widget['property'], '#coinButton', '.cover', widget['speed']);
});

function reveal(property, button, cover, speed) {
    // variables can't be object literal keys
    var animation = {};
    animation[property] = 'toggle';

    $('.donateBox').find(button).on('click', function(){
        $(cover).animate( animation, speed );
    });
}