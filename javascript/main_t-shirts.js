var links_navi = document.createElement('div');
body.appendChild(links_navi);
links_navi.setAttribute("class", "brodcamp")

var brodcamp_title = [{
        br_01: "index.html",
        br_02: "men.html",
        br_03: "mens_t-shirts.html"

    }, {
        title: "Men T-Shirts",
        item: "items",
        total: "0"
    }, {
        filter: "Mens Wear",
        product: "ALL PRODUCT",

    }

];

document.querySelector('.brodcamp').innerHTML +=
    `
    <div class="container-fluid">
        <div class="row">
       
            <div class="col-md-12">
                <div class="brod_menu">
                <ul class="navbar-nav nav">
                <li><a href="${brodcamp_title[0].br_01}">Home &nbsp;&nbsp;/ </a></li>
                <li><a href="${brodcamp_title[0].br_02}">Men Clothing &nbsp;&nbsp;/ </a></li>
                <li><a href="${brodcamp_title[0].br_03}"><b>Mens-T-Shirts</b></a></li>
                </ul>
                </div>
            </div>
            <div class="col-md-4">
            <div class="brand_total pad-10 text-center">
             <span><b><h1>${brodcamp_title[2].filter}<b></h1></span>
            </div>
           </div>
            <div class="col-md-12">
                <div class="brand_total text-right" >
                <b>${brodcamp_title[1].title}</b>  <b> -  </b>
                <span class="total" style="font-size: 23px;"> <b>
                </b></span>
                ${brodcamp_title[1].item}
                </div>
            </div>
           
            <div class="col-md-4">
                <div class="brand_total pad-10">
                 <span><b>${brodcamp_title[2].product} </b></span>
                </div>
            </div>
            <div class="col-md-4">
                <div class="brand_total pad-10">
                 
                </div>
            </div>
        </div>
    </div>
`;


var body = document.getElementById('body');
var side_bar = document.createElement('section');
body.appendChild(side_bar);
side_bar.setAttribute("class", "sidebar");

document.querySelector(".sidebar").innerHTML +=
    `
   
    <div class="container-fluid">
        <div class="side_bar pad-10">
            <span><b>CATEGORIES</b></span>
            <div><span><input type="checkbox" name="checkbox" id="myInput_all" onclick="myButn()"> </span> <lable> All Products</lable></div>
            <div><span><input type="checkbox" name="checkbox" id="t_shirts" onclick="myButn01()"> </span> <lable> T-shirts</lable></div>
            <div><span><input type="checkbox" name="checkbox" id="myInput" onclick="myButn()"> </span> <lable> Lounge T-shirts</lable></div>
            <span data-colorhex="black" class="colour-label colour-colorDisplay" style="background-color: rgb(54, 69, 79);"></span>
        </div>
       
        <div class="side_bar pad-10">
            <span><b>Price</b></span>
            <div><span><input type="checkbox" name="checkbox" id="price_chck"  onclick="price_01()"> </span> <lable class="price_get01" value="3907">  Rs. 209 to Rs. 3907</lable></div>
            <div><span><input type="checkbox" name="checkbox"> </span> <lable value="7605">  Rs. 3907 to Rs. 7605</lable></div>
           
        </div>
       
        <div class="side_bar pad-10">
            <span><b>COLOR</b></span>
            <div><span><input type="checkbox" name="checkbox" class="tablinks" onclick="My_color(event, 'Black')"> </span>   <span class="dot black"></span><lable value="black">   Black</lable></div>
            <div><span><input type="checkbox" name="checkbox" class="tablinks"  onclick="My_color(event, 'Blue')"> </span> <span class="dot blue"></span><lable value="blue">    Blue</lable></div>
            <div><span><input type="checkbox" name="checkbox" class="tablinks" onclick="My_color(event, 'Red')"> </span> <span class="dot red"></span><lable value="red">     Red</lable></div>
           
        </div>
        <div class="side_bar pad-10">

            <span><b>Topwear Shop</b></span>
            <ul>
            <li><a href="#">Casual Shirts</a></li>
            <li><a href="#">Formal Shirts</a></li>
            <li><a href="#">Sweat Shirts</a></li>
            </ul> 
            <span><b>Bottom Shop</b></span>
            <ul>
            <li><a href="#">Casual Trusers</a></li>
            <li><a href="#">Jeans</a></li>
            </ul>           
        
    
        </div>
 </div>
`;

var body = document.getElementById('body');
var art = document.createElement('article');
body.appendChild(art);

art.setAttribute("class", "article_All both");

document.querySelector('article').innerHTML += '<div class="container-fluid"><div class="row"></div></div>';


