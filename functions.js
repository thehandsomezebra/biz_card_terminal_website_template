$(document).ready(function() {
    setInterval ('cursorAnimation()', 600);
    type(document.getElementsByTagName("noscript")[0].innerHTML);
});

function type(text, new_caption_length) {
    captionLength = new_caption_length || 0;

    $('#caption').html(text.substr(0, captionLength++));
    if(captionLength < text.length+1) {
        setTimeout(function(){
            type(text, captionLength);
        }, 1);
    }
}

function erase() {
    caption = $('#caption').html();
    captionLength = caption.length;
    if(captionLength > 0){
        $('#caption').html(caption.substr(0, captionLength-1));
        setTimeout(function(){
            erase();
        }, 1);
    }
}

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}

