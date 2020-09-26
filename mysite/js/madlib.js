//Startup X, Y Array,
var startupX = ["Uber", "Google", "Amazon", "Apple", "Facebook", "Twitter"];
var startupY = ["Slack", "Trello", "Tesla", "Hyperloop", "Harvest"];

//Pick random array item
var random1 = Math.floor(Math.random() * startupX.length);
var random2 = Math.floor(Math.random() * startupY.length);

//Get HTML elements by ID
var myH1 = document.getElementById('xForY');
var create_btn = document.getElementById('create');
var save_btn = document.getElementById('save');
var print_btn = document.getElementById('print');
var favorites = document.getElementById('favorites');

//An array for my favorites
var myFavs = [];

//On click event listener
create_btn.addEventListener('click', function() {
    //Show save-btn
    save_btn.className = 'show-btn';
    myH1.innerHTML = "A startup that is " + startupX[random1] + ", but for " + startupY[random2];
    //Store the first output into a variable
    var addToFav = startupX[random1];
    //Save click-event listener
    save_btn.addEventListener('click', function() {
        //show print-btn
        print_btn.className = 'show-btn';
        //Add index to myFav Array
        myFavs.push(addToFav);
        //Convert to string for printing
        var favString = myFavs.toString();
        //Log myFav to the console
        console.log(favString);
        //Print click-event listener
        print_btn.addEventListener('click', function() {
            favorites.innerHTML = favString;
        });
    });
});