$(document).ready(function() {
	$('form').submit(function(e) {
		e.preventDefault();
		
		var text = $('#user-text').val();
		$('dl').removeClass('hidden');
		$('.js-word-count').text(wordCount(text));
		$('.js-unique-count').text(uniqueWord(text));
		$('.js-avg-length').text(avgWordLength(text));
		$('.js-avg-sentence').text(avgSentenceLength(text));
	})
})

function wordCount (string) {
  var array = string.split(' ');
  var answer = array.length;
  return answer;
}

function uniqueWord (string) {
  var finalArray = [];
  var array = string.split(' ');
  for (var i = 0; i < array.length; i++) {
    if (finalArray.indexOf(array[i]) === -1) {
      finalArray.push(array[i]);
    }
  }
  return finalArray.length;
}

function avgWordLength (string) {
  var array = string.split(' ');
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total += array[i].length;
  }
  return total / array.length;
}

function avgSentenceLength (string) {
  var sentenceArray = string.split(/[.?!]/);
  var total = 0;
  for (var i = 0; i < sentenceArray.length; i++) {
    total += sentenceArray[i].length;
  }
  return total / sentenceArray.length;
}