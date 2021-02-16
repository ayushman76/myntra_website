function My_color(evt, ColorName) {
    var tshirts = document.querySelector('.tshirts');
    var all = document.getElementById('myInput_all');
    var me = document.querySelector('.article_All');
    var so = document.getElementById('lounge-t01');
    var color_div = document.getElementsByClassName('My_color_product');
    for (var i = 0; i < color_div.length; i++) {
        color_div[i].style.display = "none";
    }
    var butn = document.getElementsByClassName('tablinks');
    for (var i = 0; i < butn.length; i++) {
        butn[i].className = butn[i].className.replace("active", "");
        so.style.display = "none";
        me.style.display = "none";
        tshirts.style.display = "none";
    }
    document.getElementById(ColorName).style.display = "block";
    evt.currentTarget.className += "active";
}