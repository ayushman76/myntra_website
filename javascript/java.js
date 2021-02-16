var body = document.getElementById('body');
var article02 = document.createElement('article');
body.appendChild(article02);
var article03 = document.createElement('article');
body.appendChild(article03);
article03.setAttribute("class", "article01");






function brand(pro) {
    this.pro = pro;

}
var deals = new brand("images/deals-image-brand/deals-1.webp");
var deals01 = new brand("images/deals-image-brand/deals-2.webp");
var deals02 = new brand("images/deals-image-brand/deals-3.webp");
var deals03 = new brand("images/deals-image-brand/deals-3.webp");
var deals04 = new brand("images/deals-image-brand/deals-4.webp");
var deals05 = new brand("images/deals-image-brand/deals-5.webp");

var arr_01 = [deals, deals01, deals02, deals03, deals04, deals05];
document.querySelector('article').innerHTML += '<div class="container-fluid"><div class="row"><h1>&nbsp;DEALS OF THE DAY</h1></div></div>';
for (var f in arr_01) {

    document.querySelector('article>.container-fluid>.row').innerHTML += `
       <div class="col-md-2">
            <div class="deals pad-10 text-center">
                <a href=""><img src="${arr_01[f].pro}"></a>
            </div>
        </div>
    
    `;
};
//////////////////////////
function product(pro_data) {
    this.pro_data = pro_data;
}
var t_br01 = new product("images/brand-images/brand-1.webp");
var t_br02 = new product("images/brand-images/brand-2.webp");
var t_br03 = new product("images/brand-images/brand-3.webp");
var t_br04 = new product("images/brand-images/brand-4.webp");
var t_br05 = new product("images/brand-images/brand-5.webp");
var t_br06 = new product("images/brand-images/brand-6.webp");
var t_br07 = new product("images/brand-images/brand-7.webp");
var t_br08 = new product("images/brand-images/brand-8.webp");
var adbanner02 = new product("images/banner-ad2.webp");


var nest_con = document.createElement('div');
article02.appendChild(nest_con);
nest_con.setAttribute("class", "heading");

document.querySelector('article>.heading').innerHTML +=
    '<div class="container-fluid"><div class="row"><h2>&nbsp;EXPLORE TOP BRANDS<h2></div></div>';

var arr02 = [t_br01, t_br02, t_br03, t_br04, t_br05, t_br06, t_br07, t_br08];


for (var s in arr02) {
    document.querySelector('article>.heading>.container-fluid>.row').innerHTML +=
        `
    <div class="col-md-3">
        <div class="product pad-10 text-center">
            <a href="mens_t-shirts.html"><img src="${arr02[s].pro_data}"></a>
        </div>
    </div>
    
    `;
}


document.querySelector('body>.article01').innerHTML += '<div class="container-fluid"><div class="row"><h3>&nbsp;TRENDING IN WESTERN WEAR</h3></div></div>';

var row_div = document.createElement('div');
article02.appendChild(row_div);
row_div.setAttribute("class", "make_col");

document.querySelector('.make_col').innerHTML +=
    `<div class="col-md-12">
       <div class="banner-ad pad-10">
            <a href="mens_t-shirts.html"><img src="${adbanner02.pro_data}" class="img-responsive"></a>
       </div>
  </div>`;

/////////////////////////////
function catog(pro_west) {
    this.pro_west = pro_west;
}


var western = new catog("images/westurn-products/westurn-pro-1.webp");
var western01 = new catog("images/westurn-products/westurn-pro-2.webp");
var western02 = new catog("images/westurn-products/westurn-pro-3.webp");
var western03 = new catog("images/westurn-products/westurn-pro-4.webp");


var arr03 = [western, western01, western02, western03];


for (var a in arr03) {
    document.querySelector('.article01>.container-fluid>.row').innerHTML += `
       <div class="col-md-3">
            <div class="wetern-pro pad-10">
               <a href =""><img src="${arr03[a].pro_west}"></a>
            </div>
       </div>
    `;
}
/////////////////////

