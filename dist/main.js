(()=>{"use strict";const e=(e,t,n)=>{const c=document.createElement("h1");c.innerText="The Restaurant",c.classList.add("subcontent");const a=document.createElement("img");a.alt="Wagyu",a.src="images/wagyu.jpg",a.classList.add("subcontent");const o=document.createElement("p");o.innerHTML="Located in my wildest dreams, this restaurant provides you with the finest food from around the world like this juicy Wagyu Beef above. Just <em><b>LOOK</em></b> at that marbling!",o.classList.add("subcontent"),e.appendChild(c),e.appendChild(a),e.appendChild(o),t("home",n)},t=document.querySelector("header"),n=document.querySelector("#content"),c=["home","menu","contact"];function a(e,t){!function(e,t){t.forEach((e=>document.querySelector(`#${e}-nav`).classList.remove("active"))),document.querySelector(`#${e}-nav`).classList.add("active")}(e,t),function(e,t){t.forEach((e=>document.querySelector(`#${e}-nav`).removeEventListener("click",o))),t.filter((t=>t!==e)).forEach((e=>document.querySelector(`#${e}-nav`).addEventListener("click",o)))}(e,t)}function o(t){const o=t.target.id,s=o.substring(0,o.indexOf("-"));(function(e){for(;null!==e.firstChild;)e.firstChild.remove(e.firstChild)})(n),"home"===s?e(n,a,c):"menu"===s?((e,t,n)=>{const c=document.createElement("h1");c.innerText="Menu",c.classList.add("subcontent"),e.appendChild(c),t("menu",n)})(n,a,c):"contact"===s&&((e,t,n)=>{const c=document.createElement("h1");c.innerText="Contact Us",c.classList.add("subcontent");const a=document.createElement("h2");a.innerText="Mobile: 012 - 345 - 678",a.classList.add("subcontent");const o=document.createElement("h2");o.innerText="Email:  restaurant@restaurant.com",o.classList.add("subcontent"),e.appendChild(c),e.appendChild(a),e.appendChild(o),t("contact",n)})(n,a,c)}((t,n,c,a)=>{document.querySelector("title").innerText="Restaurant";const o=document.createElement("ul");a.forEach((e=>{const t=document.createElement("li"),n=document.createElement("a");n.id=e+"-nav",n.innerText=e.charAt(0).toUpperCase()+e.substring(1),n.href="#",t.appendChild(n),o.appendChild(t)})),t.appendChild(o),e(n,c,a)})(t,n,a,c)})();