$('.next').on('click',function(){
    var current = $('img.active');
    if(current.is('img:last-child')) {
        var next = $('img:first-child');
    } else {
        var next = current.next();
    }
    current.removeClass('active');
    next.addClass('active');
});

$('.prev').on('click',function(){
	var current = $('img.active');
    if(current.is('img:first-child')) {
        var prev = $('img:last-child');
    } else {
        var prev = current.prev();
    }
    current.removeClass('active');
    prev.addClass('active');
	})


