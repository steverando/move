$(document).ready(function(){
console.log("Am working !!!")
var img2 = $('.img2');
var img1 = $('.img1');
var overlay = $('.overlay');
overlay.mousemove(function(e){
// var amountMovedX = (e.pageX * -1 / 6);
// var amountMovedY = (e.pageY * -1 / 2);
// img2.css({
// '-webkit-transform' :'translate3d(' + amountMovedX +'px,' + amountMovedY +'px, 0)',
// '-moz-transform'    :'translate3d(' + amountMovedX +'px,' + amountMovedY +'px, 0)',
// '-ms-transform'     :'translate3d(' + amountMovedX +'px,' + amountMovedY +'px, 0)',
// '-o-transform'      :'translate3d(' + amountMovedX +'px,' + amountMovedY +'px, 0)',
// 'transform'         :'translate3d(' + amountMovedX +'px,' + amountMovedY +'px, 0)'
// });
});
overlay.mousemove(function(e){
var amountMovedX = (e.pageX * -1 / 12);
var amountMovedY = (e.pageY * -1 / 20);
img1.css({
'-webkit-transform' :'translate3d(' + amountMovedX +'px,' + amountMovedY +'px, 0)',
'-moz-transform'    :'translate3d(' + amountMovedX +'px,' + amountMovedY +'px, 0)',
'-ms-transform'     :'translate3d(' + amountMovedX +'px,' + amountMovedY +'px, 0)',
'-o-transform'      :'translate3d(' + amountMovedX +'px,' + amountMovedY +'px, 0)',
'transform'         :'translate3d(' + amountMovedX +'px,' + amountMovedY +'px, 0)'
});
});
});