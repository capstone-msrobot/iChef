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

//Adding a few contacts
// Promise.all([
//     database.ref('/recipesFinal').push({
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
//       originalURL: "https://www.allrecipes.com/recipe/12009/creamy-cajun-chicken-pasta/?internalSource=hub%20recipe&referringContentType=Search",
//       stepsURL: ""
//     }),
//     database.ref('/recipesFinal').push({
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
//         originalURL: "https://www.tasteofhome.com/recipes/one-pot-bacon-cheeseburger-pasta/",
//         stepsURL: ""
//     }), 
//     database.ref('/recipesFinal').push({
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
//         originalURL: "https://damndelicious.net/2014/01/24/skinny-fettuccine-alfredo/",
//         stepsURL:""
//     }),
//     database.ref('/recipesFinal').push({
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
//       originalURL: "https://www.allrecipes.com/recipe/237053/kimchi-fried-rice-kimchi-bokkeumbap/?internalSource=hub%20recipe&referringContentType=Search",
//       stepsURL: ""
//     }),
//     database.ref('/recipesFinal').push({
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
//       originalURL: "https://www.allrecipes.com/recipe/21368/breakfast-burritos/?internalSource=hub%20recipe&referringContentType=Search",
//       stepsURL: ""
//     }),
//     database.ref('/recipesFinal').push({
//       name: "Apple Sandwhices with Granola and Penut Butter",
//       ingredients: [
//         "2 small apples, cored and cut crosswise into 1/2-inch thick rounds",
//         "1 teaspoon lemon juice, optional",
//         "3 tablespoons peanut or almond butter",
//         "2 tablespoons semisweet chocolate chips",
//         "3 tablespoons granola"
//       ],
//       ingredientsList:["apples", "lemon juice", "peanut butter", "almond butter", "chocolate chips", "granola"],
//       time: "10",
//       steps: [
//         "If not eating immediately, brush the apples slices with lemon juice to keep them from turning brown.",
//         "Spread one side of half of the apple slices with peanut or almond butter then sprinkle with chocolate chips and granola. Top with remaining apple slices, pressing down gently to make the sandwiches. Transfer to napkins or plates and serve."
//       ],
//       equipment: [
//         ""
//       ],
//       equipmentList:[""],
//       imageURL: "https://www.wholefoodsmarket.com/sites/default/files/styles/header_recipe/public/media/2535.jpg?itok=XBy2EYwQ",
//       originalURL: "https://www.wholefoodsmarket.com/recipe/apple-sandwiches-granola-and-peanut-butter",
//       stepsURL: ""
//     }),
//     database.ref('/recipesFinal').push({
//       name: "Avocado Chicken Salad",
//       ingredients: [
//         "2 medium cooked chicken breasts shredded or chopped (we used rotisserie chicken)",
//         "2 ripe avocados pitted and diced",
//         "1/2 cup corn roasted, canned, or frozen",
//         "1/4 cup red or green onion minced",
//         "2 tablespoons cilantro minced (or parsley or dill)",
//         "2 tablespoons lime or lemon juice",
//         "2 tablespoons olive oil",
//         "salt and pepper to taste"
//       ],
//       ingredientsList:["salt", "pepper", "olive oil", "lime juice", "lemon juice", "cilantro", "red onion", "green onion", "corn", "avocados", "chicken breasts"],
//       time: "20",
//       steps: [
//         "In a large bowl, add the shredded chicken, avocado, onion, avocados, corn, and cilantro.",
//         "Drizzle with the lime (or lemon) juice, olive oil and season with salt and pepper. Toss gently until all the Ingredients are combined."
//       ],
//       equipment: [
//         "bowl"
//       ],
//       equipmentList:["bowl"],
//       imageURL: "https://gimmedelicious.com/wp-content/uploads/2018/01/Avocado-Chicken-Salad-3.jpg",
//       originalURL: "https://gimmedelicious.com/2018/01/03/avocado-chicken-salad/",
//       stepsURL: ""
//     }),
//     database.ref('/recipesFinal').push({
//       name: "Creamy Shrimp Pasta Recipe",
//       ingredients: [
//         "3/4 lb fettuccini pasta",
//         "1 lb large raw shrimp peeled and deveined",
//         "1 Tbsp olive oil",
//         "1/2 onion (medium), finely chopped",
//         "2 Tbsp unsalted butter",
//         "1 garlic clove minced",
//         "1/3 cup white wine I used Chardonnay",
//         "2 cups whipping cream",
//         "1/3 cup shredded parmesan cheese",
//         "1/2 tsp Sea salt or to taste",
//         "1/4 tsp black pepper or to taste",
//         "1/4 tsp paprika or to taste",
//         "1 Tbsp Parsley finely chopped, to garnish"
//       ],
//       ingredientsList:["fettuccini pasta", "shrimp", "olive oil", "onion", "unsalted butter", "garlic", "white wine", "whipping cream", "parmesan cheese", "sea salt", "black pepper", "paprika", "parsley"],
//       time: "25",
//       steps: [
//         "Add 3/4 lb pasta to a pot of boiling water with 1 Tbsp salt and cook according to package instructions until al-dente. Drain without rinsing and set aside.",
//         "While pasta is cooking, prepare the shrimp and sauce. Season shrimp with 1/2 tsp salt, 1/4 tsp black pepper and 1/4 tsp paprika. Place a large, non-stick pan over medium/high heat and add 1 Tbsp oil. Once oil is hot, add shrimp in a single layer and cook 2 min per side or just until cooked through and no longer translucent. Remove to a separate dish to prevent overcooking.",
//         "In the same hot pan, add 2 Tbsp butter with finely chopped onion and sauté until soft and golden (3-5 mins), stirring often. Add minced garlic and sauté another minute until fragrant. Stir in 1/3 cup white wine and boil down until there is only 25% of the liquid left.",
//         "Stir in 2 cups cream, bring to a light boil then simmer 2 min. Sprinkle sauce with 1/3 cup parmesan cheese and stir just until creamy and smooth. Let it come just to a simmer without boiling then turn off the heat and season sauce with more salt, pepper and paprika to taste.",
//         "Stir in the drained pasta and cooked shrimp, tossing until noodles are well coated in sauce. Serve in warm pasta bowls with a generous sprinkle of finely chopped parsley, more parmesan cheese and some freshly cracked black pepper."
//       ],
//       equipment: [
//         "1 pan"
//       ],
//       equipmentList:["pan"],
//       imageURL: "https://natashaskitchen.com/wp-content/uploads/2017/05/Creamy-Shrimp-Alfredo-Pasta-3.jpg",
//       originalURL: "https://natashaskitchen.com/creamy-shrimp-pasta-recipe/",
//       stepsURL: ""
//     }),
//     database.ref('/recipesFinal').push({
//       name: "Stuffed Baguette Recipe",
//       ingredients: [
//         "2 baguettes",
//         "2 (8 oz) packs of cream cheese, softened",
//         "1/3 cup finely chopped red onion",
//         "1 tbsp mined garlic",
//         "1/3 cup finely chopped sundried tomatoes",
//         "1/3 cup chopped olives (I used kalmata olives)",
//         "1/3 cup finely chopped parsley",
//         "Salt and Pepper (according to taste)"
//       ],
//       ingredientsList:["baguettes", "cream cheese", "red onion", "garlic", "tomatoes", "chopped olives", "parsley", "salt", "pepper"],
//       time: "20",
//       steps: [
//         "Cut the baguettes in half to make it easier to handle and stuff. Chop the ends off and using a long knife, hollow out the bread leaving a just about a centimeter of crust.",
//         "In a stand mixer with a whisk attachment or by hand, whisk the cream cream cheese until smooth and creamy.",
//         "Add the onion, garlic, sundried tomatoes, olives and parsley fold it all in with a spatula. Give it a taste and season it with salt and pepper according to your taste.",
//         "Now you can spoon in the cream cheese mixture into the baguette. You need to really pack it in there and it can be a messy job.",
//         "Or you can cheat like I did and slit the baguette lengthwise on the bottom and then using a piping bag squeezed a line of the cream cheese mix in there. I then pressed the stuffing in with a butter knife and squeezed it shut. It’s a lot easier to stuff it this way and no one can tell the difference.",
//         "Wrap the stuffed baguettes in cling film and refrigerate for a couple hours or over night. Then just slice it up and serve."
//       ],
//       equipment: [
//         "1 bowl"
//       ],
//       equipmentList:["bowl"],
//       imageURL: "http://picturetherecipe.com/wp-content/uploads/2012/05/Stuffed-Baguette-16-copy.jpg",
//       originalURL: "http://picturetherecipe.com/recipes/stuffed-baguette/",
//       stepsURL: {
//         1:"https://firebasestorage.googleapis.com/v0/b/capstone-msrobot.appspot.com/o/Stuffed%20Baguette%20Recipe%2Fstep1.png?alt=media&token=9db3bc7f-4a1a-41eb-b8d2-b4eaffef66d5",
//         2:"https://firebasestorage.googleapis.com/v0/b/capstone-msrobot.appspot.com/o/Stuffed%20Baguette%20Recipe%2Fstep2.png?alt=media&token=be2d4842-8102-48b2-be0e-c9c5c5c35a52",
//         3:"https://firebasestorage.googleapis.com/v0/b/capstone-msrobot.appspot.com/o/Stuffed%20Baguette%20Recipe%2Fstep3.png?alt=media&token=7b0ca550-771f-4c5f-9b58-ac11585c57ba",
//         4:"https://firebasestorage.googleapis.com/v0/b/capstone-msrobot.appspot.com/o/Stuffed%20Baguette%20Recipe%2Fstep4.png?alt=media&token=9480723d-b39e-4e99-ae99-dfe0a4ff0acf",
//         5:"https://firebasestorage.googleapis.com/v0/b/capstone-msrobot.appspot.com/o/Stuffed%20Baguette%20Recipe%2Fstep5.png?alt=media&token=975255fe-4f4f-47fe-9485-a9d09bec756e",
//         6:"https://firebasestorage.googleapis.com/v0/b/capstone-msrobot.appspot.com/o/Stuffed%20Baguette%20Recipe%2Fstep6.png?alt=media&token=272c84e3-fcbe-4a7f-b6c4-6a6d4994d352"  
//       }
//     }),
//     database.ref('/recipesFinal').push({
//       name: "Baked Fish with Dill Sour Cream Topping",
//       ingredients: [
//         "4 fillets of any firm white fish (I used Mahi-Mahi)",
//         "3/4 Cup of Sour Cream",
//         "1/2 tsp Salt + extra for marinating the fish",
//         "1/2 tsp ground Black Pepper + extra for marinating the fish",
//         "1/2 tsp Lemon Zest",
//         "1/2 tbsp freeze dried Dill (or 1 tsp- fresh dill) + 1/2 tsp ( or 1/4 tsp) for the fish",
//         "3 cloves of Garlic",
//         "3 Green Onions/Scallions",
//         "1/2 tsp (or less, depending on your spice level) crushed Red Pepper Flakes",
//         "Juice of 1/2 lemon",
//         "1/3 cup of Parmesan cheese, grated or powdered"
//       ],
//       ingredientsList:["fillets of white fish", "sour cream", "salt", "black pepper", "lemon zest", "freeze dried dill", "garlic", "onions", "Scallions", "red pepper flakes", "lemon", "parmesan cheese"],
//       time: "30",
//       steps: [
//         "Start with 3/4 of a cup of sour cream (light sour cream, if you'd like) in a mixing bowl and add 1/2 teaspoon of salt, 1/2 teaspoon of ground black pepper, the lemon zest and 1/2 tablespoon of freeze dried dill (or 1 teaspoon of fresh chopped dill) to it.",
//         "Peel and grated 3 cloves of garlic into the bowl, along with the white parts of 3 green onions very finely chopped (save the green parts as a garnish for later).",
//         "Add 1/2 teaspoon of crushed red pepper flakes (or less if you're not a fan of spice at all) and a small squeeze of lemon juice (about 1/4 of a lemon). Mix everything together well and set it aside (in the fridge if you're cooking the fish later).",
//         "Pre-heat your oven to 400F and lightly season your thawed fish fillets (Mahi-Mahi, Halibut and Cod work wonderfully for this recipe!) with some salt, ground black pepper, a sprinkling of dill and a small (about 1/4 of a lemon) squeeze of lemon juice on both sides of the fish.",
//         "Place your fillets in an shallow oven proof casserole dish or parchment lined sheet cake pan and spread the dill sour cream mixture over the fillets in a somewhat even layer. Sprinkle some Parmesan cheese over the top of each fillet.",
//         "Depending on the thickness of your fillets bake your fish for 15-20 minutes and brown the top by sticking them under the broiler for an additional 1-2 minutes, keeping a close eye on them. (My fillets took just 15 minutes to cook and I stuck them under the broiler for 2 minutes to get the browned spots)",
//         "Garnish the baked fish with the chopped green onions we saved from earlier and serve hot with some fresh vegetable side and or pasta or rice. I served the fish with some brown butter and Parmesan orzo and lemon-pepper green beans"
//       ],
//       equipment: [
//         "oven"
//       ],
//       equipmentList:["oven"],
//       imageURL: "https://picturetherecipe.com/wp-content/uploads/2014/12/Baked-Fish-with-Dill-Sour-Cream-by-PictureTheRecipe.jpg",
//       originalURL: "https://picturetherecipe.com/recipes/baked-fish-with-dill-sour-cream-topping/",
//       stepsURL: {
//         1:"https://firebasestorage.googleapis.com/v0/b/capstone-msrobot.appspot.com/o/Baked%20Fish%20with%20Dill%20Sour%20Cream%20Topping%2Fstep1.png?alt=media&token=ac2c6dd5-321e-4020-bfdd-f8b3821803ab",
//         2:"https://firebasestorage.googleapis.com/v0/b/capstone-msrobot.appspot.com/o/Baked%20Fish%20with%20Dill%20Sour%20Cream%20Topping%2Fstep2.png?alt=media&token=95d175bc-d7e1-49a4-aa60-540cadc3f1aa",
//         3:"https://firebasestorage.googleapis.com/v0/b/capstone-msrobot.appspot.com/o/Baked%20Fish%20with%20Dill%20Sour%20Cream%20Topping%2Fstep3.png?alt=media&token=8fa704d2-d4cd-44dd-92a2-ed11562335b0",
//         4:"https://firebasestorage.googleapis.com/v0/b/capstone-msrobot.appspot.com/o/Baked%20Fish%20with%20Dill%20Sour%20Cream%20Topping%2Fstep4.png?alt=media&token=e377e195-09c9-4d0d-8caa-56840d31cf10",
//         5:"https://firebasestorage.googleapis.com/v0/b/capstone-msrobot.appspot.com/o/Baked%20Fish%20with%20Dill%20Sour%20Cream%20Topping%2Fstep5.png?alt=media&token=af053e38-2660-42e8-8294-40b4e8e6884b",
//         6:"https://firebasestorage.googleapis.com/v0/b/capstone-msrobot.appspot.com/o/Baked%20Fish%20with%20Dill%20Sour%20Cream%20Topping%2Fstep6.png?alt=media&token=d3125ec8-9413-46cf-a748-53957420ece4"  
//       }
//     }),
//     database.ref('/recipesFinal').push({
//       name: "Baked Honey Bourbon Chicken Wings",
//       ingredients: [
//         "18-20 (about 4lbs) chicken wings",
//         "1 tbsp brown sugar",
//         "1/2 tbsp paprika",
//         "1/2 tbsp lemon pepper",
//         "1 tsp onion powder",
//         "1 tsp thyme",
//         "1 tsp salt",
//         "1/2 tsp black pepper",
//         "1/2 tsp cayenne pepper powder",
//         "1 tsp corn starch",
//         "1/4 cup honey",
//         "1/8 cup bourbon (I used Honey Bourbon)",
//         "Juice of 1/2 a lime or lemon",
        
