// Generate filter buttons
var houses = []; 
$.each(characters, function(index, character) {
  if(!houses.includes(character.house)) {
    houses.push(character.house);

    $('#buttons').append(`
      <button class="filter" data-house="${character.house}">
        ${character.house} 
      </button>
    `); 
  }
});

// Add "All" filter button 
$('#buttons').prepend(`
  <button class="filter" data-house="All">All</button>
`);

// Filter table rows on button click
$('.filter').click(function() {

  // Hide all rows first
  $('tr').hide();

  var house = $(this).data('house');

  $('tr').each(function() {
    if(house == 'All' || $(this).find('td:eq(2)').text() == house) {
      $(this).show();
    }
  });

  // Update row colors after filtering
  $('tr:visible:odd').removeClass('even').addClass('odd');
  $('tr:visible:even').removeClass('odd').addClass('even');

});
