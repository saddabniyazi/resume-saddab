$(document).ready(function () {
  $("#contactForm").submit(function (e) {
    e.preventDefault();
    $(".msg").text("✅ Message sent successfully!").css("color", "#0f3460");
    $(this).trigger("reset");
  });
});