function tshirts(photo, pro_name, category, color, type, pro_price) {
    this.photo = photo;
    this.pro_name = pro_name;
    this.category = category;
    this.type = type;
    this.color = color;
    this.pro_price = pro_price;
}
var men_pro = new tshirts("images/mens_shirts/mens_shirts01.webp", "HRX By Hiritik Rohsan", "Printed Round Neck", "yellow", "T-shirts", "384");

var men_pro01 = new tshirts("images/mens_shirts/mens_shirts02.webp", "Campus Sutra", "Color Blocked Round Neck", "Blue", "T-shirts", "427");

var men_pro02 = new tshirts("images/mens_shirts/mens_shirts03.webp", "Diffrence Of Openion", "Solid Round Neck", "Green", "T-shirts", "549");

var men_pro03 = new tshirts("images/mens_shirts/mens_shirts04.webp", "Roadster", "Men Solid Polo Color", "Black", "T-shirts", "1099");

var men_pro04 = new tshirts("images/mens_shirts/mens_shirts05.webp", "WORGON", "Men Slim Fit T-shirt", "Black", "T-shirts", "659");
var men_pro05 = new tshirts("images/mens_shirts/mens_shirts06.webp", "HRX By Hiritik Rohsan", "Printed T-shirts", "Black", "T-shirts", "384");

var men_pro06 = new tshirts("images/mens_shirts/mens_shirts07.webp", "ADIDAS", "Printed MUFC", "Red", "T-shirts", "3999");
var men_pro07 = new tshirts("images/mens_shirts/mens_shirts08.webp", "ADIDAS", "Max", "Red", "T-shirts", "479 ");

var men_pro09 = new tshirts("images/mens_shirts/mens_shirts07.webp", "ADIDAS", "Printed MUFC", "Gray", "Lounge T-shirts ",
    "Rs.3999");
var men_pro10 = new tshirts("images/mens_shirts/mens_shirts08.webp", "ADIDAS", "Max", "Red", "T-shirts", "479");

var men_pro11 = new tshirts("images/mens_shirts/mens_shirts07.webp", "ADIDAS", "Printed MUFC", "Gray", "T-ishrts", "Rs.3999");
var men_pro12 = new tshirts("images/mens_shirts/mens_shirts08.webp", "ADIDAS", "Max", "Blue", "T-shirts", "479");

var men_pro13 = new tshirts("images/mens_shirts/mens_shirts02.webp", "Campus Sutra", "Color Blocked Round Neck", "Red", "T-shirts", "Rs.427");
var men_pro14 = new tshirts("images/mens_shirts/mens_shirts08.webp", "ADIDAS", "Max", "Gray", "T-shirts", "479");

var men_pro15 = new tshirts("images/mens_shirts/mens_shirts05.webp", "WORGON", "Men Slim Fit T-shirt", "Blue", "T-shirts", "659");


var men_pro16 = new tshirts("images/mens_shirts/mens_shirts03.webp", "Diffrence ", "Solid Round Neck", "Black", "Lounge ", "549");


var men_pro17 = new tshirts("images/mens_shirts/mens_shirts09.webp", "Gap ", "Solid Polo Color T-shirts Neck", "Black", "Lounge ",
    "554");

var men_pro18 = new tshirts("images/mens_shirts/mens_shirts10.webp", "FIDO DIDO ", "Solid Polo Color T-shirts Neck", "Black", "Lounge", "749");

var men_pro19 = new tshirts("images/mens_shirts/mens_shirts11.webp", "FIDO DIDO ", "Solid Hight  Neck", "Black", "Lounge T-shirt", "1249");


var men_pro20 = new tshirts("images/mens_shirts/mens_shirts12.webp", "Gant", "Solid Hight  Neck", "Black", "Lounge", "1749");




var arr_ts = [men_pro, men_pro01, men_pro02, men_pro03, men_pro04, men_pro05, men_pro06, men_pro07, men_pro09, men_pro10, men_pro11, men_pro12, men_pro13, men_pro14, men_pro15, men_pro16, men_pro17, men_pro18, men_pro19, men_pro20];

for (var i in arr_ts) {
    document.querySelector('article>.container-fluid>.row').innerHTML +=
        `
       
            <div class="col-md-3">
                <div class="men-tshirt">
                     <a href=""><img src="${arr_ts[i].photo}"></a>
                   
                    <p>${arr_ts[i].pro_name}</p>
                    <p> ${arr_ts[i].category} </p>
                   
                    <p class="t-shirts_type">${arr_ts[i].type}</p>

                    <p><b>Color - </b><span value="${arr_ts[i].color}">${arr_ts[i].color}</span></p>

                    <p class="price">Rs. <span value="${arr_ts[i].pro_price}">${arr_ts[i].pro_price}</span></p>
                    <div class="add-cart">
                   
                    <a href="#" >ADD CART</a>
                    </div>
                </div>
            </div>  
       
`;
}





