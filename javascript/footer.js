var body = document.getElementById('body');
var footer = document.createElement('footer');
body.appendChild(footer);



var footer_widget = [{

        anchore01: "index.html",
        anchore02: "men.html",
        anchore03: "women.html",
        anchore04: "kids.html",
        anchore05: "living.html",
        anchore06: "offer.html"
    },
    {

        link01: "index.html",
        link02: "men.html",
        link03: "women.html",
        link04: "kids.html",
        link05: "living.html",
        link06: "offers.html"
    }, {
        andro: "images/app-link-image/andro_app.png",
        ios: "images/app-link-image/ios_app.png",
    }, {
        offer01: "images/app-link-image/offer-1.png",
        offer02: "images/app-link-image/offer-2.png",
        offer03: "images/app-link-image/offer-3.png"
    }

];

document.querySelector('footer').innerHTML += `<div class="container-fluid"><div class="row"></div></div>`;
document.querySelector('footer>.container-fluid>.row').innerHTML +=
    `

    <div class="col-md-3">
        <div class="footer-widget-01 pad-10">
            <p><b>ONLINE SHOPPING</b></p>
            <ul>
                <li><a href="${footer_widget[0].anchore01}">HOME</a></li>
                <li><a href="${footer_widget[0].anchore02}">MEN</a></li>
                <li><a href="${footer_widget[0].anchore03}">WOMEN</a></li>
                <li><a href="${footer_widget[0].anchore04}">KIDS</a></li>
                <li><a href="${footer_widget[0].anchore05}">LIVING</a></li>
                <li><a href="${footer_widget[0].anchore06}">OFFERS</a></li>
            </ul>
        </div>
    </div>
    <div class="col-md-3">
        <div class="footer-widget-01 pad-10">
            <p><b>USEFULL LINKS</b></p>
            <ul>
                <li><a href="${footer_widget[1].link01}">CART</a></li>
                <li><a href="${footer_widget[1].link02}">OFFERS</a></li>
                <li><a href="${footer_widget[1].link03}">WISHLIST</a></li>
            </ul>
        </div>
    </div>
    <div class="col-md-3">
        <div class="footer-widget-01 pad-10">
            <p><b>APP EXPERIENCE LINKS</b></p>
            <ul>
                <li><a href="#"><img src="${footer_widget[2].andro}"></a></li>
                <li><a href="#"><img src="${footer_widget[2].ios}"></a></li>
            </ul>
        </div>
    </div>
    <div class="col-md-3">
        <div class="footer-widget-01 pad-10">
            <p><b>MYNTRA OFFERS</b></p>
            <ul>
               <li><span><img src="${footer_widget[3].offer01}"><b>100% ORIGINAL</b> &nbsp;&nbsp;<br>guarantee for all products at myntra.com</span></li>
               <li><span><img src="${footer_widget[3].offer02}"><b>Return within 30days</b><br>&nbsp;&nbsp;of receiving your order</span></li>
               <li><span><img src="${footer_widget[3].offer03}"><b>Get free delivery</b>&nbsp;&nbsp; for every order above Rs. 799</span></li>
            </ul>
        </div>
    </div>

`;