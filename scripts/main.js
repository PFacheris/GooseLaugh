(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(function() {
  var player;
  player = videojs("main-video", {
    preload: "auto"
  }, function() {
    return this.on("ended", function() {
      $('.poster-image').show();
      return $('#main-video').hide();
    });
  });
  $('.poster-image').on("click", function() {
    $('.poster-image').hide();
    $('#main-video').show();
    return player.play();
  });
  return $('#main-video').on("click", function() {
    return player.currentTime(0);
  });
});


},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wbGZhY2hlcmlzL0RvY3VtZW50cy9EZXZlbG9wbWVudC9nb29zZWxhdWdoL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvcGxmYWNoZXJpcy9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvZ29vc2VsYXVnaC9zcmMvY29mZmVlL21haW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsQ0FBQSxDQUFFLFNBQUEsR0FBQTtBQUVBLE1BQUEsTUFBQTtBQUFBLEVBQUEsTUFBQSxHQUFTLE9BQUEsQ0FBUSxZQUFSLEVBQ1A7QUFBQSxJQUFBLE9BQUEsRUFBUyxNQUFUO0dBRE8sRUFFUCxTQUFBLEdBQUE7V0FDRSxJQUFDLENBQUEsRUFBRCxDQUFJLE9BQUosRUFBYSxTQUFBLEdBQUE7QUFDWCxNQUFBLENBQUEsQ0FBRSxlQUFGLENBQWtCLENBQUMsSUFBbkIsQ0FBQSxDQUFBLENBQUE7YUFDQSxDQUFBLENBQUUsYUFBRixDQUFnQixDQUFDLElBQWpCLENBQUEsRUFGVztJQUFBLENBQWIsRUFERjtFQUFBLENBRk8sQ0FBVCxDQUFBO0FBQUEsRUFRQSxDQUFBLENBQUUsZUFBRixDQUFrQixDQUFDLEVBQW5CLENBQXNCLE9BQXRCLEVBQStCLFNBQUEsR0FBQTtBQUM3QixJQUFBLENBQUEsQ0FBRSxlQUFGLENBQWtCLENBQUMsSUFBbkIsQ0FBQSxDQUFBLENBQUE7QUFBQSxJQUNBLENBQUEsQ0FBRSxhQUFGLENBQWdCLENBQUMsSUFBakIsQ0FBQSxDQURBLENBQUE7V0FFQSxNQUFNLENBQUMsSUFBUCxDQUFBLEVBSDZCO0VBQUEsQ0FBL0IsQ0FSQSxDQUFBO1NBYUEsQ0FBQSxDQUFFLGFBQUYsQ0FBZ0IsQ0FBQyxFQUFqQixDQUFvQixPQUFwQixFQUE2QixTQUFBLEdBQUE7V0FDM0IsTUFBTSxDQUFDLFdBQVAsQ0FBbUIsQ0FBbkIsRUFEMkI7RUFBQSxDQUE3QixFQWZBO0FBQUEsQ0FBRixDQUFBLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJCAtPlxuICAjIEluaXRpYWxpemVcbiAgcGxheWVyID0gdmlkZW9qcyhcIm1haW4tdmlkZW9cIixcbiAgICBwcmVsb2FkOiBcImF1dG9cIixcbiAgICAtPlxuICAgICAgQG9uIFwiZW5kZWRcIiwgLT5cbiAgICAgICAgJCgnLnBvc3Rlci1pbWFnZScpLnNob3coKVxuICAgICAgICAkKCcjbWFpbi12aWRlbycpLmhpZGUoKVxuICApXG5cbiAgJCgnLnBvc3Rlci1pbWFnZScpLm9uIFwiY2xpY2tcIiwgLT5cbiAgICAkKCcucG9zdGVyLWltYWdlJykuaGlkZSgpXG4gICAgJCgnI21haW4tdmlkZW8nKS5zaG93KClcbiAgICBwbGF5ZXIucGxheSgpXG5cbiAgJCgnI21haW4tdmlkZW8nKS5vbiBcImNsaWNrXCIsIC0+XG4gICAgcGxheWVyLmN1cnJlbnRUaW1lKDApXG4iXX0=
