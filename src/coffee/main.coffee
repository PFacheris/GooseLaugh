$ ->
  # Initialize
  player = videojs("main-video",
    preload: "auto",
    ->
      @on "ended", ->
        $('.poster-image').show()
        $('#main-video').hide()
  )

  $('.poster-image').on "click", ->
    $('.poster-image').hide()
    $('#main-video').show()
    player.play()

  $('#main-video').on "click", ->
    player.currentTime(0)
