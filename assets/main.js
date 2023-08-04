const formData = JSON.parse(localStorage.getItem('formdata'));
if (formData === null) { 
    window.location.href = "/welcome-page";
} else {
    console.log(formData);
    document.getElementById("ageplace").innerHTML = formData.agegroup;
    document.getElementById("electorateplace").innerHTML = formData.electorate;
    const aa = document.getElementById("electoratelink")
    aa.href = "/" + formData.electorate;
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