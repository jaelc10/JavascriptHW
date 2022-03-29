let recipeOptions = ["Crockpot Chili", "Homemade Mac and Cheese", "Best Chocolate Chip Cookies"];

let recipeOptionValues = ["crockpotChili", "macAndCheese", "cookie"];

function readyJavaScript() {

  document.querySelector(".allAccordions").style.display = "none";
  document.querySelector("#infoChili").style.display="none";
  document.querySelector("#ingredientsChili").style.display="none";
  document.querySelector("#instructionsChili").style.display="none";
  document.querySelector("#infoMAC").style.display="none";
  document.querySelector("#ingredientsMAC").style.display="none";
  document.querySelector("#instructionsMAC").style.display="none";
  document.querySelector("#infoCookies").style.display="none";
  document.querySelector("#ingredientsCookies").style.display="none";
  document.querySelector("#instructionsCookies").style.display="none";
  document.querySelector("#infoName").style.display="none";
  document.querySelector("#infoNew").style.display="none";
  document.querySelector("#ingredientsNew").style.display="none";
  document.querySelector("#instructionsNew").style.display="none";
  document.querySelector("#addRecipeAccordion").style.display="block";

  document.querySelector("#chooseARecipe").onchange=function() {

    let recipeOptionValues = ["crockpotChili", "macAndCheese", "cookie"];

    let recipeValue = document.querySelector("#chooseARecipe").value;

    if (recipeValue == recipeOptionValues[0]) {
      document.querySelector(".allAccordions").style.display = "block";
      document.querySelector("#infoChili").style.display="block";
      document.querySelector("#ingredientsChili").style.display="block";
      document.querySelector("#instructionsChili").style.display="block";
      document.querySelector("#infoMAC").style.display="none";
      document.querySelector("#ingredientsMAC").style.display="none";
      document.querySelector("#instructionsMAC").style.display="none";
      document.querySelector("#infoCookies").style.display="none";
      document.querySelector("#ingredientsCookies").style.display="none";
      document.querySelector("#instructionsCookies").style.display="none";
      document.querySelector("#infoName").style.display="none";
      document.querySelector("#infoNew").style.display="none";
      document.querySelector("#ingredientsNew").style.display="none";
      document.querySelector("#instructionsNew").style.display="none";

    }

    else if (recipeValue == recipeOptionValues[1]) {
      document.querySelector(".allAccordions").style.display = "block";
      document.querySelector("#infoMAC").style.display="block";
      document.querySelector("#ingredientsMAC").style.display="block";
      document.querySelector("#instructionsMAC").style.display="block";
      document.querySelector("#infoChili").style.display="none";
      document.querySelector("#ingredientsChili").style.display="none";
      document.querySelector("#instructionsChili").style.display="none";
      document.querySelector("#infoCookies").style.display="none";
      document.querySelector("#ingredientsCookies").style.display="none";
      document.querySelector("#instructionsCookies").style.display="none";
      document.querySelector("#infoNew").style.display="none";
      document.querySelector("#ingredientsNew").style.display="none";
      document.querySelector("#instructionsNew").style.display="none";

    }

    else if (recipeValue == recipeOptionValues[2]) {
      document.querySelector(".allAccordions").style.display = "block";
      document.querySelector("#infoCookies").style.display="block";
      document.querySelector("#ingredientsCookies").style.display="block";
      document.querySelector("#instructionsCookies").style.display="block";
      document.querySelector("#infoChili").style.display="none";
      document.querySelector("#ingredientsChili").style.display="none";
      document.querySelector("#instructionsChili").style.display="none";
      document.querySelector("#infoMAC").style.display="none";
      document.querySelector("#ingredientsMAC").style.display="none";
      document.querySelector("#instructionsMAC").style.display="none";
      document.querySelector("#infoName").style.display="none";
      document.querySelector("#infoNew").style.display="none";
      document.querySelector("#ingredientsNew").style.display="none";
      document.querySelector("#instructionsNew").style.display="none";

    }

    else {
      document.querySelector(".allAccordions").style.display = "block";
      document.querySelector("#infoCookies").style.display="none";
      document.querySelector("#ingredientsCookies").style.display="none";
      document.querySelector("#instructionsCookies").style.display="none";
      document.querySelector("#infoChili").style.display="none";
      document.querySelector("#ingredientsChili").style.display="none";
      document.querySelector("#instructionsChili").style.display="none";
      document.querySelector("#infoMAC").style.display="none";
      document.querySelector("#ingredientsMAC").style.display="none";
      document.querySelector("#instructionsMAC").style.display="none";
      document.querySelector("#infoName").style.display="block";
      document.querySelector("#infoNew").style.display="block";
      document.querySelector("#ingredientsNew").style.display="block";
      document.querySelector("#instructionsNew").style.display="block";

    }


  }
}