//       ],
//       ingredientsList:["chicken wings", "brown sugar", "paprika", "lemon pepper", "onion powder", "thyme", "black pepper", "cayenne pepper powder", "corn starch", "honey", "bourbon", "lime", "lemon"],
//       time: "30",
//       steps: [
//         "Start by rinsing and cutting the chicken wings however you choose. (I like to keep just the drumlet and wing...throwing away the winglet as it has very little meat on it and tends to burn easily)",
//         "In a large mixing bowl measure out all the dry spices and ingredients (i.e- brown sugar, paprika, lemon pepper, onion powder, thyme, salt, black pepper, cayenne and corn starch and mix them all together.",
//         "Next mix in all the wet ingredients (honey, bourbon and lime/lemon juice) and stir well.",
//         "Add the chicken wings to the marinade and mix them around till they are all coated. (You can do this in a ziplock bag too). Allow the chicken to marinade in the fridge for a minimum of 30 minutes but preferably a few hours.",
//         "Pre-heat your oven to 400F and arrange the chicken on a raised rack (if you have one) over a foil lined baking sheet and pour the remaining marinade over the chicken. (If you don't have a raised rack...simply double line a baking sheet and place the chicken directly on it)",
//         "Bake the chicken wings for about 20-30 minutes (depending on your oven) turning them over half way through the cooking process, until they are golden brown with crispy burnt bits on it.",
//         "Serve the Honey Bourbon Chicken Wings hot with lime wedges and plenty of napkins!"
//       ],
//       equipment: [
//         "oven"
//       ],
//       equipmentList:["oven"],
//       imageURL: "https://picturetherecipe.com/wp-content/uploads/2015/02/Baked-Honey-Bourbon-Chicken-Wings-PictureTheRecipe-com.jpg",
//       originalURL: "https://picturetherecipe.com/recipes/baked-honey-bourbon-chicken-wings/",
//       stepsURL: ""
//     })


//   ]).then(() => {
//       console.log("recipe added to Firebase");
//       process.exit(0);
//     }).catch(error => {
//       console.error("Error adding recipe to Firebase", error);
//       process.exit(1);
//     });

//Get all contacts from Firebase
database.ref('/recipesFinal').once('value', recipe => {
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