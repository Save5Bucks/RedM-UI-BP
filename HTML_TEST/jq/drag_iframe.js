$(".draggable").draggable({
  handle: ".handle",
  iframeFix: true,
  start: function (event, ui) {
    $(".frameOverlay").show();
  },
  stop: function (event, ui) {
    $(".frameOverlay").hide();
  },
});
