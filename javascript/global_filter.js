function Global_filter() {

    var input, div;

    input = document.getElementById('myInput');
    if (input.value == "tshirt" || input.value == "mens tshirts" || input.value == "geans") {
        window.open("mens_t-shirts.html");

    } else if (input.value == "top" || input.value == "girls geans") {
        window.open("women.html");
    } else if (input.value == "kids" || input.value == "kids Wear") {
        window.open("kids.html");
    } else if (input.value == "Watch") {
        window.open("Watch.html");
    } else if (input.value == "Shoes") {
        window.open("Shoes.html");
    } else {
        console.log("demo");
    }
}

function Seach_butn() {
    var widget01 = document.querySelector('.header_widget-mobile');

    var widget = document.querySelector('.header_widget01');
    var s_b = document.querySelector('.mobile_bar');
    if (s_b.style.display === "none") {
        s_b.style.display = "none";
        widget.style.display = "block";

    } else {

        widget.style.display = "block";
        s_b.style.display = "none";


    }
}