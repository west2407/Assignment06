console.log('connected');
// setteing the array
var cityNames = ['nyc' , 'la' , 'austin' , 'sf' , 'sydney'];
// setting the empty variable for aray function
var optionTags = ""
// adding the array onto it's self in order to wrap each of the strings in the array in an option tag
cityNames.forEach(function(name) {
  optionTags += '<option>'  + name.toUpperCase() + "</option>"
})
// appending to the selection description
$('#city-type').append(optionTags);




// event listner for the drop down menu
$('#city-type').change(function(){
// setting the variable to get the value of the input
  var valueInput = $('#city-type').val()
// if statement for each possible input
  if ( valueInput === 'NYC') {
    $('body').removeClass()
    $('body').addClass('nyc');
  }
    else if ( valueInput === 'LA') {
    $('body').removeClass()
    $('body').addClass('la');
  }
    else if ( valueInput === 'AUSTIN') {
    $('body').removeClass()
    $('body').addClass('austin');
  }
    else if ( valueInput === 'SF') {
    $('body').removeClass()
    $('body').addClass('sf');
  }
    else if ( valueInput === 'SYDNEY') {
    $('body').removeClass()
    $('body').addClass('sydney');
  }
    else {
    $('body').removeClass()
    $('body').addClass('cityPix');
  }




})