var Lounge_tishirts = document.createElement('article');
body.appendChild(Lounge_tishirts);

Lounge_tishirts.setAttribute("class", "lounge-t both");
Lounge_tishirts.setAttribute("id", "lounge-t01");
Lounge_tishirts.innerHTML += '<div class="container-fluid"><div class="row"></div></div>';


var lonuge_tshirt = [{
    pro_cat: "images/mens_shirts/mens_shirts03.webp",
    pro_de: "Diffrence",
    pro_cte: "Solid Round Neck",
    pro_type: "Lounge",
    pr_color: "Black",
    pro_pri: "Rs.549"
}, {
    pro_cat: "images/mens_shirts/mens_shirts03.webp",
    pro_de: "Diffrence",
    pro_cte: "Solid Round Neck",
    pro_type: "Lounge",
    pr_color: "Black",
    pro_pri: "Rs.549"
}, {
    pro_cat: "images/mens_shirts/mens_shirts03.webp",
    pro_de: "Diffrence",
    pro_cte: "Solid Round Neck",
    pro_type: "Lounge",
    pr_color: "Black",
    pro_pri: "Rs.549"
}, {
    pro_cat: "images/mens_shirts/mens_shirts03.webp",
    pro_de: "Diffrence",
    pro_cte: "Solid Round Neck",
    pro_type: "Lounge",
    pr_color: "Black",
    pro_pri: "Rs.549"
}, ];

