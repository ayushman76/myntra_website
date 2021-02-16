var tshirts01 = document.createElement('article');
body.appendChild(tshirts01);

tshirts01.setAttribute("class", "tshirts");
tshirts01.innerHTML += '<div class="container-fluid"><div class="row"></div></div>'

var thsirts_men = [{
    pro_cat: "images/mens_shirts/mens_shirts04.webp",
    pro_de: "Diffrence",
    pro_cte: "Solid Round Neck",
    pro_type: "T-shirts",
    pr_color: "Black",
    pro_pri: "Rs.549"
}, {
    pro_cat: "images/mens_shirts/mens_shirts02.webp",
    pro_de: "Diffrence",
    pro_cte: "Solid Round Neck",
    pro_type: "T-shirts",
    pr_color: "Black",
    pro_pri: "Rs.549"
}, {
    pro_cat: "images/mens_shirts/mens_shirts07.webp",
    pro_de: "Diffrence",
    pro_cte: "Solid Round Neck",
    pro_type: "T-shirts",
    pr_color: "Black",
    pro_pri: "Rs.549"
}, {
    pro_cat: "images/mens_shirts/mens_shirts09.webp",
    pro_de: "Diffrence",
    pro_cte: "Solid Round Neck",
    pro_type: "T-shirts",
    pr_color: "Black",
    pro_pri: "Rs.549"
}, ]

for (var a0 in thsirts_men) {
    document.querySelector('.tshirts>.container-fluid>.row').innerHTML += `
       <div class="col-md-3">
           <div class="tishirt-div">
               <a href="#"><img src="${thsirts_men[a0].pro_cat}"></a>
               <p>${thsirts_men[a0].pro_de}</p>
               <p>${thsirts_men[a0].pro_cte}</p>
               <p>${thsirts_men[a0].pro_type}</p>
               <p>${thsirts_men[a0].pr_color}</p>
               <p>${thsirts_men[a0].pro_pri}</p>
           </div>
       </div>
    `;
}