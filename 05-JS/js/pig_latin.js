function translateToPigLatin() {
  var inputText = document.getElementById("txtVal").value;
  var words = inputText.split(" ");
  var resultArray = [];

  words.forEach(function (word) {
    var firstLetter = word.charAt(0);
    if (/[aeiouAEIOU]/.test(firstLetter)) {
      resultArray.push(word + "way");
    } else {
      var consonants = "";
      var i = 0;
      while (i < word.length && !/[aeiouAEIOU]/.test(word.charAt(i))) {
        consonants += word.charAt(i);
        i++;
      }
      resultArray.push(word.slice(i) + consonants + "ay");
    }
  });

  var pigLatinTranslation = resultArray.join(" ");
  document.getElementById("pigLatLbl").textContent = pigLatinTranslation;
}

// Some examples of expected outputs
//console.log(igpayAtinlay("pizza")); // "izzapay"
//console.log(igpayAtinlay("apple")); // "appleway"
//console.log(igpayAtinlay("happy meal")); // "appyhay ealmay"
