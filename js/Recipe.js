var food =new XMLHttpRequest()


var allRecipes=[]
function getData(q) {
  food.open('GET',`https://forkify-api.herokuapp.com/api/search?&q=${q}`)
food.send()
food.addEventListener('readystatechange',function () {
    if(food.readyState==4){
        allRecipes = JSON.parse(food.response).recipes
        display() 
    }
})
}
getData('pizza')
function display() {
    var box= ''
  for (var i = 0; i < allRecipes.length; i++) {
      box+=`<div class="col-md-3">
      <div class="item text-center">
        <img class="w-100 mt-2" height="250"src=${allRecipes[i].image_url} alt="">
        <h3 class="color-main  py mt-3">${allRecipes[i].title}</h3>
        <p>${allRecipes[i].publisher}</p>
      </div>
    </div> `
      
  }  
  document.getElementById('recipesRow').innerHTML=box
}
 var searchInput =document.getElementById('searchInput')
 var searchBtn =document.getElementById('searchBtn')


searchBtn.addEventListener('click',function () {
     
     getData(searchInput.value)

})


























