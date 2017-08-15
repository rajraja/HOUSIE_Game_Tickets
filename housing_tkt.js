function getRandomNumber() {
  var min = 1, max = 99;
  return Math.floor(Math.random()*(max-min+1)+min);
}

var  selectedNumbers = [];
function generateNextRandom() {

    var random = getRandomNumber();
    if(selectedNumbers.length === 0 ){
      selectedNumbers.push(random);
      return random;
    }

    var found = selectedNumbers.indexOf(random);
    // console.log(found);

    if(found != -1) {
      random = getRandomNumber();
      selectedNumbers.push(random);
      return random;
    }else {
      selectedNumbers.push(random);
      return random;
    }


}


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


function printHousie() {
  // takeInput();
  // var randomNumber = generateNextRandom();

  var row = [ ["", "", "", ""], ["", "", "", ""], ["", "", "", ""] ];

     // Each row has 5 numbers (or emojis)
     for (var i=0; i< row.length; i++) {
         for (var j=0; j<5; j++) {
            var min = 1;
            var max = 10;
            var randomNumber = generateNextRandom(min, max);
             row[i].push(randomNumber);
         }
         // Let's shuffle to maintain randomness
         shuffleArray(row[i]);
     }


     for (var i=0; i<row.length; i++) {
       console.log('');
       console.log(row[i]);
     }
     console.log('');

}
printHousie();
console.log("Program one has been Completed!");