for (var r in lonuge_tshirt) {
    document.querySelector('.lounge-t>.container-fluid>.row').innerHTML += `
    <div class="col-md-3">
     
           <div class="Loung_tshirt_for_men">
               <a href="#"><img src="${lonuge_tshirt[r].pro_cat}"></a>
               <p>${lonuge_tshirt[r].pro_de}</p>
               <p>${lonuge_tshirt[r].pro_cte}</p>
               <p>${lonuge_tshirt[r].pro_type}</p>
               <p>${lonuge_tshirt[r].pr_color}</p>
               <p>${lonuge_tshirt[r].pro_pri}</p>
           </div>
      
    </div>`;
}



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
               <p >${thsirts_men[a0].pro_pri}</p>
           </div>
       </div>
    `;
}


var blk_tshirts = document.createElement('article');
body.appendChild(blk_tshirts);

blk_tshirts.setAttribute("class", "blktshirts My_color_product");
blk_tshirts.setAttribute("id", "Black");
blk_tshirts.innerHTML += '<div class="container-fluid"><div class="row"></div></div>'

var blk_tshirts = [{
    blk_t_image: "images/mens_shirts/mens_shirts04.webp",
    t_name: "Roadster",
    t_details: "Men Solid Polo Color",
    t_cate: "T-shirts",
    t_color: " Black",
    t_price: "1200"

}, {
    blk_t_image: "images/mens_shirts/mens_shirts06.webp",
    t_name: "Roadster",
    t_details: "Men Solid Polo Color",
    t_cate: "T-shirts",
    t_color: " Black",
    t_price: "1200"

}, {
    blk_t_image: "images/mens_shirts/mens_shirts05.webp",
    t_name: "Roadster",
    t_details: "Men Solid Polo Color",
    t_cate: "T-shirts",
    t_color: " Black",
    t_price: "1200"

}, {
    blk_t_image: "images/mens_shirts/mens_shirts09.webp",
    t_name: "Roadster",
    t_details: "Men Solid Polo Color",
    t_cate: "T-shirts",
    t_color: " Black",
    t_price: "1200"

}, {
    blk_t_image: "images/mens_shirts/mens_shirts10.webp",
    t_name: "Roadster",
    t_details: "Men Solid Polo Color",
    t_cate: "T-shirts",
    t_color: " Black",
    t_price: "1200"

}, {
    blk_t_image: "images/mens_shirts/mens_shirts11.webp",
    t_name: "Roadster",
    t_details: "Men Solid Polo Color",
    t_cate: "T-shirts",
    t_color: " Black",
    t_price: "1200"

}]

for (var c in blk_tshirts) {
    document.querySelector('.blktshirts>.container-fluid>.row').innerHTML +=
        `
       <div class="col-md-3">
          <div class="blk">
               <a href="#"><img src="${blk_tshirts[c].blk_t_image}"></a>
               <p>${blk_tshirts[c].t_name}</p>
               <p>${blk_tshirts[c].t_details}</p>
               <p>${blk_tshirts[c].t_cate}</p>
               <p>${blk_tshirts[c].t_color}</p>
               <p><b>Rs.</b> ${blk_tshirts[c].t_price}</p>
          </div>
       </div>
    `;
}




var blue_tshirts = document.createElement('article');
body.appendChild(blue_tshirts);

blue_tshirts.setAttribute("class", "bluetshirts My_color_product");
blue_tshirts.setAttribute("id", "Blue");
blue_tshirts.innerHTML += '<div class="container-fluid"><div class="row"></div></div>'

var blue_tshirts = [{
    blue_image: "images/mens_shirts/mens_shirts02.webp",
    blue_name: "Roadster",
    blue_details: "Men Solid Polo Color",
    blue_cate: "T-shirts",
    blue_color: " Blue",
    blue_price: "1200"

}, {
    blue_image: "images/mens_shirts/mens_shirts02.webp",
    blue_name: "Roadster",
    blue_details: "Men Solid Polo Color",
    blue_cate: "T-shirts",
    blue_color: " Blue",
    blue_price: "1200"

}, {
    blue_image: "images/mens_shirts/mens_shirts02.webp",
    blue_name: "Roadster",
    blue_details: "Men Solid Polo Color",
    blue_cate: "T-shirts",
    blue_color: " Blue",
    blue_price: "1200"

}, {
    blue_image: "images/mens_shirts/mens_shirts09.webp",
    blue_name: "Roadster",
    blue_details: "Men Solid Polo Color",
    blue_cate: "T-shirts",
    blue_color: " Black",
    blue_price: "1200"

}]

for (var j in blue_tshirts) {
    document.querySelector('.bluetshirts>.container-fluid>.row').innerHTML +=
        `
       <div class="col-md-3">
          <div class="blue01">
               <a href="#"><img src="${blue_tshirts[j].blue_image}"></a>
               <p>${blue_tshirts[j].blue_name}</p>
               <p>${blue_tshirts[j].blue_details}</p>
               <p>${blue_tshirts[j].blue_cate}</p>
               <p>${blue_tshirts[j].blue_color}</p>
               <p><b>Rs.</b> ${blue_tshirts[j].blue_price}</p>
          </div>
       </div>
    `;
}


var red_tshirt = document.createElement('article');
body.appendChild(red_tshirt);

red_tshirt.setAttribute("class", "red_tshirts My_color_product");
red_tshirt.setAttribute("id", "Red");
red_tshirt.innerHTML += '<div class="container-fluid"><div class="row"></div></div>';
var buttn = document.createElement('button');
body.appendChild(buttn);
buttn.setAttribute("class", "filter_butn");
buttn.setAttribute("onclick", "filter_butn()");
buttn.innerText = "Filter";



var red_tshirts = [{
    red_tshirts_image: "images/mens_shirts/mens_shirts07.webp",
    red_tshirts_name: "Roadster",
    red_tshirts_details: "Men Solid Polo Color",
    red_tshirts_cate: "T-shirts",
    red_tshirts_color: "Red",
    red_tshirts_price: "1200"

}, {
    red_tshirts_image: "images/mens_shirts/mens_shirts07.webp",
    red_tshirts_name: "Roadster",
    red_tshirts_details: "Men Solid Polo Color",
    red_tshirts_cate: "T-shirts",
    red_tshirts_color: "Red",
    red_tshirts_price: "1200"

}, {
    red_tshirts_image: "images/mens_shirts/mens_shirts07.webp",
    red_tshirts_name: "Roadster",
    red_tshirts_details: "Men Solid Polo Color",
    red_tshirts_cate: "T-shirts",
    red_tshirts_color: "Red",
    red_tshirts_price: "1200"

}, {
    red_tshirts_image: "images/mens_shirts/mens_shirts07.webp",
    red_tshirts_name: "Roadster",
    red_tshirts_details: "Men Solid Polo Color",
    red_tshirts_cate: "T-shirts",
    red_tshirts_color: "Red",
    red_tshirts_price: "1200"

}, {
    red_tshirts_image: "images/mens_shirts/mens_shirts07.webp",
    red_tshirts_name: "Roadster",
    red_tshirts_details: "Men Solid Polo Color",
    red_tshirts_cate: "T-shirts",
    red_tshirts_color: "Red",
    red_tshirts_price: "1200"

}]

for (var r in red_tshirts) {
    document.querySelector('.red_tshirts>.container-fluid>.row').innerHTML +=
        `
       <div class="col-md-3">
          <div class="red01">
               <a href="#"><img src="${red_tshirts[r].red_tshirts_image}"></a>
               <p>${red_tshirts[r].red_tshirts_name}</p>
               <p>${red_tshirts[r].red_tshirts_details}</p>
               <p>${red_tshirts[r].red_tshirts_cate}</p>
               <p>${red_tshirts[r].red_tshirts_color}</p>
               <p><b>Rs.</b> ${red_tshirts[r].red_tshirts_price}</p>
          </div>
       </div>
    `;
}

document.querySelector('.total').innerHTML += arr_ts.length + thsirts_men.length + lonuge_tshirt.length + blk_tshirts.length + blue_tshirts.length + red_tshirts.length;