function ind(pro_ind) {
    this.pro_ind = pro_ind;
}

var indian = new ind("images/indian-were/indean-1.webp");
var indian01 = new ind("images/indian-were/indean-2.webp");
var indian02 = new ind("images/indian-were/indean-3.webp");
var indian03 = new ind("images/indian-were/indean-4.webp");

var article04 = document.createElement('article');
body.appendChild(article04);
article04.setAttribute("class", "article02");

document.querySelector('.article02').innerHTML = '<div class="container-fluid"><div class="row"><h1>&nbsp;TRENDING IN INDIAN WEAR</h1></div></div>';

var arr04 = [indian, indian01, indian02, indian03];
for (var v in arr04) {
    document.querySelector('.article02>.container-fluid>.row').innerHTML += `
       <div class="col-md-3">
            <div class="wetern-pro pad-10">
               <a href =""><img src="${arr04[v].pro_ind}"></a>
            </div>
       </div>
    `;
}



function sport(pro_spo) {
    this.pro_spo = pro_spo;
}

var sports = new sport("images/sports-were/sports-1.webp");
var sports01 = new sport("images/sports-were/sports-2.webp");
var sports02 = new sport("images/sports-were/sports-3.webp");
var sports03 = new sport("images/sports-were/sports-4.webp");

var article05 = document.createElement('article');
body.appendChild(article05);
article05.setAttribute("class", "article04");

document.querySelector('.article04').innerHTML = '<div class="container-fluid"><div class="row"><h1>&nbsp;TRENDING IN SPORTS WEAR</h1></div></div>';

var arr05 = [sports, sports01, sports02, sports03];
for (var z in arr05) {
    document.querySelector('.article04>.container-fluid>.row').innerHTML += `
       <div class="col-md-3">
            <div class="wetern-pro pad-10">
               <a href =""><img src="${arr05[z].pro_spo}"></a>
            </div>
       </div>
    `;
}



function foot_p(pro_foot) {
    this.pro_foot = pro_foot;
}

var foot = new foot_p("images/foot-were/foot-1.webp");
var foot01 = new foot_p("images/foot-were/foot-2.jpg");
var foot02 = new foot_p("images/foot-were/foot-3.webp");
var foot03 = new foot_p("images/foot-were/foot-4.webp");

var article06 = document.createElement('article');
body.appendChild(article06);
article06.setAttribute("class", "article05");

document.querySelector('.article05').innerHTML = '<div class="container-fluid"><div class="row"><h1>&nbsp;&nbsp;TRENDING IN FOOTWEAR</h1></div></div>';

var arr06 = [foot, foot01, foot02, foot03];
for (var q in arr06) {
    document.querySelector('.article05>.container-fluid>.row').innerHTML += `
       <div class="col-md-3">
            <div class="foot-pro pad-10">
               <a href =""><img src="${arr06[q].pro_foot}"></a>
            </div>
       </div>
    `;
}



function acc(pro_acc) {
    this.pro_acc = pro_acc;
}

var acc0 = new acc("images/acc-were/acc-1.webp");
var acc01 = new acc("images/acc-were/acc-2.webp");
var acc02 = new acc("images/acc-were/acc-3.jpg");
var acc03 = new acc("images/acc-were/acc-4.webp");

var article07 = document.createElement('article');
body.appendChild(article07);
article07.setAttribute("class", "article06");

document.querySelector('.article06').innerHTML = '<div class="container-fluid"><div class="row"><h1>&nbsp;TRENDING IN ACCESSORIES</h1></div></div>';

var arr07 = [acc0, acc01, acc02, acc03];
for (var c in arr07) {
    document.querySelector('.article06>.container-fluid>.row').innerHTML += `
       <div class="col-md-3">
            <div class="foot-pro pad-10">
               <a href =""><img src="${arr07[c].pro_acc}"></a>
            </div>
       </div>
    `;
}