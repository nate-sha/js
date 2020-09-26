//Get HTML data
var getBTN = document.getElementById("getBTN");
var qbody = document.getElementById('qbody');
//click counter
var clicks = 1;
getBTN.addEventListener('click', function() {
    var getData = new XMLHttpRequest();
    getData.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + clicks + '.json');
    getData.onload = function() {
        var qData = JSON.parse(getData.responseText);
        addHTML(qData);
    };
    getData.send();
    clicks++;
    if (clicks > 3) {
        getBTN.classList.add('hide-btn');
    }
});

function addHTML(data) {
    // Define a variable for my text element
    var string = "";
    for (i = 0; i < data.length; i++) {
        string += '<p>' + data[i].name + ' is a ' + data[i].species;
    }
    qbody.insertAdjacentHTML('beforeend', string);
}
