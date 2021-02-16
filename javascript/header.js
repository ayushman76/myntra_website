var body = document.getElementById('body');
var head_nav = document.createElement('header');
body.appendChild(head_nav);



var header_nav = [{
        logo_link: "index.html",
        logo: "images/logos/header-logo.png",


    },
    {
        nav_li01: "men.html",
        nav_li02: "women.html",
        nav_li03: "kids.html",
        nav_li04: "living.html",
        nav_li05: "offer.html"
    },
    {
        men01: "mens_t-shirts.html",
        men02: "men_casual.html",
        men03: "Shirt_formal.html",
        men04: "sweat_shirts.html"
    }

];

document.querySelector('header').innerHTML += `
 <div class="container-fluid">
    <div class="row">
        <div class="col-md-6">
            <div class="logo_nav flex">
			   <i class="fa fa-bars mobile-bar" style="font-size:24px" onclick="menu()"></i>
			   
                <a href="${header_nav[0].logo_link}" ><img src="${header_nav[0].logo}" class="window"></a>
				 <a href="${header_nav[0].logo_link}" class="mobile-logo">MYNTRA</a>
                <div class="navigation pad-10">
                    <ul class="nav navbar-nav">
                           
                            
                        <li>
                           <a href="#"  onclick="menu01()" class="lin01" onclick="mobile_drop()">MEN <i class="fa fa-angle-down drop-icon"></i></a>
                         </li>
                            <div class="drop pad-10">           
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="mega_menu">
                                        <p><b>Topwear</b></p>
                                        <ul>
                                            <li><a href="${header_nav[2].men01}">T-shirts</a></li>
                                            <li><a href="#">Casual Shirts</a></li>
                                            <li><a href="#">Formal Shirts</a></li>
                                            <li><a href="#">Sweat Shirts</a></li>
                                            <li><a href="#">Jackets</a></li>
                                        </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mega_menu">
                                        <p><b>Bottomwear</b></p>
                                        <ul>
                                        
                                        <li><a href="#">Casual Trousers</a></li>
                                        <li><a href="#">Formal Trousers</a></li>
                                        <li><a href="#">Jeans</a></li>
                                        <li><a href="#">Track Pants</a></li>
                                            
                                        </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mega_menu">
                                        <p><b>Footwear</b></p>
                                        <ul>
                                        <li><a href="#">Sneakers</a></li>
                                        <li><a href="#">Formal Shoes</a></li>
                                        <li><a href="#">Sports Shoes</a></li>
                                        <li><a href="#">Casual Shoes</a></li>
                                        </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mega_menu">
                                        <p><b>Watches</b></p>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            
                       
                        <li><a href="#" onclick="menu01()">WOMEN <i class="fa fa-angle-down drop-icon"></i></a></li>
                        <div class="drop01 pad-10" >
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="mega_menu">
                                        <p><b>Indean & Fusion Wear</b></p>
                                        <ul>
                                            <li><a href="#">Kurtas & Suits</a></li>
                                            <li><a href="#">Sarees</a></li>
                                            <li><a href="#">Leggie</a></li>
                                            
                                        </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mega_menu">
                                        <p><b>Western Wear</b></p>
                                        <ul>
                                        
                                        <li><a href="#">Dresess</a></li>
                                        <li><a href="#">Jeans</a></li>
                                        <li><a href="#">jackets</a></li>
                                        
                                            
                                        </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mega_menu">
                                        <p><b>Footwear</b></p>
                                        <ul>
                                        <li><a href="#">Flat</a></li>
                                        <li><a href="#">Heals</a></li>
                                        <li><a href="#">Boots</a></li>
                                        <li><a href="#">Sports Shoes</a></li>
                                        </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mega_menu">
                                        <p><b>Watches</b></p>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        <li><a href="${header_nav[1].nav_li03}">KIDS <i class="fa fa-angle-down drop-icon"></i></a></li>
                        <li><a href="${header_nav[1].nav_li04}">HOME & LOVING<i class="fa fa-angle-down drop-icon"></i></a></li>
                        <li><a href="${header_nav[1].nav_li05}">OFFERS <i class="fa fa-angle-down drop-icon"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="header_widget01 pad-10 margin-top text-right mobile_bar">
               <span class="back"><a href="index.html"><i class='fas fa-arrow-left' style='font-size:24px'></i></a></span>
                <input type="text" class="form-control bg-gray" placeholder="Search for products, and brands" id="myInput" onkeyup="mySearch()" onkeypress="Global_filter()">
                <ul class="search_list">
                   <li>T-shirts</li>
                   <li>Top</li>
                   <li>Geans</li>
                   <li>Watch</li>
                   <li>Shoes</li>
                </ul>
              
            </div>
        </div>
        <div class="col-md-2">
        <div class="header_widget pad-10">
            <ul class="navbar-nav nav pad-10 ">
                <li><span>&nbsp;&nbsp;<i class='fas fa-user-alt' style='font-size:24px'></i></span></li>
                 
                <li><span>&nbsp;&nbsp;<i class='far fa-bookmark' style='font-size:24px'></i></span></li>

                <li><span>&nbsp;&nbsp;<i class="fa fa-shopping-bag" style="font-size:24px"></i></span></li>
            </ul>
          
        </div>
    </div>
    </div>
 </div>
`;



document.querySelector('header').innerHTML += `
 <div class="container-fluid">
    <div class="row">

        <div class="col-md-12">
        <div class="header_widget-mobile pad-10">
            <ul class="navbar-nav nav pad-10 ">
                <li onclick="Seach_butn()"><span>&nbsp;&nbsp;<i class="fa fa-search" style="font-size:24px"></i></span></li>
				<li><span>&nbsp;&nbsp;<i class='fas fa-user-alt' style='font-size:24px'></i></span></li>
                 
                <li><span>&nbsp;&nbsp;<i class='far fa-bookmark' style='font-size:24px'></i></span></li>

                <li><span>&nbsp;&nbsp;<i class="fa fa-shopping-bag" style="font-size:24px"></i></span></li>
            </ul>
          
        </div>
      </div>
    </div>
 </div>
`;

//
function menu() {
    var menu_mobile = document.querySelector('.navigation');
    if (menu_mobile.style.display === "none") {

        menu_mobile.style.display = "block";
    } else {

        menu_mobile.style.display = "none";
    }

}


function menu01() {

    var mega01 = document.querySelector('.drop');
    var mega02 = document.querySelector('.drop01');
    if (mega01.style.display === "none") {
        mega01.style.display = "block";




    } else if (mega02.style.display === "none") {
        mega02.style.display = "block";




    } else {
        mega02.style.display = "none";
        mega01.style.display = "none";
    }
}


function mobile_drop() {
    var link = document.querySelector('.drop');
    if (link.style.display === "none") {
        link.style.display = "block";
    } else {
        link.style.display = "none";
    }
}