// Part 1

// The code given
// function exampleFunction() {
//   console.log("This is a poorly written function");
//   var x = 5;
//   if (x > 3) {
//     document.write("x is greater than 3");
//   } else {
//     document.write("x is not greater than 3");
//   }
// }

// rewrite code
function exampleFunction() {
  let x = 5;
  let message = x > 3 ? "x is greater than 3" : "x is not greater than 3";
  console.log(message);
  //   document.write(message);
}

exampleFunction();

// part 2
function myFunction() {
  var nav = document.getElementById("myTopNav");
  if (nav.className === "top-nav") {
    nav.className += " responsive";
  } else {
    nav.className = "top-nav";
  }
}

// part 3
(async () => {
  try {
    const endpoint = "https://dummyjson.com/products";
    const option = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const req = await fetch(endpoint, option);
    const { products } = await req.json();

    console.log(products);

    let data = "";

    products.forEach(
      ({ id, brand, discountPercentage, price, thumbnail, title }) => {
        data += `
        <div class="product_container">
            <div class="product_con">
                <img src="${thumbnail}"/>
                <h6>${brand}</h6>
                <h4>${title}</h4>
                <div class="price">
                    <h3>$${price.toLocaleString()}</h3>
                    <h3 class="discount">${discountPercentage}%</h3>
                </div>
            </div>
        </div>`;
      }
    );
    document.getElementById("product").innerHTML = data;
    document.getElementById("loading").style.display = "none";
  } catch (error) {
    document.getElementById("loading").innerText = "Something went wrong";
  }
})();
