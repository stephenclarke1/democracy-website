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
    if (formData.agegroup === "u17") {
         document.getElementById("under17").style.display="block";
        console.log(formData.agegroup)
    } else if (formData.agegroup === "17") {
        document.getElementById("age17").style.display="block";
        console.log(formData.agegroup)
    } else if (formData.agegroup === "18") {
        document.getElementById("age18").style.display="block";
        console.log(formData.agegroup)
    };
};