$('#audioVideo').on('shown.bs.modal', function () {
  $('#reel')[0].play();
})
$('#audioVideo').on('hidden.bs.modal', function () {
  $('#reel')[0].pause();
})