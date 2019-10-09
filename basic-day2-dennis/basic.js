/*
$(document).ready(function(){
                    $('#animate').hide(0);                  $('#animate').fadeIn(1000).delay(3000).fadeOut(3000);                  
           })
           */

$(document).ready(function () {
    var row = $('.wrapper').append('<input type="text" id="todo"><br><button type="button" class="button"> the button</button>');
    removeText();

    function removeText() {
        $('#animate').hide(0);
        $('li').on('click', function () {
            $(this).animate({
                opacity: 0.0,
                paddingLeft: '+=80'
            }, 500, function () {
                $(this).remove();
            });
        });
    };

    $('.button').on('click', function () {
        var text1 = $('#todo').val();
        console.log(text1);
        $('ul').append('<li>' + text1 + '</li>');
        removeText();
    })
});