function myButn() {
    var tshirts = document.querySelector('.tshirts');
    var all = document.getElementById('myInput_all');
    var me = document.querySelector('.article_All');
    var so = document.getElementById('lounge-t01');
    if (so.style.display === "block") {
        so.style.display = "none";
        me.style.display = "block";

    } else if (all.checked == true) {
        me.style.display = "block";
        so.style.display = "block";
        tshirts.style.display = "none";

    } else {
        so.style.display = "block";
        me.style.display = "none";
        tshirts.style.display = "none";

    }
}

function myButn01() {
    var me = document.querySelector('.article_All,both');
    var so = document.getElementById('lounge-t01');
    var tshirts = document.querySelector('.tshirts');

    if (tshirts.style.display === "block") {
        tshirts.style.display = "none";
    } else {
        tshirts.style.display = "block";
        me.style.display = "none";
        so.style.display = "none";
    }
}