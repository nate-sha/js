// Pets Array
const pets = [
  {
    "name": "Barky",
    "species" : "dog",
    "foods": {
      "likes": ["bones", "carrots"],
      "dislikes": ["tuna"]
    }
  },
  {
    "name": "Meowsy",
    "species" : "cat",
    "foods": {
      "likes": ["tuna", "catnip"],
      "dislikes": ["ham", "zucchini"]
    }
  },
  {
    "name": "Purrpaws",
    "species" : "cat",
    "foods": {
      "likes": ["mice"],
      "dislikes": ["cookies"]
    }
  },
  {
    "name": "Kitty",
    "species" : "cat",
    "foods": {
      "likes": ["fresh food"],
      "dislikes": ["stale food"]
    }
  },
  {
    "name": "Pupster",
    "species" : "dog",
    "foods": {
      "likes": ["canned food", "peas"],
      "dislikes": ["bread"]
    }
  },
  {
    "name": "Tux",
    "species" : "cat",
    "foods": {
      "likes": ["fancy dishes"],
      "dislikes": ["basic cat food"]
    }
  },
  {
    "name": "Whiskers",
    "species" : "cat",
    "foods": {
      "likes": ["celery", "strawberries"],
      "dislikes": ["carrots"]
    }
  },
  {
    "name": "Woof",
    "species" : "dog",
    "foods": {
      "likes": ["dog food"],
      "dislikes": ["cat food"]
    }
  },
  {
    "name": "Fluffy",
    "species" : "cat",
    "foods": {
      "likes": ["canned food"],
      "dislikes": ["dry food"]
    }
  }
]

// find a pet by name
findPetByName = petName => {
  return pets.find(x => x.name === `${petName}`)
}

const findMeowsy = findPetByName("Meowsy")
console.log(`Search for: Meowsy ... \n
${findMeowsy.name} is a ${findMeowsy.species}\n
Likes: ${findMeowsy.foods.likes}
Dislikes: ${findMeowsy.foods.dislikes}
`)
// Filter Cats only
let onlyCats = pets.filter(x => x.species === 'cat').map(x => {
  return x.name
})
console.log(`Cats is our shelter: ${onlyCats}`)


// .map and Template Literal and Delimiters
let petsfilter = pets.filter(x => x.species === 'cat').map(x => 
  console.log(`${x.name} is a cat that doesn't like ${x.foods.dislikes}`))

// Array and Object Destructuring
function petInfoFetcher(){
  return  {
    "name": "Barky",
    "species" : "dog",
    "foods": {
      "likes": ["bones", "carrots"],
      "dislikes": ["tuna"]
    }
  };
}
const {name, foods: {likes}} = petInfoFetcher()
console.log(name, likes);

//Reduce

let chubbyPet = pets.reduce((chubPets, petArray) => {
  if (petArray.weight > 15) {
    chubPets.push(`${petArray.name} the ${petArray.species}weighs ${petArray.weight} lb`)
  }
  return chubPets;
},[]);

console.log(chubPets)



//Promises
//const isAdoptable = (resolve, reject) => {
  //if (pets.adoptable === true){
  //  resolve ('This pet is adoptable')
  //} else {
  //  reject ('This pet had been adopted')
  //}
//} 
//function adoptApet() {
  //return new Promise(isAdoptable)
//}
//adopt = adoptApet()
//console.log(adopt)
