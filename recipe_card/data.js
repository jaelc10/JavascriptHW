<!doctype html>
/*tamera
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Rife&#39;s Recipes: Chitterlings</title>

  <link rel="stylesheet" type="text/css" href="http://tamerapeake.us.tempcloudsite.com/AdvJavascript/Recipes%20Project/recipeproject-layout.css"/>
  <link rel="stylesheet" type="text/css" href=""/>
  <link rel="stylesheet" type="text/css" href=""/>

  <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Nunito" />
  <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Aclonica" />

<script
  src="https://code.jquery.com/jquery-3.4.1.js"
  integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
  crossorigin="anonymous">
</script>

<style>
steakInfoFull: "<p><strong>Serves:</strong>6</p><p><strong>Preparation:</strong>2 Hours</p><p><strong>Cooking:</strong>8 minutes</p><p><strong>Difficulty:</strong>Easy</p>",


img {
    max-width:100%;
  }
  header {
    padding:10px;
  }
  
  body {
    width:auto;
    height:auto;
  }
  
  .topBackgroundColor {
    padding: 20px;  
  }
  
  
  .coloredLines {
    width:auto;
    height:30px;
  }
  
  .singleLines {
    width:auto;
    height:10px;
  }

//Header

  .logoSection {
  }
  
  img {
    max-width:100%;
  }
  
  img.thumbnail {
    width:40px;
    height:30px;
  }
  
  .logo-container {
    display:flex;
    justify-content:flex-end;
    align-items:center;
    padding:15px;
  }

  
//header end

//nav start
  
  nav { text-align:center;
    display:flex;
    justify-content: row;
  }
  
  nav select:first-of-type {
    
  }
  
  .RifesRecipes { 
    display:flex;
    justify-content: flex-start;
    width:50%;
    margin-right:30px;
  }
  
  nav form {
    display:flex;
    justify-content: flex-end;
  }
  .search {
    max-width: 20px;
    max-height:19px;
  }
  
  nav input {
    text-align:center;
    margin-left:1px;
  }
  
  #browseRecipes {
    margin-right:2px;
  }

//Nav end
//Recipe intro
  
  section:first-of-type {
    display:flex;
    flex-direction:row;
  }
  
  section:first-of-type header {
    display:flex;
    justify-content:center;
  }
  
  section:first-of-type div:first-of-type {
    display:flex;
    justify-content:space-around;
    padding-bottom:20px;
  }
  
  section:first-of-type img {
    width:40%;
  }
  
  section:first-of-type span {
    width:40%;
  }
  
  #difficulty {
    border: none;
    width:75%;
  }
//Recipe Intro End
//Other Recipes Begin

  //weird system glitch removes black background
  //if I remove this section
  
  section:nth-of-type(2) img { 
  } 
  
  .chooseOther img {
    border:2px solid white;
  }
  
  section:nth-of-type(2) div {
    display:flex;
    justify-content:space-around;
    padding:15px;
  }
  
  
//other Recipes End
//Ingredients Begin
  .hideIngredients {
    display:flex;
  }
  
  .hideIngredients p {
    display:flex;
    justify-content:center;
  }
  #ingredientsBox {
    display:flex;
  }
  
  #ingredientsBox div {
    display:flex;
  }
  
  .ingredientsContainer {
    display:flex;
  }
//quantity
  
  .quantity form {
    display:flex;
    flex-direction: column;
    justify-content:flex-end;
  }
  
  .quantity div {
    padding:10px;
  }
  
  .ingredientsContainer {
    display:flex;
    justify-content:space-between;
    padding:20px;
  }
  
//Ingredients End
//Instructions Start
  .hideInstructions {
    display:flex;
  }
  
  .hideInstructions p {
    display:flex;
    justify-content: center;
  }
  
  .instructions div:nth-of-type(2){
    display:flex;
    flex-direction:row;
  }
  
  .instructions {
  }
//Instructions end
//Message Us Start
  section:nth-of-type(5) {
  
  }
  
  #messageUs {
    width:100%;
    height:70px;
  }
  
  #submit {
    border:none;
    height:20px;
  }
  .messageSection {
    display:flex;
    justify-content:center;
  }
  
  .messageSection div:first-of-type {
    padding:20px;
  }
  
  .messageSection div:nth-of-type(2) {
    display:flex;
    flex-direction:row;
  }
  
  .messageSection {
  }
//Message Us End





















//MediaQueries
@media only screen and (min-device-width : 850px) and (max-device-width : 1000px) {
  //WebPage
  img {
    max-width:100%;
  }
  header {
    font-size: 30px;
    padding:10px;
  }

  body {
    width:auto;
    height:auto;
    font-size:25px;
    font-family: Nunito, Ariel, sans-serif;
  }

  .topBackgroundColor {
    padding: 20px;
  }

  .topBackgroundColor {
    background-image: linear-gradient(177deg, yellow, yellow 38%, red 38%, red 40%, black 40%, black 42%, green 42%);
  }

  .coloredLines {
    width:auto;
    height:30px;
    background-image: linear-gradient(green, green 40%, yellow 40%, yellow 50%, black 50%, black 70%, red 70%, red 90%, green 90%);
  }

  .singleLines {
    width:auto;
    height:10px;
    background-image: linear-gradient(white, white 30%, yellow 30%, yellow 50%, black 50%, black 70%, red 70%, red 90%, white 90%);
  }

  header {
    font-weight:bold;
  }
//Header

  .logoSection {
  }

  img {
    max-width:100%;
  }

  img.thumbnail {
    width:40px;
    height:30px;
  }

  .logo-container {
    display:flex;
    justify-content:flex-end;
    align-items:center;
    padding:15px;
    font-size: 20px;
  }


//header end

//nav start

  nav { text-align:center;
    display:flex;
    justify-content: row;
  }

  nav select:first-of-type {

  }

  .RifesRecipes {
    display:flex;
    font-size:35px;
    font-family: Aclonica;
    font-weight: bold;
    justify-content: flex-start;
    width:50%;
    color:black;
    text-shadow: 1px 2px 2px #ad111c;
  }

  nav form {
    display:flex;
    justify-content: flex-end;
  }
  .search {
    max-width: 20px;
    max-height:19px;
  }

  nav input {
    font-size:20px;
    text-align:center;
    margin-left:1px;
  }

  nav button {
    filter: invert(100%);
  }

  #browseRecipes {
    font-size:20px;
    margin-right:2px;
  }

//Nav end
//Recipe intro

  section:first-of-type {
    display:flex;
    flex-direction:row;
  }

  section:first-of-type header {
    display:flex;
    justify-content:center;
    font-size:30px;
    text-decoration: underline;
  }

  section:first-of-type div:first-of-type {
    display:flex;
    justify-content:space-around;
    padding-bottom:20px;
  }

  section:first-of-type img {
    width:40%;
    border: 2px solid black;
  }

  section:first-of-type span {
    width:40%;
  }

  #difficulty {
    border: none;
    width:75%;
  }
//Recipe Intro End
//Other Recipes Begin

  //weird system glitch removes black background
  //if I remove this section

  section:nth-of-type(2) img {
  }

  .chooseOther img {
    border:2px solid white;
  }

  section:nth-of-type(2) div {
    display:flex;
    justify-content:space-around;
    padding:15px;
  }

  section:nth-of-type(2) img:hover {
    opacity:20%;
  }

  section:nth-of-type(2) {
    color:white;
    background-color:#363535;
  }

//other Recipes End
//Ingredients Begin
  .hideIngredients {
    display:flex;
  }

  .hideIngredients p {
    display:flex;
    justify-content:center;
  }
  #ingredientsBox {
    display:flex;
  }

  #ingredientsBox div {
    display:flex;
  }

  .ingredientsContainer {
    display:flex;
  }
//quantity

  .quantity form {
    display:flex;
    flex-direction: column;
    justify-content:flex-end;
  }

  .quantity div {
    padding:10px;
    background-color:#363535;
    color:white;
  }

  .ingredientsContainer {
    display:flex;
    justify-content:space-between;
    padding:20px;
  }

//Ingredients End
//Instructions Start
  .hideInstructions {
    display:flex;
  }

  .hideInstructions p {
    display:flex;
    justify-content: center;
  }

  .instructions div:nth-of-type(2){
    display:flex;
    flex-direction:row;
  }

  .instructions {
  }
//Instructions end
//Message Us Start
  section:nth-of-type(5) {

  }

  #messageUs {
    width:100%;
    height:70px;
    font-size:16px;
  }

  #submit {
    color:white;
    background-color:green;
    border:none;
    height:20px;
  }
  .messageSection {
    display:flex;
    justify-content:center;
  }

  .messageSection div:first-of-type {
    background-color:#363535;
    padding:20px;
    color:white;
  }

  .messageSection div:nth-of-type(2) {
    display:flex;
    flex-direction:row;
  }

  .messageSection {
  }
//Message Us End
}
//mediaQueries End
</style>









<script>

//Browse Recipes Dropdown-nav

//Intro-servings linked to Quantity


//Other recipes-links to other pages


//Quantity

//var servings = [normal, half, double];

var numOne= 1;
var numTwo= 2;

//querySelectorALL is not working

var numThree= 1;
var numFour= 1;
var numFive= 1;
var numSix= 1;
var numSeven= 2;

var peopleServed;
var cookT;
var prepT;
var waterQ;

function normalServings() {
  document.querySelectorAll(".ingredientsOne").innerHTML = numOne;
  document.querySelectorAll(".ingredientsTwo").innerHTML = numTwo;
  document.querySelector(".ingredientsThree").innerHTML = numThree;
  document.querySelector(".ingredientsFour").innerHTML = numFour;
  document.querySelector(".ingredientsFive").innerHTML = numFive;
  document.querySelector(".ingredientsSix").innerHTML = numSix;
  document.querySelector(".ingredientsSeven").innerHTML = numSeven;
  peopleServed=" " + "3-4 servings";
  cookT=" " + "12+ hours";
  prepT=" " + "2-3 hours";
  waterQ="6";
  document.querySelector(".servingNum").innerHTML = peopleServed;
  document.querySelector(".cookTime").innerHTML = cookT;
  document.querySelector(".prepTime").innerHTML = prepT;
  document.querySelector(".quarts").innerHTML = waterQ;
}


function halfServings() {
  document.querySelector(".ingredientsOne").innerHTML = numOne/2;
  document.querySelector(".ingredientsTwo").innerHTML = numTwo/2;
  document.querySelector(".ingredientsThree").innerHTML = numThree/2;
  document.querySelector(".ingredientsFour").innerHTML = numFour/2;
  document.querySelector(".ingredientsFive").innerHTML = numFive/2;
  document.querySelector(".ingredientsSix").innerHTML = numSix/2;
  document.querySelector(".ingredientsSeven").innerHTML = numSeven/2;
  peopleServed=" " + "1-2 servings";
  cookT=" " + "12 hours";
  prepT=" " + "1-2 hours";
  waterQ="4"
  document.querySelector(".servingNum").innerHTML = peopleServed;
  document.querySelector(".cookTime").innerHTML = cookT;
  document.querySelector(".prepTime").innerHTML = prepT;
  document.querySelector(".quarts").innerHTML = waterQ;
}

function doubleServings() {
  document.querySelector(".ingredientsOne").innerHTML = numOne*2;
  document.querySelector(".ingredientsTwo").innerHTML = numTwo*2;
  document.querySelector(".ingredientsThree").innerHTML = numThree*2;
  document.querySelector(".ingredientsFour").innerHTML = numFour*2;
  document.querySelector(".ingredientsFive").innerHTML = numFive*2;
  document.querySelector(".ingredientsSix").innerHTML = numSix*2;
  document.querySelector(".ingredientsSeven").innerHTML = numSeven*2;
  peopleServed=" " + "6-8 servings";
  cookT=" " + "12+ hours";
  prepT=" " + "3-4 hours";
  waterQ="8"
  document.querySelector(".servingNum").innerHTML = peopleServed;
  document.querySelector(".cookTime").innerHTML = cookT;
  document.querySelector(".prepTime").innerHTML = prepT;
  document.querySelector(".quarts").innerHTML = waterQ;
}

function quaterServings() {
  document.querySelector(".ingredientsOne").innerHTML = numOne/4;
  document.querySelector(".ingredientsTwo").innerHTML = numTwo/4;
  document.querySelector(".ingredientsThree").innerHTML = numThree/4;
  document.querySelector(".ingredientsFour").innerHTML = numFour/4;
  document.querySelector(".ingredientsFive").innerHTML = numFive/4;
  document.querySelector(".ingredientsSix").innerHTML = numSix/4;
  document.querySelector(".ingredientsSeven").innerHTML = numSeven/4;
  peopleServed=" " + "1 servings";
  cookT=" " + "8 hours";
  prepT=" " + "1 hour";
  waterQ="4"
  document.querySelector(".servingNum").innerHTML = peopleServed;
  document.querySelector(".cookTime").innerHTML = cookT;
  document.querySelector(".prepTime").innerHTML = prepT;
  document.querySelector(".quarts").innerHTML = waterQ;
}


function tripServings() {
  document.querySelector(".ingredientsOne").innerHTML = numOne*3;
  document.querySelector(".ingredientsTwo").innerHTML = numTwo*3;
  document.querySelector(".ingredientsThree").innerHTML = numThree*3;
  document.querySelector(".ingredientsFour").innerHTML = numFour*3;
  document.querySelector(".ingredientsFive").innerHTML = numFive*3;
  document.querySelector(".ingredientsSix").innerHTML = numSix*3;
  document.querySelector(".ingredientsSeven").innerHTML = numSeven*3;
  peopleServed=" " + "9-12 servings";
  cookT=" " + "16 hours";
  prepT=" " + "3-4 hours";
  waterQ="8"
  document.querySelector(".servingNum").innerHTML = peopleServed;
  document.querySelector(".cookTime").innerHTML = cookT;
  document.querySelector(".prepTime").innerHTML = prepT;
  document.querySelector(".quarts").innerHTML = waterQ;
}


function quadServings() {
  document.querySelector(".ingredientsOne").innerHTML = numOne*4;
  document.querySelector(".ingredientsTwo").innerHTML = numTwo*4;
  document.querySelector(".ingredientsThree").innerHTML = numThree*4;
  document.querySelector(".ingredientsFour").innerHTML = numFour*4;
  document.querySelector(".ingredientsFive").innerHTML = numFive*4;
  document.querySelector(".ingredientsSix").innerHTML = numSix*4;
  document.querySelector(".ingredientsSeven").innerHTML = numSeven*4;
  peopleServed=" " + "12-16 servings";
  cookT=" " + "16 hours";
  prepT=" " + "3-4 hours";
  waterQ="10"
  document.querySelector(".servingNum").innerHTML = peopleServed;
  document.querySelector(".cookTime").innerHTML = cookT;
  document.querySelector(".prepTime").innerHTML = prepT;
  document.querySelector(".quarts").innerHTML = waterQ;
}

var quantityValue;
function quantityOptions() {
  var testQuantity= document.quantityForm.setSizes;
  var n;
  for(n=0; n<testQuantity.length; n++) {

    if(testQuantity[n].checked) {
      quantityValue= testQuantity[n].value;
      results();
    }
  }
}

function results() {
  if(quantityValue=="normal") {
    normalServings();
  }

  else {
    if(quantityValue=="half") {
      halfServings();
    }

    else {
      doubleServings();
    }

  }
}





//JQuery

//dropdown quantity
  var quantitySizes= ["Quater", "Triple", "Quadruple"];
  $(document).ready(function(){
    var i=0;

    var secondSizes;
    while(i < 3)
       {
        $('#chooseQuantity').append("<option value='" + "'>" + quantitySizes[i] + "</option>");
        i++;
      };

      $('#chooseQuantity').change(function() {


       //var ssecondSizes is not capturing the dropdown list values and connecting with the array
       //keep if/else statement the same. fix secondSizes
      var x = quantitySizes[i].value;

       if(quantitySizes[i]==x) {
          quaterServings();
          alert("quater");
       }

        else {
          if(quantitySizes[i]==x) {
            tripServings();
            alert("trip");
          }

          else {
            quadServings();
            alert("quad");
          }
        }
       });


   $(".ingredientsContainer").hide();

//Hide/Show Ingredients
    $(".hideIngredients").click(function(){
      $(".ingredientsContainer").toggle();
    });

//Hide/Show Instructions

  $(".instructions").hide();

    $(".hideInstructions").click(function(){
      $(".instructions").toggle();
    });

  });


</script>

</head>
<body onload="normalServings();">
  <div class="topBackgroundColor">
    <div>
      <p class="logo-container">Follow us on:
        <img src="http://tamerapeake.us.tempcloudsite.com/logos/facebook_logos_PNG19751.png" class="thumbnail" alt="facebook logo">
        <img src="http://tamerapeake.us.tempcloudsite.com/logos/twitter-transparent.png" class="thumbnail"  alt="twitter logo">
        <img src="http://tamerapeake.us.tempcloudsite.com/logos/instagram-logo-png-transparent-0.png" class="thumbnail" alt="instagram logo">
      </p>

    </div>
    <nav>
      <form method="post" action="">
        <label for="browse" class="RifesRecipes">Rife&#39;s Recipes</label>
        <select id="browseRecipes" name="browseRecipes" onclick="browseDropDown()">
          <option value="Browse">Browse Recipes</option>
          <option value=""><a href="">Fried Cabbage</a></option>
          <option value=""><a href="">Grandpa&#39;s Beet Stew</a></option>
          <option value=""><a href="">Chitlins</a></option>
          <option value=""><a href="">Blackeyed Peas & Ham Hocks</a></option>
        </select>
        <input type="text" name="searchRecipes" placeholder="Look for a Recipe">
          <button type="submit" value="">
            <img src="http://tamerapeake.us.tempcloudsite.com/logos/search.png" class="search" alt="search symbol"/>
          </button>
        <input type="text" name="ingredients" placeholder="Ingredients">
          <button type="submit" value="">
            <img src="http://tamerapeake.us.tempcloudsite.com/logos/search.png" class="search" alt="search symbol"/>
          </button>
      </form>
    </nav>
  </div>
  <div class="coloredLines"></div>
  <section id="introBackground">
    <header>Chitlins</header>
    <div>
      <img src="http://tamerapeake.us.tempcloudsite.com/AdvJavascript/Recipes%20Project/images/chittlins.jpg" alt="image of chitterlings">

      <span>
        <p>Servings:<span class="servingNum"></span></p>
        <p>Average Cook Time:<span class="cookTime"></span></p>
        <p>Prep Time:<span class="prepTime"></span></p>
        <p>Difficulty:<br><img src="http://tamerapeake.us.tempcloudsite.com/logos/hard.jpg" id="difficulty" alt="level hard difficulty"/></p>
      </span>
    </div>
  </section>
  <div class="coloredLines"></div>
  <section>
    <header>Not Feeling It? Choose a Different Recipe:</header>
      <div class="chooseOther">
        <img src="http://tamerapeake.us.tempcloudsite.com/AdvJavascript/Recipes%20Project/images/download.jpg" alt="image of fried cabbage">
        <img src="http://tamerapeake.us.tempcloudsite.com/AdvJavascript/Recipes%20Project/images/beef%20stew.jpg" alt="image of Grandpa&#39;s Beet Stew">
        <img src="http://tamerapeake.us.tempcloudsite.com/AdvJavascript/Recipes%20Project/images/hamhockandpeas.jpg" alt="image of blackeyed peas and ham hocks">
      </div>
  </section>
  <div class="coloredLines"></div>
  <div class="hideIngredients">
    <p>
      <button type="button" value="">
        <p>Click to show Ingredients</p>
      </button>
    </p><!--toggle to hide-->
  </div>
  <div class="coloredLines"></div>
  <header>Ingredients</header>
  <div class="singleLines"></div>

  <section class="ingredientsContainer">
    <div id="ingredientsBox">
          <div>
            <ul>
              <li><span class="ingredientsOne"></span> onion-chopped</li>
              <li><span class="ingredientsOne"></span> gal. frozen chitterlings</li>
              <li><span class="ingredientsTwo"></span> tsp salt</li>
              <li><span class="ingredientsOne"></span> tsp. crushed red pepper flakes</li>
              <li><span class="ingredientsOne"></span> tsp. minced garlic</li>
              <li><span class="ingredientsOne"></span> oz. <a href="https://www.google.com/search?q=lipton+recipe+secrets+onion&rlz=1C1CHBF_enUS759US760&oq=lipt&aqs=chrome.0.69i59l3j69i57j69i59j69i60l3.1301j0j4&sourceid=chrome&ie=UTF-8">Lipton Recipe Secrets Onion Seasoning</a></li>
              <li><span class="ingredientsTwo"></span> potatoes-sliced</li>
            </ul>

            <!--
            <ul>
              <li></li>
            </ul>
            -->
          </div>
    </div>
    <div class="quantity">
      <div>
        <p>Change Serving Size</p>
          <form name="quantityForm" id="servingSizes" onclick="quantityOptions()">
            <label for="serving sizes">Serving Size</label>
                <div>
                  <input type="radio" name="setSizes" value="normal">Normal (3-4 Servings)</input>
                </div>
                <div>
                  <input type="radio" name="setSizes" value="double">Double (6-8 Servings)</input>
                </div>
                <div>
                  <input type="radio" name="setSizes" value="half">Half (1-2 Servings)</input>
                </div>
                <div>
                  <lable for="other">Other: </label>
                  <select id="chooseQuantity">
                    <option value="choose">Choose</option>
                    <option value="quarter">Quarter</option>
                    <option value="trip">Triple</option>
                    <option value="quad">Quadruple</option>
                  </select>
                </div>
          </form>
      </div>
    </div>
  </section>
  <div class="coloredLines"></div>
  <div class="hideInstructions">
    <p>
      <button type="button" id="instructionsButton" value="">
        <p>Click to show Instructions</p>
      </button>
    </p><!--toggle to hide-->
  </div>
  <div class="coloredLines"></div>
  <section>
    <header>Instructions</header>
    <div class="instructions">
        <div class="singleLines"></div>
        <div>
          <div>

            <ol>
              <li>Soak the chitlins over night in salt water.</li>
                <p>*Be very careful to clean your hands and kitchen when handiling chitlins.</p>
              <li>Using a knife, clean the chitlins by pulling the fat and foreign matter off.</li>
                <p>*Do this in the kitchen sink, if you can</p>
              <li>Precook chitlins in a large <span class="quarts"></span> quart pot for 1 hour</li>
              <li>Pour out water (NOT in sink-the fat can clog the drain)</li>
              <li>Rinse and refil the pot with water. Add chitlins</li>
              <li>Bring water to a boil. Add onion, salt, red pepper, potatoes, Liptons Onion Seasoning, and garlic</li>
              <li>Turn down the heat and simmer for 3-4 hours or until tender</li>
              <li>Season to taste</li>
            </ol>
          </div>
        </div>
    </div>
  </section>
  <div class="coloredLines"></div>
  <section>
    <header>How did it turn out?</header>

    <div class="singleLines"></div>

    <div class="messageSection">
      <form method="post" action="">
        <div>
          <label for="message Us"></label>
          <input type="text" name="message" id="messageUs" placeholder="Message us...">
          <div>
            <label for="name">Name:</label>
            <input type="text" name="name" value="">

            <label for="email">Email:</label>
            <input type="text" name="email" value="">

            <button type="submit" id="submit" value="">Submit</button>

          </div>
        </div>
      </form>
    </div>
  </section>
</body>
</html>