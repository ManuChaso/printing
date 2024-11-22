(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const a=[{name:"SWING TAGS",description:"With various paper stocks and shapes, Swing Tags are wonderful way yo express your message. It can be use in business or special occasion for gifts",quantity:"50",reviews:"75",image:"https://www.fastprinting.com/eu/wp-content/uploads/all-products-01_swing-tags-1.jpg",price:25,seller:"Hey Color",buyLink:"https://www.fastprinting.com/uk/swing-tags"},{name:"CUSTOM PACKAGING",description:"Small and luxurious packaging options are available with various stock and finishes. Enquire to see if your product range is eligible for this wonderful packaging option",quantity:"100",reviews:"90",image:"https://www.fastprinting.com/eu/wp-content/uploads/all-products-02_custom-packaging-1.jpg",price:50,seller:"Paper Boutique",buyLink:"https://www.fastprinting.com/uk/custom-packaging-printing"},{name:"RIBBONS",description:"With differents fabrics options, ribbons are available with up to 60 differents colours as well as beautiful Gold and Silver Foil finishes",quantity:"40",reviews:"55",image:"https://www.fastprinting.com/eu/wp-content/uploads/all-products-03_ribbons-1.jpg",price:35,seller:"Fast Printing",buyLink:"https://www.fastprinting.com/uk/custom-ribbons-printing"},{name:"FLYERS",description:"We have unlimited creative options for you and this is a fantastic way to express your message to the world. From most standard International Paper Sizes to customised sizes, it is an endless challenge for one to create special promotions.",quantity:"150",reviews:"90",image:"https://www.fastprinting.com/eu/wp-content/uploads/all-products-04_flyers-1.jpg",price:60,seller:"Paper Craft",buyLink:"https://www.fastprinting.com/uk/flyer-printing"},{name:"WOVEN LABELS",description:"Available in two different stocks : Satin and Demask, various foldings such as Straight Cut, Endfold, Centerfold and Mitrefold are possible with one colour process. ",quantity:"80",reviews:"80",image:"https://www.fastprinting.com/eu/wp-content/uploads/all-products-05_woven-labels-1.jpg",price:60,seller:"Paper Boutique",buyLink:"https://www.fastprinting.com/uk/custom-woven-label-printing"},{name:"BUSINESS CARDS",description:"Rough yet, fabric like textured Luxe stocks are one of the best quality hard-edge stocks. With its extreme thicknesses, Luxe can bring a strong contrast between its surface and finishes.",quantity:"100",reviews:"90",image:"https://www.fastprinting.com/eu/wp-content/uploads/all-products-06_business-cards-1.jpg",price:50,seller:"Fast Printing",buyLink:"https://www.fastprinting.com/uk/business-cards/luxury-business-cards"},{name:"PRESENTATIONS FOLDERS",description:"Presentation folders are one of the way to encrypt the first impression of your branding",quantity:"40",reviews:"60",image:"https://www.fastprinting.com/eu/wp-content/uploads/all-products-07_presentation-folders-1.jpg",price:40,seller:"Hey Color",buyLink:"https://www.fastprinting.com/uk/presentation-folders-printing"},{name:"STISSUE PAPER",description:"Tissue paper is one of the great ways to customise your product packaging. Its tissue like touch and easy to crumble finish expresses natural yet, luxurious final packaging. This is a fantastic way to upgrade your product as if it is one of the high-end brand finish.",quantity:"120",reviews:"80",image:"https://www.fastprinting.com/eu/wp-content/uploads/all-products-08_tissue-papers-1.jpg",price:50,seller:"Paper Craft",buyLink:"https://www.fastprinting.com/uk/custom-printed-tissue-paper"},{name:"GIFT VOUCHERS",description:"Reward your customers in style or use them as an attractive special offer for your clients. Any retail or service oriented business can benefit from gift cards; as a well-known part of the retail landscape, customers expect both to be able to access them and for them to look unique and exciting. ",quantity:"40",reviews:"60",image:"https://www.fastprinting.com/eu/wp-content/uploads/all-products-09_gift-vouchers-1.jpg",price:35,seller:"Paper Boutique",buyLink:"https://www.fastprinting.com/uk/gift-vouchers-printing"},{name:"STICKERS",description:"Silver and gold foil stickers are a fabulous way to make your message stand out. These stickers look incredibly eye catching and will certainly captivate your customers. Foil finish can be applied to all our indoor purpose materials. This is definitely the option for you, if you want to make a statement.",quantity:"140",reviews:"80",image:"https://www.fastprinting.com/eu/wp-content/uploads/all-products-10_stickers-1.jpg",price:50,seller:"Paper Craft",buyLink:"https://www.fastprinting.com/uk/stickers/gold-silver-foil-stickers"},{name:"FRIDGE MAGNETS",description:"If you are after a smart branding solution, Fast Printing has the perfect solution. A business fridge magnet in Sydney, Brisbane, Melbourne or anywhere else throughout Australia, we can customise fridge magnets to create the exact message you want to stick in your customers mind.",quantity:"100",reviews:"50",image:"https://www.fastprinting.com/eu/wp-content/uploads/all-products-16_fridge-magnets-1.jpg",price:90,seller:"Paper Boutique",buyLink:"https://www.fastprinting.com/uk/fridge-magnets"},{name:"GREETING CARDS",description:"Originated from Egypt and China, Greeting cards are one of the friendliest way to send a good will and celebrate one’s special occasions. From a simple wood cutting messages, it transformed into an expensive handmade cards as a welcome note and a gift. Now it has developed into easily accessible merchandise to honour various events like Christmas, New Year, Thanks Giving and so on. ",quantity:"180",reviews:"60",image:"https://www.fastprinting.com/eu/wp-content/uploads/all-products-20_greeting-cards-1.jpg",price:80,seller:"Hey Color",buyLink:"https://www.fastprinting.com/uk/custom-greeting-cards-printing"}];//!Funcion para el filtro de sellers
function c(){const n=document.getElementById("sellerFilter");[...new Set(a.map(e=>e.seller))].forEach(e=>{const i=document.createElement("option");i.value=e,i.textContent=e,n.appendChild(i)})}//!Funcion para mostrar productos
function l(n){const s=document.getElementById("productsList");s.innerHTML="",n.forEach(e=>{const i=document.createElement("div");i.classList.add("product-card"),i.innerHTML=`
      <img src="${e.image}" alt="${e.name}" />
      <h3>${e.name}</h3>
      <p>${e.description}</p>
      <p>Seller: ${e.seller}</p>
      <p>Quantity: ${e.quantity}</p>
      <p>Reviews: ${e.reviews}</p>
      <p>Price: $${e.price}</p>
      <button class="buy-button" data-link="${e.buyLink}">Shop Now</button>
    `,s.appendChild(i)});//!Evento Button Shop Now
document.querySelectorAll(".buy-button").forEach(e=>{e.addEventListener("click",i=>{const t=i.target.getAttribute("data-link");window.location.href=t})})}//!Funcion de PRODUCTS NOT FOUND
function d(){const n=document.getElementById("noProductsMessage"),s=document.getElementById("suggestedProducts");n.style.display="block";//! Productos sugeridos o aleatorios
const e=a.sort((i,t)=>parseInt(t.reviews)-parseInt(i.reviews)).slice(0,3);l(e),s.style.display="block";//!Evento button Shop Now en sugeridos
document.querySelectorAll(".buy-button").forEach(i=>{i.addEventListener("click",t=>{const o=t.target.getAttribute("data-link");window.location.href=o})})}//!Funcion de filtros
function u(){const n=document.getElementById("sellerFilter").value,s=document.getElementById("priceFilter").value;let e=a;n&&(e=e.filter(i=>i.seller===n),console.log(e)),s&&(e=e.filter(i=>i.price<=s)),e.length>0?(l(e),document.getElementById("noProductsMessage").style.display="none",document.getElementById("suggestedProducts").style.display="none"):(console.log("no products found. showing suggested products"),d())}//!Funcion para limpiar filtros
function p(){document.getElementById("sellerFilter").value="",document.getElementById("priceFilter").value="",l(a),document.getElementById("noProductsMessage").style.display="none"}//!Eventos
document.getElementById("searchButton").addEventListener("click",u);document.getElementById("clearFilters").addEventListener("click",p);//!Inicializar
c();l(a);//!Funcion caret-down
document.getElementById("caret-down").addEventListener("click",()=>{const n=document.getElementById("menu");n.style.display=n.style.display==="block"?"none":"block"});document.addEventListener("DOMContentLoaded",()=>{const n=[{text:"ALL PRODUCTS",href:"https://www.fastprinting.com/uk/printing-service"},{text:"STICKERS",href:"https://www.fastprinting.com/uk/sticker-printing"},{text:"BUSINESS CARDS",href:"https://www.fastprinting.com/uk/business-cards"},{text:"INVITATIONS",href:"https://www.fastprinting.com/uk/invitations-printing"},{text:"GALLERY",href:"https://www.fastprinting.com/uk/inspiration-gallery"},{text:"QUOTE",href:"https://www.fastprinting.com/uk/online-quote"},{text:"SAMPLE REQUEST",href:"https://www.fastprinting.com/uk/fast-printing-sample-request.htm"},{text:"CONTACT",href:"https://www.fastprinting.com/uk/contact-us"}],s=document.getElementById("nav-container"),e=document.createElement("nav"),i=document.createElement("ul");n.forEach(t=>{const o=document.createElement("li"),r=document.createElement("a");r.href=t.href,r.textContent=t.text,o.appendChild(r),i.appendChild(o)}),e.appendChild(i),s.appendChild(e),document.getElementById("brand").addEventListener("click",()=>{document.getElementById("brand").classList.toggle("active"),s.style.display=s.style.display==="block"?"none":"block"})});document.addEventListener("DOMContentLoaded",function(){var n=document.createElement("img");n.src="./banner.png",n.alt="banner",n.classList.add("dynamic-image");var s=document.getElementById("image-container");s.appendChild(n)});//!Footer dinamico
document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("footer-container"),s=`
    <div id="footer">
      <div class="footer-sections">
        <div class="footer-section">
          <h3>POPULAR PRODUCTS</h3>
          <ul>
            <li>Foil (finished) Stickers</li>
            <li>Foil Business Cards</li>
            <li>Wedding Invitations</li>
            <li>Swing Tags</li>
            <li>Presentation Folders</li>
            <li>Envelopes</li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>INFORMATION</h3>
          <ul>
            <li>About Fast Printing</li>
            <li>Terms & Conditions</li>
            <li>Website Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>HELPFUL LINKS</h3>
          <ul>
            <li>Sticker Stocks Guide</li>
            <li>Paper Stock Guide</li>
            <li>Foil Guide</li>
            <li>Extra Finish Guide</li>
            <li>Colour Guide</li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>WHAT’S HOT</h3>
          <ul>
            <li>Luxe Business Cards</li>
            <li>Black Business Cards</li>
            <li>Wax Seal Stickers</li>
            <li>Scodix (Raised) Stickers</li>
            <li>Ribbons</li>
            <li>Woven Labels</li>
          </ul>
        </div>
      </div>
      <div class="social-icons">
        <a href="https://www.facebook.com/fastprinting2005" target="_blank"><i class="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/fastprinting/" target="_blank" title="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
      </div>
      <p>© Fast Printing All rights reserved  By Yanss Villarreal</p>
    </div>
  `;n.innerHTML=s});
