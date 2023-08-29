const formData = JSON.parse(localStorage.getItem('formdata'));
if (formData === null) { 
    window.location.href = "/welcome-page";
} else {
    console.log(formData);
    var links = document.getElementsByClassName("electoratelink");
    for (var i = 0; i < links.length; i++) {
        links[i].href += formData.electorate;
        links[i].src += formData.electorate;
    };
    var values = document.getElementsByClassName("electorateform");
    for (var i = 0; i < values.length; i++) {
        values[i].value = formData.electorate;
    };
    var text = document.getElementsByClassName("electoratetext");
    for (var i = 0; i < text.length; i++) {
        text[i].innerHTML += formData.electorate;
    };
    if (formData.agegroup === "u17") {
        var elements = document.getElementsByClassName("under17");
        for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
        };
    } else if (formData.agegroup === "17") {
        var elements = document.getElementsByClassName("age17");
        for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
        };
    } else if (formData.agegroup === "18") {
        var elements = document.getElementsByClassName("age18");
        for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
        };
    };
};
function menuToggle () {
    const menuButton = document.getElementById("menuButton");
    const navMenu = document.getElementById("navList");
    menuButton.classList.toggle("menu-toggle-open");
    if (menuButton.classList.contains("menu-toggle-open")) {
      navMenu.classList.toggle("mobile-menu-open");
    } else {
      navMenu.classList.toggle("mobile-menu-open");
    }
  };