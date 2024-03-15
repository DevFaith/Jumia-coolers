var coolers1 = {
    Image: "/images/image8.jpg",
    icoolers: "image",
    name: "Samsung SE",
    discountedPrice: 30000,
    originalPrice: 38500,
    itemId: "I001"
  };
  
  var coolers2 = {
    Image: "/images/image3.jpg",
    icoolers: "image2",
    name: "GE 10",
    discountedPrice: 55000,
    originalPrice: 60500,
    itemId: "I002"
  };
  
  var coolers3 = {
    Image: "/images/image9.jpg",
    icoolers: "image3",
    name: "Lg 11",
    discountedPrice: 60000,
    originalPrice: 70500,
    itemId: "I003"
  };
  
  var coolers4 = {
    Image: "/images/image6.jpg",
    icoolers: "image4",
    name: "Whirlpool 12",
    discountedPrice: 70000,
    originalPrice: 75000,
    itemId: "I004"
  };
  
  document.getElementById("image").style.height="280px" ;
  // document.getElementById("image").style.width="180px" ;

  var selectId = decodeURIComponent(window.location.search);
  
  var selectedItem = selectId.substring(1);
  
  // console.log(selectedItem);
  document.getElementById("display").innerText = selectedItem;
  
  if (selectedItem == coolers1.itemId) {
    document.getElementById("image").src = coolers1.Image;
    document.getElementById("name1").innerText = coolers1.name;
    document.getElementById("discountedPrice1").innerText =
      coolers1.discountedPrice;
    document.getElementById("originalPrice1").innerText = coolers1.originalPrice;
  
    var cost = coolers1.discountedPrice;
    qty(cost);
  }
  
   else if (selectedItem == coolers2.itemId) {
    document.getElementById("image").src = coolers2.Image;
    document.getElementById("name1").innerText = coolers2.name;
    document.getElementById("discountedPrice1").innerText =
      coolers2.discountedPrice;
    document.getElementById("originalPrice1").innerText = coolers2.originalPrice;
  
    var cost = coolers2.discountedPrice;
    qty(cost);
  } 
  
  else if (selectedItem == coolers3.itemId) {
    document.getElementById("image").src = coolers3.Image;
    document.getElementById("name1").innerText = coolers3.name;
    document.getElementById("discountedPrice1").innerText =
      coolers3.discountedPrice;
    document.getElementById("originalPrice1").innerText = coolers3.originalPrice;
  
    var cost = coolers3.discountedPrice;
    qty(cost);
  }
  
  else if (selectedItem == coolers4.itemId) {
    document.getElementById("image").src = coolers4.Image;
    document.getElementById("name1").innerText = coolers4.name;
    document.getElementById("discountedPrice1").innerText =
      coolers4.discountedPrice;
    document.getElementById("originalPrice1").innerText = coolers4.originalPrice;
  
    var cost = coolers4.discountedPrice;
    qty(cost);
  }
  
  function qty(cost) {
    document.getElementById("qty").onkeyup = function () {
      var amount = parseInt(cost);
      var quantity = parseInt(document.getElementById("qty").value);
  
      if (quantity > 1) {
        var total = quantity * amount;
        document.getElementById("total").innerText = "Total: KES " + total;
        userLocation(total);
      } 
      else {
        var total = 1 * amount;
        document.getElementById("total").innerText = "Total: KES " + total;
  
        userLocation(total);
      }
    };
  }
  
  function userLocation(total) {
    document.getElementById("Location").onchange = function () {
      var Karen = 500;
      var Kitsuru = 600;
      var Muthaiga = 700;
  
      var delivery = document.getElementById("Location").value;
  
      if (delivery == "Karen") {
        document.getElementById("total").innerText = total + Karen;
      } else if (delivery == "Kitsuru") {
        document.getElementById("total").innerText = total + Kitsuru;
      } else if (delivery == "Muthaiga") {
        document.getElementById("total").innerText = total + Muthaiga;
  }     else if (delivery == "Wendani") {
    document.getElementById("total").innerText = total + Wendani;
}
    };
  }