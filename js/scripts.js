var pigLatinGenerator = function(string) {
  var vowels = 'aeiou';
  var consonates = "qwrtypsdfghjklzxcvbnm";
  var first_letter = string[0];

  if (consonates.indexOf(first_letter) !== -1) {
    var fragment = '';
    if (string.slice(0, 2) === 'qu') {
      var fragment = string.slice(0, 2);
    }

    else {

      for(var i= 0; i<string.length; i++) {
        if(consonates.indexOf(string[i]) !== -1 ) {
          fragment += string[i];
        } else {
          break;
        }
      }
    }
    if (fragment.slice(-1) === 'q' && string.slice(fragment.length, fragment.length+1) === 'u'){
      fragment += 'u';

    }
    var lengthOfFragment = fragment.length;
    var consonate_word = string.slice(lengthOfFragment) + fragment + 'ay';
    return consonate_word;
  }

  if (vowels.indexOf(first_letter) !== -1){
      var new_string = string + 'ay';
      return new_string;
  }
};

var stringToArray = function(string) {
    var string_array = string.split(" ");
    var result_array = [];

    for (var word of string_array) {
      var converted_string = pigLatinGenerator(word);
      result_array.push(converted_string);
    }
    return result_array.join(' ');

};

$(document).ready(function() {
  $('form#pig-latin').submit(function(event) {
    var string = $('input#string').val();
    var result = stringToArray(string);

    $('.string').empty();
    $('.pig-latin-string').empty();

    $('.string').text(string);
    $('.pig-latin-string').text(result);

    $('#result').show();
    event.preventDefault();
  })
});
