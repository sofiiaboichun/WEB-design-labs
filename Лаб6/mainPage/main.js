



$(function () {
  $("#datepicker").datepicker();
});



$(document).ready(function () {
  $('input').tooltip({
    position: {
      my: 'center+50 bottom',
      at: 'center top-20',
      of: '#datepicker'
    }
  });
  $('input').tooltip('option', 'tooltipClass', 'top');
});


$(function () {
  $( "#polzunok" ).slider({
    animate: "slow",
    range: "min",
    value: 50,
    slide: function (event, ui) {
      $("#result-polzunok").text(ui.value);
    }
  });
});


$(function () {
  $("#result-polzunok").text($("#polzunok").slider("value"));
});