//infoList += "<h1>" + listOfInfo.recipeName + "</h1>" + "<br>" + listOfInfo.recipeImage + "<br>" + "<p>Serves: </p>" + listOfInfo.recipeServes + "<br>" + "<p> Preparation Time: </p>" + listOfInfo.recipePrepNum + " " + listOfInfo.recipePrepMeasure + "<br>" + "<p>Cook Time: </p>" + listOfInfo.recipeCookNum + " " + listOfInfo.recipeCookMeasure + "<br>" + "<p>Difficulty: </p>" + listOfInfo.recipeDifficulty + "<br><br>";










function infoFunctionChili() {
  let listOfInfo = {
    recipeName: recipeOptions[0],
    recipeImage: "<img src = 'images/chili.jpg'>",
    recipeServes: 6, recipePrepNum: 25,
    recipePrepMeasure: "minutes",
    recipeCookNum: 6,
    recipeCookMeasure: "hours",
    recipeDifficulty: "average"
  };

  let i;
  let infoList = "";

  infoList += listOfInfo.recipeImage + "<h1>" + listOfInfo.recipeName + "</h1>" + "<p>Serves: " + listOfInfo.recipeServes + "</p>" + "<p> Preparation Time: " + listOfInfo.recipePrepNum + " " + listOfInfo.recipePrepMeasure + "</p>" + "<p>Cook Time: " + listOfInfo.recipeCookNum + " " + listOfInfo.recipeCookMeasure + "</p>" + "<p>Difficulty: " + listOfInfo.recipeDifficulty + "</p>" + "<br><br>";

  document.querySelector("#infoChili").innerHTML = infoList;
}

function infoFunctionMacAndCheese() {
  let listOfInfo = {
    recipeName: recipeOptions[1],
    recipeImage: "<img src = 'images/macaroni.jpg'>",
    recipeServes: 4,
    recipePrepNum: 20,
    recipePrepMeasure: "minutes",
    recipeCookNum: 30,
    recipeCookMeasure: "minutes",
    recipeDifficulty: "easy"
  };

  let i;
  let infoList = "";

  infoList += listOfInfo.recipeImage + "<h1>" + listOfInfo.recipeName + "</h1>" + "<p>Serves: " + listOfInfo.recipeServes + "</p>" + "<p> Preparation Time: " + listOfInfo.recipePrepNum + " " + listOfInfo.recipePrepMeasure + "</p>" + "<p>Cook Time: " + listOfInfo.recipeCookNum + " " + listOfInfo.recipeCookMeasure + "</p>" + "<p>Difficulty: " + listOfInfo.recipeDifficulty + "</p>" + "<br><br>";

  document.querySelector("#infoMAC").innerHTML = infoList;

}

function infoFunctionCookies() {

  let listOfInfo = {
    recipeName: recipeOptions[2],
    recipeImage: "<img src = 'images/cookies.jpg'>",
    recipeServes: 24,
    recipePrepNum: 20,
    recipePrepMeasure: "minutes",
    recipeCookNum: 10,
    recipeCookMeasure: "minutes",
    recipeDifficulty: "easy"
  };

  let i;
  let infoList = "";

  infoList += listOfInfo.recipeImage + "<h1>" + listOfInfo.recipeName + "</h1>" + "<p>Serves: " + listOfInfo.recipeServes + "</p>" + "<p> Preparation Time: " + listOfInfo.recipePrepNum + " " + listOfInfo.recipePrepMeasure + "</p>" + "<p>Cook Time: " + listOfInfo.recipeCookNum + " " + listOfInfo.recipeCookMeasure + "</p>" + "<p>Difficulty: " + listOfInfo.recipeDifficulty + "</p>" + "<br><br>";

  document.querySelector("#infoCookies").innerHTML = infoList;


}















