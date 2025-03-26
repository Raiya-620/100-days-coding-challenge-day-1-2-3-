const favorites =  document.querySelectorAll(".outline-fav");
// const solidFav = document.getElementById("fav");
const fav1 = document.getElementById("fav1");
const fav2 = document.getElementById("fav2");
const fav3 = document.getElementById("fav3");
const outline1 = document.getElementById("outline-fav1");
const outline2 = document.getElementById("outline-fav2");
const outline3 = document.getElementById("outline-fav3");
 
outline1.addEventListener('click', ()=>{
if(outline1.style.display !== "none"){
    fav1.style.display = "block";
    outline1.style.display = "none";
}
})
var fav;
var outlineFav;
function addToFavorites(outlineFav, fav){
    if(outlineFav.style.display !== "none"){
        fav.style.display = "block";
        outlineFav.style.display = "none";
    }

    if(fav.style.display !== "none"){
        fav.style.display = "none";
        outlineFav.style.display = "block";
    }

}



 addToFavorites(outline1, fav1);

console.log(favorites);
favorites.forEach(item => {

    item.addEventListener('click', ()=>{
      
     item.style.display = "block";
     
        
    })
  
})


//create a function called toggleFavorite icon
//check for the display
// toggle between the displays
