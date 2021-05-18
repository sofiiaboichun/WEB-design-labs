var array = []
function generateArray(){
    var size = document.getElementById('array-size').value
    array = Array.from({length: size}, () => Math.floor(Math.random() * -200 ) + 100);
    
    document.getElementById('arrHide').hidden = false
    document.getElementById('generated-array').innerHTML = array.join('  ')
    document.getElementById('solveButton').hidden = false
}


function getNegativeNumbers(array) {

    var negatives = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negatives.push(array[i]);
        }
    }
    return negatives;
}


function getPositiveNumbers(array) {

    var positive = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            positive.push(array[i]);
        }
    }
    return positive;
}

function arrayMin(arr) {
    return arr.reduce(function (p, v) {
      return ( p < v ? p : v );
    });
  }
  
  function arrayMax(arr) {
    return arr.reduce(function (p, v) {
      return ( p > v ? p : v );
    });
  }

function solveArray(){
    document.getElementById('maxHide').hidden = false
    document.getElementById('minHide').hidden = false
    document.getElementById('min').innerHTML = arrayMin(getPositiveNumbers(array))
    document.getElementById('max').innerHTML = arrayMax(getNegativeNumbers(array))
    document.getElementById('sortButton').hidden = false

}

function selectionSort(arr) {
    for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
        let indexMin = i;
        for (let j = i + 1; j < l; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
        }
    }
    return arr;
}

function sortArray(){
    document.getElementById('sortHide').hidden = false
    document.getElementById('sort').innerHTML = selectionSort(array).join('  ')

}
