// Welcome popup when page loads
function loginUser() {
  const email = document.querySelector('#loginModal input[type="email"]');
  const pass = document.querySelector('#loginModal input[type="password"]');

  if (!email.value || !pass.value) {
    alert("Please fill in both fields.");
    return;
  }

  alert("Logged in successfully! (UI only)");
  closeLogin();
}
function scrollToProducts() {
  const section = document.getElementById("product1");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
function closeLogin() {
  document.getElementById("loginModal").style.display = "none";
}
function zoomLogo() {
  document.getElementById("logoPopup").style.display = "flex";
}

function hideLogoPopup() {
  document.getElementById("logoPopup").style.display = "none";
}