function ingredientsFunctionChili() {
  let ingredient = {
    ingredientName:"Sugar",
    ingredientUnitOfMeasure: "tablespoons",
    ingredientQuantity: 2
  };

  //let listOfIngredients = [ingredient, ingredient, ingredient...];

  let listOfIngredients = [
    {ingredientName:"Cooking Oil", ingredientUnitOfMeasure: "tbsp", ingredientQuantity: 2},
    {ingredientName:"Onion", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
    {ingredientName:"Chopped Pepper", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
    {ingredientName:"Chili Powder", ingredientUnitOfMeasure: "tbsp", ingredientQuantity: 4},
    {ingredientName:"Hot Chili Powder (optional)", ingredientUnitOfMeasure: "tsp", ingredientQuantity: 1},
    {ingredientName:"Ground Beef or Chicken", ingredientUnitOfMeasure: "lb", ingredientQuantity: 1},
    {ingredientName:"Red Beans", ingredientUnitOfMeasure: "cans", ingredientQuantity: 2},
    {ingredientName:"Kidney Beans", ingredientUnitOfMeasure: "cans", ingredientQuantity: 2},
    {ingredientName:"Tomato Puree", ingredientUnitOfMeasure: "cans", ingredientQuantity: 2},
    {ingredientName:"Tomato Sauce", ingredientUnitOfMeasure: "cans", ingredientQuantity: 2},
    {ingredientName:"Shredded Cheese (optional)", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
    {ingredientName:"Sour Cream (optional)", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1/2}
  ];

  //document.getElementById("demo").innerHTML=listOfIngredients[0].ingredientName;
  //listOfIngredients.push(ingredient);
  let i;
  let ingredientList = "";

  for (i=0; i<listOfIngredients.length; i++) {
    ingredientList += listOfIngredients[i].ingredientQuantity + " " + listOfIngredients[i].ingredientUnitOfMeasure + " " + listOfIngredients[i].ingredientName + "<br>";
  }

  document.querySelector("#ingredientsChili").innerHTML = ingredientList;

}

function halfServingsChangeChili() {
  let listOfIngredients = [
    {ingredientName:"Cooking Oil", ingredientUnitOfMeasure: "tbsp", ingredientQuantity: 2},
    {ingredientName:"Onion", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
    {ingredientName:"Chopped Pepper", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
    {ingredientName:"Chili Powder", ingredientUnitOfMeasure: "tbsp", ingredientQuantity: 4},
    {ingredientName:"Hot Chili Powder (optional)", ingredientUnitOfMeasure: "tsp", ingredientQuantity: 1},
    {ingredientName:"Ground Beef or Chicken", ingredientUnitOfMeasure: "lb", ingredientQuantity: 1},
    {ingredientName:"Red Beans", ingredientUnitOfMeasure: "cans", ingredientQuantity: 2},
    {ingredientName:"Kidney Beans", ingredientUnitOfMeasure: "cans", ingredientQuantity: 2},
    {ingredientName:"Tomato Puree", ingredientUnitOfMeasure: "cans", ingredientQuantity: 2},
    {ingredientName:"Tomato Sauce", ingredientUnitOfMeasure: "cans", ingredientQuantity: 2},
    {ingredientName:"Shredded Cheese (optional)", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
    {ingredientName:"Sour Cream (optional)", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1/2}
  ];

  let i;
  let ingredientList = "";

  for (i=0; i<listOfIngredients.length; i++) {
    ingredientList += (listOfIngredients[i].ingredientQuantity/2) + " " + listOfIngredients[i].ingredientUnitOfMeasure + " " + listOfIngredients[i].ingredientName + "<br>";
  }

  document.querySelector("#ingredientsChili").innerHTML = ingredientList;

}

function doubleServingsChangeChili() {
  let listOfIngredients = [
    {ingredientName:"Cooking Oil", ingredientUnitOfMeasure: "tbsp", ingredientQuantity: 2},
    {ingredientName:"Onion", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
    {ingredientName:"Chopped Pepper", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
    {ingredientName:"Chili Powder", ingredientUnitOfMeasure: "tbsp", ingredientQuantity: 4},
    {ingredientName:"Hot Chili Powder (optional)", ingredientUnitOfMeasure: "tsp", ingredientQuantity: 1},
    {ingredientName:"Ground Beef or Chicken", ingredientUnitOfMeasure: "lb", ingredientQuantity: 1},
    {ingredientName:"Red Beans", ingredientUnitOfMeasure: "cans", ingredientQuantity: 2},
    {ingredientName:"Kidney Beans", ingredientUnitOfMeasure: "cans", ingredientQuantity: 2},
    {ingredientName:"Tomato Puree", ingredientUnitOfMeasure: "cans", ingredientQuantity: 2},
    {ingredientName:"Tomato Sauce", ingredientUnitOfMeasure: "cans", ingredientQuantity: 2},
    {ingredientName:"Shredded Cheese (optional)", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
    {ingredientName:"Sour Cream (optional)", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1/2}
  ];

  let i;
  let ingredientList = "";

  for (i=0; i<listOfIngredients.length; i++) {
    ingredientList += (listOfIngredients[i].ingredientQuantity*2) + " " + listOfIngredients[i].ingredientUnitOfMeasure + " " + listOfIngredients[i].ingredientName + "<br>";
  }

  document.querySelector("#ingredientsChili").innerHTML = ingredientList;

}

function ingredientsFunctionMacAndCheese() {
  let ingredient = {
    ingredientName:"Sugar",
    ingredientUnitOfMeasure: "tablespoons",
    ingredientQuantity: 2
  };

  let listOfIngredients = [
    {ingredientName:"Uncooked Elbow Macaroni", ingredientUnitOfMeasure: "oz", ingredientQuantity: 8},
    {ingredientName:"Shredded Sharp Cheddar Cheese", ingredientUnitOfMeasure: "cups", ingredientQuantity: 2},
    {ingredientName:"Grated Parmesan Cheese", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1/2},
    {ingredientName:"Milk", ingredientUnitOfMeasure: "cups", ingredientQuantity: 3},
    {ingredientName:"Butter", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1/4},
    {ingredientName:"All Purpose Flour", ingredientUnitOfMeasure: "tbsp", ingredientQuantity: 2.5},
    {ingredientName:"Butter", ingredientUnitOfMeasure: "tbsp", ingredientQuantity: 2},
    {ingredientName:"Bread Crumbs", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1/2},
    {ingredientName:"Paprika", ingredientUnitOfMeasure: "pinch", ingredientQuantity: 1}
  ];

  //listOfIngredients.push(ingredient);
  let i;
  let ingredientList = "";

  for (i=0; i<listOfIngredients.length; i++) {
    ingredientList += listOfIngredients[i].ingredientQuantity + " " + listOfIngredients[i].ingredientUnitOfMeasure + " " + listOfIngredients[i].ingredientName + "<br>";
  }

  document.querySelector("#ingredientsMAC").innerHTML = ingredientList;

}

function halfServingsChangeMacAndCheese() {
  let listOfIngredients = [
    {ingredientName:"Uncooked Elbow Macaroni", ingredientUnitOfMeasure: "oz", ingredientQuantity: 8},
    {ingredientName:"Shredded Sharp Cheddar Cheese", ingredientUnitOfMeasure: "cups", ingredientQuantity: 2},
    {ingredientName:"Grated Parmesan Cheese", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1/2},
    {ingredientName:"Milk", ingredientUnitOfMeasure: "cups", ingredientQuantity: 3},
    {ingredientName:"Butter", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1/4},
    {ingredientName:"All Purpose Flour", ingredientUnitOfMeasure: "tbsp", ingredientQuantity: 2.5},
    {ingredientName:"Butter", ingredientUnitOfMeasure: "tbsp", ingredientQuantity: 2},
    {ingredientName:"Bread Crumbs", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1/2},
    {ingredientName:"Paprika", ingredientUnitOfMeasure: "pinch", ingredientQuantity: 1}
  ];

  let i;
  let ingredientList = "";

  for (i=0; i<listOfIngredients.length; i++) {
    ingredientList += (listOfIngredients[i].ingredientQuantity/2) + " " + listOfIngredients[i].ingredientUnitOfMeasure + " " + listOfIngredients[i].ingredientName + "<br>";
  }

  document.querySelector("#ingredientsMAC").innerHTML = ingredientList;

}

function doubleServingsChangeMacAndCheese() {
  let listOfIngredients = [
    {ingredientName:"Uncooked Elbow Macaroni", ingredientUnitOfMeasure: "oz", ingredientQuantity: 8},
    {ingredientName:"Shredded Sharp Cheddar Cheese", ingredientUnitOfMeasure: "cups", ingredientQuantity: 2},
    {ingredientName:"Grated Parmesan Cheese", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1/2},
    {ingredientName:"Milk", ingredientUnitOfMeasure: "cups", ingredientQuantity: 3},
    {ingredientName:"Butter", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1/4},
    {ingredientName:"All Purpose Flour", ingredientUnitOfMeasure: "tbsp", ingredientQuantity: 2.5},
    {ingredientName:"Butter", ingredientUnitOfMeasure: "tbsp", ingredientQuantity: 2},
    {ingredientName:"Bread Crumbs", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1/2},
    {ingredientName:"Paprika", ingredientUnitOfMeasure: "pinch", ingredientQuantity: 1}
  ];

  let i;
  let ingredientList = "";

  for (i=0; i<listOfIngredients.length; i++) {
    ingredientList += (listOfIngredients[i].ingredientQuantity*2) + " " + listOfIngredients[i].ingredientUnitOfMeasure + " " + listOfIngredients[i].ingredientName + "<br>";
  }

  document.querySelector("#ingredientsMAC").innerHTML = ingredientList;

}

function ingredientsFunctionCookies() {
    let ingredient = {
      ingredientName:"Sugar",
      ingredientUnitOfMeasure: "tablespoons",
      ingredientQuantity: 2
    };

    let listOfIngredients = [
      {ingredientName:"Softened Butter", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
      {ingredientName:"White Sugar", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
      {ingredientName:"Packed Brown Sugar", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
      {ingredientName:"Large Eggs", ingredientUnitOfMeasure: "", ingredientQuantity: 2},
      {ingredientName:"Vanilla Extract", ingredientUnitOfMeasure: "tsp", ingredientQuantity: 2},
      {ingredientName:"Baking Soda", ingredientUnitOfMeasure: "tsp", ingredientQuantity: 1},
      {ingredientName:"All Purpose Four", ingredientUnitOfMeasure: "cups", ingredientQuantity: 3},
      {ingredientName:"Semisweet Chocolate Chips", ingredientUnitOfMeasure: "cups", ingredientQuantity: 2},
      {ingredientName:"Chopped Walnuts", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1}
    ];

    //listOfIngredients.push(ingredient);
    let i;
    let ingredientList = "";

    for (i=0; i<listOfIngredients.length; i++) {
      ingredientList += listOfIngredients[i].ingredientQuantity + " " + listOfIngredients[i].ingredientUnitOfMeasure + " " + listOfIngredients[i].ingredientName + "<br>";
    }

    document.querySelector("#ingredientsCookies").innerHTML = ingredientList;
}

function halfServingsChangeCookies() {
  let listOfIngredients = [
    {ingredientName:"Softened Butter", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
    {ingredientName:"White Sugar", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
    {ingredientName:"Packed Brown Sugar", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
    {ingredientName:"Large Eggs", ingredientUnitOfMeasure: "", ingredientQuantity: 2},
    {ingredientName:"Vanilla Extract", ingredientUnitOfMeasure: "tsp", ingredientQuantity: 2},
    {ingredientName:"Baking Soda", ingredientUnitOfMeasure: "tsp", ingredientQuantity: 1},
    {ingredientName:"All Purpose Four", ingredientUnitOfMeasure: "cups", ingredientQuantity: 3},
    {ingredientName:"Semisweet Chocolate Chips", ingredientUnitOfMeasure: "cups", ingredientQuantity: 2},
    {ingredientName:"Chopped Walnuts", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1}
  ];

  let i;
  let ingredientList = "";

  for (i=0; i<listOfIngredients.length; i++) {
    ingredientList += (listOfIngredients[i].ingredientQuantity/2) + " " + listOfIngredients[i].ingredientUnitOfMeasure + " " + listOfIngredients[i].ingredientName + "<br>";
  }

  document.querySelector("#ingredientsCookies").innerHTML = ingredientList;

}

function doubleServingsChangeCookies() {
  let listOfIngredients = [
    {ingredientName:"Softened Butter", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
    {ingredientName:"White Sugar", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
    {ingredientName:"Packed Brown Sugar", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
    {ingredientName:"Large Eggs", ingredientUnitOfMeasure: "", ingredientQuantity: 2},
    {ingredientName:"Vanilla Extract", ingredientUnitOfMeasure: "tsp", ingredientQuantity: 2},
    {ingredientName:"Baking Soda", ingredientUnitOfMeasure: "tsp", ingredientQuantity: 1},
    {ingredientName:"All Purpose Four", ingredientUnitOfMeasure: "cups", ingredientQuantity: 3},
    {ingredientName:"Semisweet Chocolate Chips", ingredientUnitOfMeasure: "cups", ingredientQuantity: 2},
    {ingredientName:"Chopped Walnuts", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1}
  ];

  let i;
  let ingredientList = "";

  for (i=0; i<listOfIngredients.length; i++) {
    ingredientList += (listOfIngredients[i].ingredientQuantity*2) + " " + listOfIngredients[i].ingredientUnitOfMeasure + " " + listOfIngredients[i].ingredientName + "<br>";
  }

  document.querySelector("#ingredientsCookies").innerHTML = ingredientList;

}














function instructionsFunctionChili() {
  let listOfInstructions = [

    {step: "Heat cooking oil in 2 quart skillet."},

    {step: "Saute onions and peppers for 5 minutes."},

    {step: "Add spices and stir for 30 seconds."},

    {step: "Add meat and cook until browned. Approximately 15 minutes."},

    {step: "Pour contents of skillet into 3 quart crock pot."},

    {step: "Rinse beans and place in crockpot."},

    {step: "Open and pour Tomato puree and sauce into crock pot."},

    {step: "Cover crockpot and cook on low for 6 hours."},

    {step: "Serve into individual bowls and top with sour cream and cheese."}
  ];

  let i;
  let instructionList = "";
  for (i=0; i<listOfInstructions.length; i++) {
    instructionList += (i+1) + ". " + listOfInstructions[i].step + "<br>";
  }

  document.querySelector("#instructionsChili").innerHTML = instructionList;

}



function instructionsFunctionMacAndCheese() {
  let listOfInstructions = [
    {step: "Cook macaroni according to the package directions. Drain."},
    {step: "In a saucepan, melt butter or margarine over medium heat. Stir in enough flour to make a roux."},
    {step: "Add milk to roux slowly, stirring constantly."},
    {step: "Stir in cheeses, and cook over low heat until cheese is melted and the sauce is a little thick."},
    {step: "Put macaroni in large casserole dish, and pour sauce over macaroni. Stir well."},
    {step: "Melt butter or margarine in a skillet over medium heat. Add breadcrumbs and brown. Spread over the macaroni and cheese to cover. Sprinkle with a little paprika."},
    {step: "Bake at 350 degrees F (175 degrees C) for 30 minutes. Serve."}
  ]

  let i;
  let instructionList = "";
  for (i=0; i<listOfInstructions.length; i++) {
    instructionList += (i+1) + ". " + listOfInstructions[i].step + "<br>";
  }

  document.querySelector("#instructionsMAC").innerHTML = instructionList;
}

function instructionsFunctionCookies() {
  let listOfInstructions = [
    {step: "Preheat oven to 350 degrees F (175 degrees C)."},
    {step: "Cream together the butter, white sugar, and brown sugar until smooth."},
    {step: "Beat in the eggs one at a time, then stir in the vanilla."},
    {step: "Dissolve baking soda in hot water. Add to batter along with salt."},
    {step: "Stir in flour, chocolate chips, and nuts."},
    {step: "Drop by large spoonfuls onto ungreased pans."},
    {step: "Bake for about 10 minutes in the preheated oven, or until edges are nicely browned."}
  ]

  let i;
  let instructionList = "";
  for (i=0; i<listOfInstructions.length; i++) {
    instructionList += (i+1) + ". " + listOfInstructions[i].step + "<br>";
  }

  document.querySelector("#instructionsCookies").innerHTML = instructionList;
}




function addFieldsIngredients(){
           let number = document.getElementById("ingredientNumber").value;
           let container = document.getElementById("containerIngredients");
           while (container.hasChildNodes()) {
               container.removeChild(container.lastChild);
           }
           for (i=0;i<number;i++){
               container.appendChild(document.createTextNode("Ingredient " + (i+1)));
               var amount = document.createElement("input");
               amount.type = "number";
               amount.placeholder = "2";
               amount.id = "ingredientAmount" + (i+1);

               var measure = document.createElement("input");
               measure.type = "text";
               measure.placeholder = "cups";
               measure.id = "ingredientMeasure" + (i+1);

               var input = document.createElement("input");
               input.type = "text";
               input.placeholder = "flour";
               input.id = "ingredientType" + (i+1);

               container.appendChild(amount);
               container.appendChild(measure);
               container.appendChild(input);
               container.appendChild(document.createElement("br"));
           }

       }

 function addFieldsInstructions(){
            let number = document.getElementById("instructionsNumber").value;
            let container = document.getElementById("containerInstructions");
            while (container.hasChildNodes()) {
                container.removeChild(container.lastChild);
            }
            for (i=0;i<number;i++){
                  container.appendChild(document.createTextNode("Instruction " + (i+1)));
                  var input = document.createElement("input");
                  input.type = "text";
                  input.id = "instruction" + (i+1);
                  container.appendChild(input);
                  container.appendChild(document.createElement("br"));
            }

  }



  function validateForm() {

      let a = document.forms["recipeForm"]["recipeName"].value;
      let b = document.forms["recipeForm"]["servings"].value;
      let c = document.forms["recipeForm"]["prepTime"].value;
      let d = document.forms["recipeForm"]["prepTimeMeasurement"].value;
      let e = document.forms["recipeForm"]["cookTime"].value;
      let f = document.forms["recipeForm"]["cookTimeMeasurement"].value;
      let g = document.forms["recipeForm"]["ingredientNumber"].value;
      let h = document.forms["recipeForm"]["instructionsNumber"].value;

      if (a == "") {
        alert("Recipe name must be filled out");
        location.reload();
      }


      else if (b == "") {
        alert("Servings must be filled out");
        location.reload();
      }


      else if (c == "") {
        alert("Prep Time must be filled out");
        location.reload();
      }


      else if (d == "") {
        alert("Prep Time Measurement must be filled out");
        location.reload();
      }


      else if (e == "") {
        alert("Cook Time must be filled out");
        location.reload();
      }


      else if (f == "") {
        alert("Cook Time Measurement must be filled out");
        location.reload();

      }


      else if (g == "") {
        alert("Number of Ingredients must be filled out");
        location.reload();

      }


      else if (h == "") {
        alert("Number of Instructions must be filled out");
        location.reload();
      }

      else {
        alert("Recipe Successfully Added!");
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }

}




function infoFunctionNew() {
  //let recipeName = document.getElementById(recipeName).value;
  //localStorage.setItem("recipeName", recipeName);
  //document.getElementById("lol").innerHTML = localStorage.getItem("recipeName");

  let recipeName = document.getElementById("recipeName").value;
  localStorage.setItem("recipeName", recipeName);

  let finalRecipeName = localStorage.getItem("recipeName");
  //document.getElementById("lol").innerHTML = finalRecipeName;

  let recipeImage = document.getElementById("recipeImage").value;
  localStorage.setItem("recipeImage", recipeImage);

  let finalRecipeImage = localStorage.getItem("recipeImage");
  //document.getElementById("lol").innerHTML = finalRecipeImage;

  let recipeServes = document.getElementById("servings").value;
  localStorage.setItem("recipeServes", recipeServes);

  let finalRecipeServes = localStorage.getItem("recipeServes");
  //document.getElementById("lol").innerHTML = finalRecipeServes;

  let prepTimeMeasurement = document.getElementById("prepTime").value;
  localStorage.setItem("recipePrepNum", prepTimeMeasurement);

  let finalRecipePrepTimeNumber = localStorage.getItem("recipePrepNum");
  //document.getElementById("lol").innerHTML = finalRecipePrepTimeNumber;

  let prepTimeMeasure = "";
  if (document.getElementById('prepTimeMinutes').checked) {
    prepTimeMeasure = document.getElementById('prepTimeMinutes').value;
  }
  else if (document.getElementById('prepTimeHours').checked) {
    prepTimeMeasure = document.getElementById('prepTimeHours').value;
  }

  localStorage.setItem("recipePrepTimeMeasure", prepTimeMeasure);

  let finalRecipePrepTimeMeasure = localStorage.getItem("recipePrepTimeMeasure");
  //document.getElementById("lol").innerHTML = finalRecipePrepTimeMeasure;

  let cookTimeNumber = document.getElementById("cookTime").value;
  localStorage.setItem("recipeCookNum", cookTimeNumber);

  let finalRecipeCookTimeNumber = localStorage.getItem("recipeCookNum");
  //document.getElementById("lol").innerHTML = finalRecipeCookTimeNumber;

  let cookTimeMeasure = "";
  if (document.getElementById('cookTimeMinutes').checked) {
    cookTimeMeasure = document.getElementById('cookTimeMinutes').value;
  }
  else if (document.getElementById('cookTimeHours').checked) {
    cookTimeMeasure = document.getElementById('cookTimeHours').value;
  }

  localStorage.setItem("recipeCookTimeMeasure", cookTimeMeasure);

  let finalRecipeCookTimeMeasure = localStorage.getItem("recipeCookTimeMeasure");
  //document.getElementById("lol").innerHTML = finalRecipeCookTimeMeasure;

  let selectedDifficulty = document.querySelector('#difficulty option:checked').value;
  localStorage.setItem("difficulty", selectedDifficulty);

  let finalRecipeDifficulty = localStorage.getItem("difficulty");
  //document.getElementById("lol").innerHTML = finalRecipeDifficulty;



let newRecipeName = localStorage.getItem("recipeName");
recipeOptions.push(newRecipeName);

let newRecipe = "newRecipe";
recipeOptionValues.push(newRecipe);

//alert(recipeOptions);

let listOfInfo = {
  recipeName: finalRecipeName,
  recipeImage: finalRecipeImage,
  recipeServes: finalRecipeServes,
  recipePrepNum: finalRecipePrepTimeNumber,
  recipePrepMeasure: finalRecipePrepTimeMeasure,
  recipeCookNum: finalRecipeCookTimeNumber,
  recipeCookMeasure: finalRecipeCookTimeMeasure,
  recipeDifficulty: finalRecipeDifficulty
};

localStorage.setItem("New Recipe Info", JSON.stringify(listOfInfo));
let info = localStorage.getItem("New Recipe Info");
}

function addInfoContent() {
  let info = localStorage.getItem("New Recipe Info");
  let parsedInfo = JSON.parse(info);


    let selectRecipe = document.getElementById("chooseARecipe");
    let addRecipe = document.createElement("option");
    addRecipe.text = parsedInfo.recipeName;
    selectRecipe.add(addRecipe);

    let infoList = "";
    infoList += "<h1>" + parsedInfo.recipeName + "</h1>" + "<p>Serves: " + parsedInfo.recipeServes + "</p>" + "<p> Preparation Time: " + parsedInfo.recipePrepNum + " " + parsedInfo.recipePrepMeasure + "</p>" + "<p>Cook Time: " + parsedInfo.recipeCookNum + " " + parsedInfo.recipeCookMeasure + "</p>" + "<p>Difficulty: " + parsedInfo.recipeDifficulty + "</p>" + "<br><br>";


    document.querySelector("#infoNew").innerHTML = infoList;


}


function ingredientsFunctionNew() {

  let numberOfIngredients = document.getElementById("ingredientNumber").value;

  let listOfIngredients = [];

  for (i=0; i<parseInt(numberOfIngredients); i++) {
    let ingredientName = document.getElementById("ingredientType" + (i+1)).value;
    let ingredientUnitOfMeasure = document.getElementById("ingredientMeasure" + (i+1)).value;
    let ingredientQuantity = document.getElementById("ingredientAmount" + (i+1)).value;

    let ingredient = {
      ingredientName: ingredientName,
      ingredientUnitOfMeasure: ingredientUnitOfMeasure,
      ingredientQuantity: ingredientQuantity
      };
    listOfIngredients.push(ingredient);
  }

  localStorage.setItem("List Of Ingredients", JSON.stringify(listOfIngredients));
  //let ingredients = localStorage.getItem("List Of Ingredients");

  //let i;
  //let ingredientList = "";

  //for (i=0; i<listOfIngredients.length; i++) {
  //  ingredientList += (ingredients[i].ingredientQuantity) + " " + ingredients[i].ingredientUnitOfMeasure + " " + ingredients[i].ingredientName + "<br>";
  //}

  //document.querySelector("#ingredientsNew").innerHTML = ingredientList;

}

function addIngredientsContent() {
  let ingredients = localStorage.getItem("List Of Ingredients");
  let parsedIngredients = JSON.parse(ingredients);
  //alert(ingredients);

    let i;
    let ingredientList = "";
    for (i=0; i<parseInt(parsedIngredients.length); i++) {
      ingredientList += (parsedIngredients[i].ingredientQuantity) + " " + parsedIngredients[i].ingredientUnitOfMeasure + " " + parsedIngredients[i].ingredientName + "<br>";
    }
    document.querySelector("#ingredientsNew").innerHTML = ingredientList;

}

function instructionsFunctionNew() {
  let numberOfInstructions = document.getElementById("instructionsNumber").value;

  let listOfInstructions = [];

  for (i=0; i<parseInt(numberOfInstructions); i++) {
    let instruction = document.getElementById("instruction" + (i+1)).value;

    let instructions = {
      step: instruction
    };
  listOfInstructions.push(instructions);
  }

  localStorage.setItem("List Of Instructions", JSON.stringify(listOfInstructions));

  //let instructions = localStorage.getItem("List Of Instructions");

  //let i;
  //let instructionList = "";
  //for (i=0; i<listOfInstructions.length; i++) {
  //  instructionList += (i+1) + ". " + instructions[i].step + "<br>";
  //}

  //document.querySelector("#instructionsNew").innerHTML = instructionList;

}

function addInstructionsContent() {
  let instructions = localStorage.getItem("List Of Instructions");
  let parsedInstructions = JSON.parse(instructions);
  //alert(parsedInstructions);

    let i;
    let instructionList = "";
    for (i=0; i<parseInt(parsedInstructions.length); i++) {
        instructionList += (i+1) + ". " + parsedInstructions[i].step + "<br>";
    }
    document.querySelector("#instructionsNew").innerHTML = instructionList;

}

function halfServingsChangeNew() {
  let ingredients = localStorage.getItem("List Of Ingredients");
  let parsedIngredients = JSON.parse(ingredients);
  //alert(ingredients);

    let i;
    let ingredientList = "";
    for (i=0; i<parseInt(parsedIngredients.length); i++) {
      ingredientList += (parsedIngredients[i].ingredientQuantity/2) + " " + parsedIngredients[i].ingredientUnitOfMeasure + " " + parsedIngredients[i].ingredientName + "<br>";
    }
    document.querySelector("#ingredientsNew").innerHTML = ingredientList;

}

function doubleServingsChangeNew() {
  let ingredients = localStorage.getItem("List Of Ingredients");
  let parsedIngredients = JSON.parse(ingredients);
  //alert(ingredients);

    let i;
    let ingredientList = "";
    for (i=0; i<parseInt(parsedIngredients.length); i++) {
      ingredientList += (parsedIngredients[i].ingredientQuantity*2) + " " + parsedIngredients[i].ingredientUnitOfMeasure + " " + parsedIngredients[i].ingredientName + "<br>";
    }
    document.querySelector("#ingredientsNew").innerHTML = ingredientList;

}

function upload() {
  let imgcanvas=document.getElementById("can");
  let fileinput = document.getElementById("recipeImage");
  let image = new SimpleImage(fileinput);
  image.drawTo(imgcanvas);
}