$(function() {
  $('.down').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });

  $('#backbutton').click(function(){
    $('html,body').animate({scrollTop:0},700);
  });
});
function photo_change(){
  $('.iron').click(function(){
    $('img').first().appendTo('#photo');
  });
};
