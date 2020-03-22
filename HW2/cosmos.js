$(function() {
    $('a[href*=\\#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});


$(document).ready(function(){
  $('.pg2_text').on('mousedown touchstart',function(){
    $(this).css('animation-play-state','paused')
  }).bind('mouseup mouseleave touched',function(){
    $(this).css('animation-play-state','running')
  })
})
