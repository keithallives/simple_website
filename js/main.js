// Animate Smooth Scroll
$("#watch-video").on("click", function() {
  const video = $("#video").position().top;

  $("html, body").animate(
    {
      scrollTop: video
    },
    900
  );
});

$("#see-photos").on("click", function() {
  const photos = $("#photos").position().top;

  $("html, body").animate(
    {
      scrollTop: photos
    },
    900
  );
});
