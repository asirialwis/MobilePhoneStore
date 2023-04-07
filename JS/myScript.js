function loadData(name) {
  if (name == "XS") {
    document.getElementById("para").innerHTML =
      "The iPhone XS  (stylized and marketed as iPhone Xs and iPhone Xs Max; Roman numeral 'X' pronounced 'ten')[13][14] are smartphones designed, developed and marketed by Apple Inc. They are the twelfth-generation flagships of the iPhone, succeeding the iPhone X.[15] Apple CEO Tim Cook announced the devices alongside a lower-end model, the iPhone XR, on September 12, 2018, at the Steve Jobs Theater at Apple Park. Pre-orders began on September 14, 2018, and the devices went on sale on September 21.[16]";
    document.getElementById("img2").src = "images/XS.jpg";
  } else if (name == "XsMax") {
    document.getElementById("para").innerHTML =
      "The iPhone XS and iPhone XS Max (stylized and marketed as iPhone Xs and iPhone Xs Max; Roman numeral 'X' pronounced 'ten')[13][14] are smartphones designed, developed and marketed by Apple Inc. They are the twelfth-generation flagships of the iPhone, succeeding the iPhone X.[15] Apple CEO Tim Cook announced the devices alongside a lower-end model, the iPhone XR, on September 12, 2018, at the Steve Jobs Theater at Apple Park. Pre-orders began on September 14, 2018, and the devices went on sale on September 21.[16]";
    document.getElementById("img2").src = "images/apple-iphone-xs-max-5.jpg";
  } else if (name == "eightsPlus") {
    document.getElementById("para").innerHTML =
      "The iPhone 8 and iPhone 8 Plus[a] are smartphones designed, developed, and marketed by Apple Inc. They are the eleventh generation of the iPhone. The iPhone 8 was released on September 22, 2017, succeeding the iPhone 7 and iPhone 7 Plus respectively[8] and preceding the iPhone XR. The iPhone 8 and iPhone 8 Plus were discontinued by Apple on April 15, 2020 with the release of the second-generation iPhone SE.";
    document.getElementById("img2").src = "images/Space-Gray-2.png";
  } else if (name == "SE") {
    document.getElementById("para").innerHTML =
      "The third-generation iPhone SE (also known as the iPhone SE 3 or the iPhone SE 2022) is a smartphone designed and developed by Apple Inc. It is part of the 15th generation of the iPhone, alongside the iPhone 13 / 13 Mini and iPhone 13 Pro / 13 Pro Max models.";
    document.getElementById("img2").src = "images/SE.jpg";
  }
}
//--------when click Average price button , this function work--------
function priceForLoop() {
  var product = [
    "Iphone XS - $500",
    "Iphone XS Max - $600",
    "Iphone 8s plus -$1050",
    "Iphone SE -$1200",
  ];

  for (let x in product) {
    document.getElementById("para").innerHTML +=
      "<center>" + product[x] + "</center>";
  }
  document.getElementById("img2").src = "images/iphoneSet.jpg";
}

//--------when click price Higher than 1000 button, this function will work---------
function priceHigher() {
  var prices = [500, 600, 1050, 1200];
  document.getElementById("para").innerHTML =
    "<center><strong>List Of Hight Cost Phones</strong> <center>";

  for (i in prices) {
    if (prices[i] > 1000) {
      document.getElementById("para").innerHTML +=
        "<br>" + "<center>" + "Price is " + " $" + prices[i] + "</center>";
    }
  }
}
//--------when click price Lower than 1000 button, this function will work---------
function priceLower() {
  var prices = [500, 600, 1050, 1200];
  document.getElementById("para").innerHTML =
    "<center><strong>List Of Lower Cost Phones</strong> <center>";

  for (i in prices) {
    if (prices[i] < 1000) {
      document.getElementById("para").innerHTML +=
        "<br>" + "<center>" + "Price is " + " $" + prices[i] + "</center>";
    }
  }
}

//-----------password validate function for Registration Form----------------

function checkPassword() {
  if (
    document.getElementById("psw").value !=
    document.getElementById("psw2").value
  ) {
    alert("password Mismatch");
    return false;
  } else {
    alert("successfull!!");
    return true;
  }
}
//---------Terms and conditions mandatory checkbox click----------------
function enableButton() {
  if (document.getElementById("doc").checked) {
    document.getElementById("submit").disabled = false;
  } else {
    document.getElementById("submit").disabled = true;
  }
}
