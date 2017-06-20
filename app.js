$(function() {
    $('.question').hide();
    $('.response-status1').hide();
    $('.response-status2').hide();
    $('.response-status3').hide();
    $('.response-status4').hide();
    $('.response-status5').hide();
    $('.js-progress-bar').hide();
});

$('.js-start').click(function() {
    $('.q1').show();
    $('.js-progress-bar').show();
    $('.q2','.q3','.q4','.q5').hide();
    $('.js-start').hide();
});

$('.wrong1').click(function(){
  $('.response-status1').show();
  $('.right-a1').hide();
})

$('.correct1').click(function() {
  $('.response-status1').show();
  $('.wrong-a1').hide();
})

$('.next1').click(function() {
  $('.q2').show();
  $('.q1').hide();
  $('.response-status1').hide();
})

$('.wrong2').click(function(){
  $('.response-status2').show();
  $('.right-a2').hide();
})

$('.correct2').click(function() {
  $('.response-status2').show();
  $('.wrong-a2').hide();
})

$('.next2').click(function() {
  $('.q3').show();
  $('.q2').hide();
  $('.response-status2').hide();
})
$('.wrong3').click(function(){
  $('.response-status3').show();
  $('.right-a3').hide();
})

$('.correct3').click(function() {
  $('.response-status3').show();
  $('.wrong-a3').hide();
})

$('.next3').click(function() {
  $('.q4').show();
  $('.q3').hide();
  $('.response-status3').hide();
})
$('.wrong4').click(function(){
  $('.response-status4').show();
  $('.right-a4').hide();
})

$('.correct4').click(function() {
  $('.response-status4').show();
  $('.wrong-a4').hide();
})

$('.next4').click(function() {
  $('.q5').show();
  $('.q4').hide();
  $('.response-status4').hide();
})
$('.wrong5').click(function(){
  $('.response-status5').show();
  $('.right-a5').hide();
})

$('.correct5').click(function() {
  $('.response-status5').show();
  $('.wrong-a5').hide();
})

function handleClicks() {
  var clickCount = 0;
  $('.js-click-counter').text(clickCount);
  $('.progress').click(function(event) {
  clickCount += 1;
  $('.js-click-counter').text(clickCount);
  });
}

$(handleClicks);