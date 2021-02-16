var sec_banner = [{
    banner01: "images/banner-1.png",
    banner02: "images/banner-2.png",
    banner03: "images/banner-3.png",
    banner04: "images/banner-4.png",
    ad_banner: "images/adbanner.png"

}];


var section = document.createElement('section');
body.appendChild(section);

document.querySelector('section').innerHTML += `
<div class="slidercontainer">  
        <div class="showSlide ">  
            <img src="${sec_banner[0].banner01}" />  
        </div>  
        <div class="showSlide">  
            <img src="${sec_banner[0].banner02}"/>  
        </div>  
        <div class="showSlide ">  
            <img src="${sec_banner[0].banner03}" />  
        </div>  
        <div class="showSlide ">  
            <img src="${sec_banner[0].banner04}" />  
        </div>  
       
        <!-- Navigation arrows -->  
        <a class="left" onclick="nextSlide(-1)">❮</a>  
        <a class="right" onclick="nextSlide(1)">❯</a>  
    </div> 
    <div  class="add_banner">
        <img src="${sec_banner[0].ad_banner}" class="img-responsive">
    </div>
`;
var slide_index = 1;
displaySlides(slide_index);

function nextSlide(n) {
    displaySlides(slide_index += n);
}

function currentSlide(n) {
    displaySlides(slide_index = n);
}

function displaySlides(n) {
    var i;
    var slides = document.getElementsByClassName("showSlide");
    if (n > slides.length) { slide_index = 1 }
    if (n < 1) { slide_index = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slide_index - 1].style.display = "block";
}