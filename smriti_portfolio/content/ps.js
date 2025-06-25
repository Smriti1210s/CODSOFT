var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  // Add active class to clicked tab and content
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
function openPopup(img) {
  var popup = document.getElementById("imagePopup");
  var popupImg = document.getElementById("popupImg");

  popup.style.display = "block";
  popupImg.src = img.src;
}

function closePopup() {
  document.getElementById("imagePopup").style.display = "none";
}
