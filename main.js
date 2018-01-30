console.log('connected');
// setting the array
var cityNames = ['nyc' , 'la' , 'austin' , 'sf' , 'sydney'];

// appending the array onto it's self in order to wrap each of the strings in the array in an option tag
cityNames.forEach(function(name) {
  $('#city-type').append('<option>'  + name + "</option>");
})

// event listner for the drop down menu
$('#city-type').change(function(event){
// setting the variable to get the value of the input
  var valueInput = $('#city-type').val();
// if statement for each possible input
  if ( valueInput === cityNames[0] ) {
    $('body').removeClass();
    $('body').addClass('nyc');
  }
    else if ( valueInput === cityNames[1] ) {
    $('body').removeClass();
    $('body').addClass('la');
  }
    else if ( valueInput === cityNames[2] ) {
    $('body').removeClass();
    $('body').addClass('austin');
  }
    else if ( valueInput === cityNames[3] ) {
    $('body').removeClass();
    $('body').addClass('sf');
  }
    else if ( valueInput === cityNames[4] ) {
    $('body').removeClass()
    $('body').addClass('sydney');
  }
  // If no input go to default image
    else {
    $('body').removeClass();
    $('body').addClass('cityPix');
  }

})
