const algoliasearch = require('algoliasearch');
const dotenv = require('dotenv');
const firebase = require('firebase');

// load values from the .env file in this directory into process.env
dotenv.config();

// configure firebase
firebase.initializeApp({
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});
const database = firebase.database();

// configure algolia
const algolia = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_API_KEY
);
const index = algolia.initIndex(process.env.ALGOLIA_INDEX_NAME);

// //Adding a few contacts
// Promise.all([
//     database.ref('/recipe').push({
//       name: 'Creamy Cajun Chicken Pasta',
//       ingredients: [
//         "4 ounces linguine pasta",
//         "2 boneless, skinless chicken breast halves, sliced into thin strips",
//         "2 teaspoons Cajun seasoning",
//         "2 tablespoons butter",
//         "1 green bell pepper, chopped",
//         "1/2 ed bell pepper, chopped",
//         "4 fresh mushrooms, sliced",
//         "1 green onion, minced",
//         "1 1/2 cups heavy cream",
//         "1/4 teaspoon dried basil",
//         "1/4 teaspoon lemon pepper",
//         "1/4 teaspoon teaspoon salt",
//         "1/8 teaspoon garlic powder",
//         "1/8 teaspoon ground black pepper",
//         "2 tablespoons grated Parmesan cheese"
//       ],
//       ingredientsList: ["pasta", "chicken", "cajun seasoning", "butter", "green bell pepper", "bell pepper", "mushrooms", "onion", "heavy cream", "basil", "lemon pepper", "salt", "garlic powder", "black pepper", "parmesan cheese"],
//       time: "30",
//       steps: [
//         "Bring a large pot of lightly salted water to a boil. Add linguini pasta, and cook for 8 to 10 minutes, or until al dente; drain.",
//         "Meanwhile, place chicken and Cajun seasoning in a bowl, and toss to coat.",
//         "In a large skillet over medium heat, saute chicken in butter until no longer pink and juices run clear, about 5 to 7 minutes. Add green and red bell peppers, sliced mushrooms and green onions; cook for 2 to 3 minutes. Reduce heat, and stir in heavy cream. Season the sauce with basil, lemon pepper, salt, garlic powder and ground black pepper, and heat through.",
//         "In a large bowl, toss linguini with sauce. Sprinkle with grated Parmesan cheese."
//       ],
//       equipment: [
//         "1 pan"
//       ],
//       equipmentList:["pan"],
//       imageURL: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1585&q=80",
//       originalURL: "https://www.allrecipes.com/recipe/12009/creamy-cajun-chicken-pasta/?internalSource=hub%20recipe&referringContentType=Search"
//     }),
//     database.ref('/recipe').push({
//         name: "One-Pot Bacon Cheeseburger Pasta",
//         ingredients: [
//           "8 bacon strips, chopped",
//           "2 pounds ground beef",
//           "1/2 large red onion, chopped",
//           "12 ounces uncooked spiral pasta",
//           "4 cups chicken broth",
//           "2 cans (15 ounces each) crushed tomatoes",
//           "1 can (8 ounces) tomato sauce",
//           "1 cup water",
//           "1/4 cup ketchup",
//           "3 tablespoons prepared mustard",
//           "2 tablespoons Worcestershire sauce",
//           "1/4 teaspoon salt",
//           "1/4 teaspoon pepper",
//           "1/3 cup chopped dill pickle",
//           "Chopped tomatoes, shredded lettuce, sliced pickles and sliced red onion, optional"
//         ],
//         ingredientsList: ["bacon", "ground beef", "red onion", "pasta", "chicken broth", "tomatos", "tomato sauce", "water", "ketchub", "mustard", "Worcestershire sauce", "salt", "pepper", "pickle", "lettuce", "pickle", "red onion"],
//         time: "30",
//         steps: [
//           "In a 6-quart stockpot, cook bacon over medium heat, stirring occasionally, until crisp, 6-8 minutes. Remove with a slotted spoon; drain on paper towels. Discard drippings.",
//           "In the same pot, cook ground beef and onion over medium heat until meat is no longer pink, breaking into crumbles, 6-8 minutes; drain. Add the next 10 ingredients; bring to a boil. Reduce heat; simmer, covered, until pasta is al dente, stirring occasionally, about 10 minutes.",
//           "Stir in 1 cup cheese, pickle and bacon; cook and stir until cheese is melted. Serve with remaining cheese and, if desired, tomatoes, lettuce, pickles and red onions."
//         ],
//         equipment: [
//           "1 pot"
//         ],
//         equipmentList:["pot"],
//         imageURL: "https://www.tasteofhome.com/wp-content/uploads/2018/06/One-Pot-Bacon-Cheeseburger-Pasta_EXPS_BFBZ19_212580_B01_17_4b-696x696.jpg",
//         originalURL: "https://www.tasteofhome.com/recipes/one-pot-bacon-cheeseburger-pasta/"
//     }), 
//     database.ref('/recipe').push({
//         name: "Skinny Fettucine Alfredo",
//         ingredients: [
//           "8 ounces fettuccine",
//           "2 tablespoons all-purpose flour",
//           "1/2 large red onion, chopped",
//           "1 1/4 cups 2% milk, or more, as needed",
//           "2 tablespoons heavy cream",
//           "1/4 teaspoon garlic powder",
//           "2 ounces Neufchatel cheese, cubed",
//           "1/4 cup freshly grated Parmesan cheese",
//           "Kosher salt and freshly ground black pepper, to taste",
//           "2 tablespoons chopped fresh parsley leaves"
//         ],
//         ingredientsList: ["fettuccine", "flour", "red onion", "milk", "cream", "garlic powder", "cheese", "parmesan cheese", "black pepper", "parsley"],
//         time: "30",
//         steps: [
//           "In a large pot of boiling salted water, cook pasta according to package instructions; drain well.",
//           "Melt butter in a saucepan over medium heat. Whisk in flour until lightly browned, about 1 minute. Gradually whisk in milk, and cook, whisking constantly, until incorporated, about 1-2 minutes. Stir in heavy cream and garlic powder until slightly thickened, about 1 minute.",
//           "Stir in cheeses until melted, about 1-2 minutes. If the mixture is too thick, add more milk as needed; season with salt and pepper, to taste.",
//           "Stir in pasta and gently toss to combine.",
//           "Serve immediately, garnished with parsley, if desired."
//         ],
//         equipment: [
//           "1 pan"
//         ],
//         equipmentList:["pan"],
//         imageURL: "https://s23209.pcdn.co/wp-content/uploads/2014/01/IMG_3203edit-360x360.jpg",
//         originalURL: "https://damndelicious.net/2014/01/24/skinny-fettuccine-alfredo/"
//     }),
//     database.ref('/recipe').push({
//       name: "Kimchi Fried Rice",
//       ingredients: [
//         "1 tablespoon canola oil",
//         "1/4 cup ground beef",
//         "1 green onion, sliced, white and green parts separated",
//         "1 cup kimchi, drained and chopped",
//         "1 tablespoon gochujang (Korean hot pepper paste), or to taste (optional)",
//         "3 cups cooked short-grain rice",
//         "1 teaspoon sesame oil",
//         "1 teaspoon butter",
//         "1 egg"
//       ],
//       ingredientsList:["canola oil", "ground beef", "green onion", "kimchi", "gochujang", "short-grain rice", "sesame oil", "butter"],
//       time: "25",
//       steps: [
//         "Heat canola oil in large skillet over high heat. Stir ground beef and white parts of green onion into skillet and reduce heat to medium. Cook and stir beef and green onion until meat is browned and onion is fragrant, 1 to 2 minutes.",
//         "Stir kimchi and gochujang into meat mixture and cook until warmed through and fragrant, 2 to 4 minutes. Add rice; cook and stir until rice is heated through and coated with gochujang, 3 to 5 minutes more.",
//         "Drizzle sesame oil over rice mixture and stir to coat. Garnish with green parts of green onion.",
//         "Melt 1 teaspoon butter in a skillet over medium-high heat. Crack egg into the pan and cook until white is completely set and yolk is thick, 3 to 4 minutes. Place egg over fried rice."
//       ],
//       equipment: [
//         "1 pan"
//       ],
//       equipmentList:["pan"],
//       imageURL: "https://www.maangchi.com/wp-content/uploads/2008/03/fried-rice.jpg",
//       originalURL: "https://www.allrecipes.com/recipe/237053/kimchi-fried-rice-kimchi-bokkeumbap/?internalSource=hub%20recipe&referringContentType=Search"
//     }),
//     database.ref('/recipe').push({
//       name: "Breakfast Burritos",
//       ingredients: [
//         "1 pound bacon",
//         "10 eggs",
//         "1 (16 ounce) can refried beans",
//         "8 ounces shredded Cheddar cheese",
//         "10 (10 inch) flour tortillas"
//       ],
//       ingredientsList: ["bacon", "eggs", "beans", "cheddar cheese", "tortillas"],
//       time: "25",
//       steps: [
//         "Place bacon in a large, deep skillet. Cook over medium high heat until evenly brown. Drain, and set aside. Wrap the tortillas in foil and warm in the oven.",
//         "Fry the eggs in a greased skillet until firm. In a small sauce pan heat the refried beans.",
//         "Top each tortilla with refried beans, 2 strips of bacon, 1 egg and a little cheese. Roll tortillas into burritos and serve."
//       ],
//       equipment: [
//         "1 pan"
//       ],
//       equipmentList:["pan"],
//       imageURL: "https://i0.wp.com/www.improvoven.com/wp-content/uploads/2015/06/bacon-egg-breakfast-wrap1.jpg?w=640",
//       originalURL: "https://www.allrecipes.com/recipe/21368/breakfast-burritos/?internalSource=hub%20recipe&referringContentType=Search"
//     })]).then(() => {
//       console.log("recipe added to Firebase");
//       process.exit(0);
//     }).catch(error => {
//       console.error("Error adding recipe to Firebase", error);
//       process.exit(1);
//     });

// Get all contacts from Firebase
database.ref('/recipe').once('value', recipe => {
  // Build an array of all records to push to Algolia
  const records = [];
  recipe.forEach(contact => {
    // get the key and data from the snapshot
    const childKey = contact.key;
    const childData = contact.val();
    // We set the Algolia objectID as the Firebase .key
    childData.objectID = childKey;
    // Add object for indexing
    records.push(childData);
  });

  // Add or update new objects
  index
    .saveObjects(records)
    .then(() => {
      console.log('recipe imported into Algolia');
    })
    .catch(error => {
      console.error('Error when importing contact into Algolia', error);
      process.exit(1);
    });
});