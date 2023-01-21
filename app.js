$('.btn').click((e) => {
    e.preventDefault();
    $('.modal').addClass('open');
});
 
$('.modal-close').click((e) => {
    e.preventDefault();
    $('.modal').removeClass('open');
});

// $('body').click(function (e) {
//     e.preventDefault();
//     if (e.target.className == 'modal-body') {
//         $('.modal').removeClass('open');
//     }
// });