// Create Meal list
let meals = ['Tortilla de patatas', 'Pan con tomate','Croquettes', 'Turrón','Mantecados', 'Aleppo Kebab', 'Lamb Chops', 'Baklava', 'Polvorones','Flan', 'Crema Catalana', 'Natillas de Leche', 'Tarta de Manzana Casera']
//Get HTML elements
let mybtn = document.getElementById('mybtn');
let meal = document.getElementById('meal');
let note = document.getElementById('note');

    
mybtn.addEventListener('click', function() {
    let randomMeal = Math.floor(Math.random() * meals.length);
    dinner = meals[randomMeal]
    meal.innerText = dinner;
    meal.addEventListener('click', function() {
        document.execCommand('copy');
        note.className = "show";
    });
});


