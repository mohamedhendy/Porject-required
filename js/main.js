// control navbar button
$(document).ready(function() {
  $(".navbar-toggler-icon").click(function() {
    $(this).hide();
    $(".fa-times").show();
  });
  $(".fa-times").click(function() {
    $(this).hide();
    $(".navbar-toggler-icon").show();
  });
});
