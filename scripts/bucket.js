// On clicking remove button the item should be removed from DOM as well as localstorage.
var getData= JSON.parse(localStorage.getItem("coffee")) || [];
displayData(getData);

function displayData(getData)
{
  getData.forEach(function (elem,index) {
    let box = document.createElement("div");
    let type = document.createElement("h1");
    let image = document.createElement("img");
    let price = document.createElement("p");
    let button = document.createElement("button");

    box.setAttribute("class", "box");
    image.setAttribute("class", "cimg");
    type.innerText = elem.type;
    image.src = elem.image;
    price.innerText = "₹ " + elem.price;
    button.innerText = "Remove";
    button.setAttribute("id", "remove_coffee")
    button.addEventListener("click", remove)
    box.append(image, type, price,button)
    document.getElementById("bucket").append(box);

    function remove() {
      let getData = JSON.parse(localStorage.getItem("coffee")) || [];

      getData.splice(elem,index)
      
      localStorage.setItem("coffee",JSON.stringify(getData));
      window.location.reload();
      
    }


  });



}
