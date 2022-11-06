const hamburger = document.querySelectorAll('.hamburger');

hamburger.addEventListener('click',function(){
    this.classList.toggle('is-active');
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
}


