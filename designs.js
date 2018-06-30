// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(document).ready(function() {
  $('#sizePicker').submit(function makeGrid(grid) {

    let height = $('#inputHeight').val();
    let width = $('#inputWeight').val();

    $('table tr').remove();
    for (let i = 1; i <= height; i++) {

      $('table').append('<tr></tr>');

      for (let j = 1; j <= width; j++) {
          $('tr:last').append('<td></td>');
        }
    }
    grid.preventDefault();

    $('td').click(function(event) {
      let color = $('#colorPicker').val();

      if ($(this).attr('style')) {
            $(this).removeAttr('style')
      } else {
          $(this).attr('style', 'background-color:' + color);
        }

    });
  });
});