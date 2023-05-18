var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");


function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
   
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-lab");
    
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

    
}
}
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
sidemenu.style.right ="0";    
}
function closemenu() {
    sidemenu.style.right ="-200px";    
    }
    

    // submition
    $("#submit-form").submit((e) => {
        e.preventDefault()
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbxn9EPl4sep2pzFeHzCrsGxW7THR93H8i1ucMBV7R9pTKRZYryWioVHcw7yKitL8rRcSg/exec",
            data: $("#submit-form").serialize(),
            method: "post",
            success: function (response) {
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error: function (err) {
                alert("Something Error")

            }
        })
    }) 


 