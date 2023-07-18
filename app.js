// Mobile phone data
var mobiles = {
  Apple: {
    "iPhone 12": {
      name: "iPhone 12",
      camera: "40 MP",
      ram: "6 GB",
      image: "images/iphone-12-blue.png",
    },
    "iPhone 13": {
      name: "iPhone 13",
      camera: "48 MP",
      ram: "8 GB",
      image: "images/iphone 13.jpg",
    },
  },
  Samsung: {
    "Galaxy S21": {
      name: "Galaxy S21",
      camera: "12 MP",
      ram: "8 GB",
      image: "images/S21.jpg",
    },
    "Galaxy S20": {
      name: "Galaxy S20",
      camera: "64 MP",
      ram: "12 GB",
      image: "images/S20.jpg",
    },
  },
};

function checkSpecification() {
  var company = document.getElementById("companyInput").value;
  var model = document.getElementById("modelInput").value;

  if (
    mobiles.hasOwnProperty(company) &&
    mobiles[company].hasOwnProperty(model)
  ) {
    var specification = mobiles[company][model];
    var popup = document.getElementById("popup");
    var popupContent = document.getElementById("popupContent");
    var popupImage = document.getElementById("popupImage");

    popupImage.src = specification.image;
    popupContent.innerHTML =
      "<strong>Name:</strong> " +
      specification.name +
      "<br><strong>Camera:</strong> " +
      specification.camera +
      "<br><strong>RAM:</strong> " +
      specification.ram;

    popup.style.display = "block";
  } else {
    alert("Mobile phone not found.");
  }
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}
