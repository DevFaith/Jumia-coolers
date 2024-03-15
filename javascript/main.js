var coolers1 = {
    Image: "/images/image8.jpg",
    icoolers: "image",
    name: "Samsung SE",
    discountedPrice: "Ksh" + " " + 30000,
    originalPrice: "Ksh" + " " + 38500,
    itemId: "I001"
  };
  document.getElementById("image").src = coolers1.Image;
  document.getElementById("name1").innerText = coolers1.name;
  document.getElementById("discountedPrice1").innerText = coolers1.discountedPrice;
  document.getElementById("originalPrice1").innerText = coolers1.originalPrice;
  
  var coolers2 = {
    Image: "/images/image3.jpg",
    icoolers: "image2",
    name: "GE 10",
    discountedPrice: "Ksh" + " " + 55000,
    originalPrice: "Ksh" + " " + 60500,
    itemId: "I002"
  };
  document.getElementById("image2").src = coolers2.Image;
  document.getElementById("name2").innerText = coolers2.name;
  document.getElementById("discountedPrice2").innerText = coolers2.discountedPrice;
  document.getElementById("originalPrice2").innerText = coolers2.originalPrice;
  
  var coolers3 = {
    Image: "/images/image9.jpg",
    icoolers: "image3",
    name: "Lg 11",
    discountedPrice: "Ksh" + " " + 60000,
    originalPrice: "Ksh" + " " + 70500,
    itemId: "I003"
  };
  document.getElementById("image3").src = coolers3.Image;
  document.getElementById("name3").innerText = coolers3.name;
  document.getElementById("discountedPrice3").innerText = coolers3.discountedPrice;
  document.getElementById("originalPrice3").innerText = coolers3.originalPrice;
  
  var coolers4 = {
    Image: "/images/image6.jpg",
    icoolers: "image4",
    name: "Whirlpool 12",
    discountedPrice: "Ksh" + " " + 70000,
    originalPrice: "Ksh" + " " + 75000,
    itemId: "I004",
  };
  document.getElementById("image4").src = coolers4.Image;
  document.getElementById("name4").innerText = coolers4.name;
  document.getElementById("discountedPrice4").innerText = coolers4.discountedPrice;
  document.getElementById("originalPrice4").innerText = coolers4.originalPrice;
  
  document.getElementById("coolers1").onclick = function () {
    window.location.href = "/select.html" + "?" + coolers1.itemId;
  };
  
  document.getElementById("coolers2").onclick = function () {
    window.location.href = "/select.html" + "?" + coolers2.itemId;
  };
  
  document.getElementById("coolers3").onclick = function () {
    window.location.href = "/select.html" + "?" + coolers3.itemId;
  };
  
  document.getElementById("coolers4").onclick = function () {
    window.location.href = "/select.html" + "?" + coolers4.itemId;
  };
  