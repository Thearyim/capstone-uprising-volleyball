function hideAll() {
  $('.content-section').hide();
}

function showSection(section) {
  // alert(section);
  hideAll();
  $(`${section}`).show();
}

$(document).ready(function() {
  hideAll();
  showSection("section-home");
});
