var contents = $('.tweet');
var activeIndex = 0;
setInterval(function () {
    contents.eq(activeIndex).toggleClass("active");
    if (activeIndex < contents.length-1)
        activeIndex++;
    else
        activeIndex = 0;
    contents.eq(activeIndex).toggleClass("active");

},3000);