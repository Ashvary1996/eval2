// Add the coffee to local storage with key "coffee"

async function get() {
    try {
      let url = "https://masai-mock-api.herokuapp.com/coffee/menu";
      let res = await fetch(url);
      let data = await res.json();

      display(data.menu.data);
      // console.log(data.menu.data);

    } catch (error) {
      console.log("error", error);
    }
  }



  function display(data) {
    data.forEach(function (elem) {
      let box = document.createElement("div");
      let type = document.createElement("h1");
      let image = document.createElement("img");
      let price = document.createElement("p");
      let button = document.createElement("button");

      box.setAttribute("class", "box");
      image.setAttribute("class", "cimg");
      type.innerText = elem.title;
      image.src = elem.image;
      price.innerText = "₹ " + elem.price;
      button.innerText = "Add to bucket";
      button.setAttribute("id", "add_to_bucket")
      button.addEventListener("click", add)
      box.append(image, type, price, button)
      document.getElementById("menu").append(box);

      function add() {
        let i = 0;
        i++;
        document.getElementById("coffee_count").innerText = i;

        var coffeeData = JSON.parse(localStorage.getItem("coffee")) || [];
        var datar = [];
        datar.push(elem.title, elem.image, elem.price)
        coffeeData.push(datar)
        localStorage.setItem("coffee", JSON.stringify(coffeeData));
        console.log("trigger");
        console.log(coffeeData)
      }


    });
  }

  get();