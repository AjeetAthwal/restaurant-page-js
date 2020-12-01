/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactLoad.js":
/*!****************************!*\
  !*** ./src/contactLoad.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
const contactLoad = (mainDiv, toggle, headers) => {
    const h1Tag = document.createElement("h1");
    h1Tag.innerText = "Contact Us"
    h1Tag.classList.add("subcontent");

    const h2EmailTag = document.createElement("h2");
    h2EmailTag.innerText = "Mobile: 012 - 345 - 678"
    h2EmailTag.classList.add("subcontent");

    const h2MobileTag = document.createElement("h2");
    h2MobileTag.innerText = "Email:  restaurant@restaurant.com"
    h2MobileTag.classList.add("subcontent");

    mainDiv.appendChild(h1Tag);
    mainDiv.appendChild(h2EmailTag)
    mainDiv.appendChild(h2MobileTag)

    toggle("contact", headers);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactLoad);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ "./src/pageLoad.js");
/* harmony import */ var _menuLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuLoad */ "./src/menuLoad.js");
/* harmony import */ var _contactLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactLoad */ "./src/contactLoad.js");
/* harmony import */ var _removeContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeContent */ "./src/removeContent.js");





const headerTag = document.querySelector("header");
const mainDiv = document.querySelector("#content");
const headers = ["home" , "menu", "contact"];

function toggle(header, headers){
    toggleClass(header, headers);
    toggleEventListeners(header, headers);
}

function toggleClass(header, headers){
    headers.forEach(header => document.querySelector(`#${header}-nav`).classList.remove("active"));
    document.querySelector(`#${header}-nav`).classList.add("active");
}

function toggleEventListeners(activeHeader, headers){
    headers.forEach(header => document.querySelector(`#${header}-nav`).removeEventListener("click", load));

    const headersAdj = headers.filter(header => header !== activeHeader);
    headersAdj.forEach(header => document.querySelector(`#${header}-nav`).addEventListener("click", load));
}

function load(e){
    const headerId = e.target.id;
    const header = headerId.substring(0, headerId.indexOf("-"));

    (0,_removeContent__WEBPACK_IMPORTED_MODULE_3__.default)(mainDiv);
    if (header === "home") (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.homeLoad)(mainDiv, toggle, headers);
    else if (header === "menu") (0,_menuLoad__WEBPACK_IMPORTED_MODULE_1__.default)(mainDiv, toggle, headers);
    else if (header === "contact") (0,_contactLoad__WEBPACK_IMPORTED_MODULE_2__.default)(mainDiv, toggle, headers);
}

(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.pageLoad)(headerTag, mainDiv, toggle, headers);

/***/ }),

/***/ "./src/menuLoad.js":
/*!*************************!*\
  !*** ./src/menuLoad.js ***!
  \*************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
class food{
    constructor(name, price, description, imageUrl){
        this._name = name;
        this._price = price;
        this._description = description;
        this._imageUrl = imageUrl;
    }

    get name(){
        return this._name
    }

    set name(name){
        if (typeof name !== "string") throw new Error("Food Name must be a string");
        if (name === "") throw new Error("Food Name must not be empty");
        this._name = name
    }

    get price(){
        return this._price;
    }

    set price(price){
        if (typeof price !== "integer") throw new Error("Food Price must be an integer");
        this._price = price;
    }

    get description(){
        return this._description;
    }

    set description(desc){
        if (typeof desc !== "string") throw new Error("Food Description must be a string");
        this._description = desc;
    }

    get imageUrl(){
        return this._imageUrl;
    }

    set imageUrl(url){
        if (typeof url !== "string") throw new Error("Food Image Url must be a string");
        if (url.match(/\.(jpeg|jpg|gif|png)$/) === null) throw new Error("Food Image url must end in either .jpeg, .jpg, .gif, .png");
        this._imageUrl = url;
    }

    _nameLoad(div){
        const tag = document.createElement("h2");
        tag.innerText = this._name;
        tag.classList.add("menu-name")
        div.appendChild(tag)
    }

    _priceLoad(div){
        const tag = document.createElement("h3");
        tag.innerText = "$" + this._price;
        tag.classList.add("menu-price")
        div.appendChild(tag)
    }

    _descriptionLoad(div){
        const tag = document.createElement("p");
        tag.innerText = this._description;
        tag.classList.add("menu-desc")
        div.appendChild(tag)
    }

    _imageLoad(div){
        const tag = document.createElement("img");
        tag.src = this._imageUrl;
        tag.alt = this._name;
        tag.classList.add("menu-img");
        div.appendChild(tag)
    }

    _textLoad(div){
        const textDiv = document.createElement("div");
        textDiv.classList.add("text-div")
        this._nameLoad(textDiv);
        this._priceLoad(textDiv);
        this._descriptionLoad(textDiv);

        div.appendChild(textDiv);
    }

    load(menuDiv){
        const foodDiv = document.createElement("div");
        foodDiv.classList.add("subcontent");
        foodDiv.classList.add("menu-item");

        this._imageLoad(foodDiv);
        this._textLoad(foodDiv);

        menuDiv.appendChild(foodDiv)
    }
}

const menu = []

const addFoodToMenu = (name, price, description, imageUrl) => {
    menu.push(new food(name, price, description, imageUrl))
}
addFoodToMenu("Wagyu Beef", 159.99, "This just melts in your mouth", "images/wagyu.jpg");
addFoodToMenu("Ribeye Steak", 39.99, "Juicy 8oz Ribeye Steak that will leave you completely satisfied", "images/ribeye-steak.jpg");



const menuLoad = (mainDiv, toggle, headers)=> {
    const h1Tag = document.createElement("h1");
    h1Tag.innerText = "Menu"
    h1Tag.classList.add("subcontent");

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("subcontent")
    menuDiv.classList.add("menu-div")
    menu.forEach(food => food.load(menuDiv));


    mainDiv.appendChild(h1Tag);
    mainDiv.appendChild(menuDiv)

    toggle("menu", headers);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuLoad);

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/*! namespace exports */
/*! export homeLoad [provided] [no usage info] [missing usage info prevents renaming] */
/*! export pageLoad [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeLoad": () => /* binding */ homeLoad,
/* harmony export */   "pageLoad": () => /* binding */ pageLoad
/* harmony export */ });
const homeLoad = (mainDiv, toggle, headers) => {
    const h1Tag = document.createElement("h1");
    h1Tag.innerText = "The Restaurant"
    h1Tag.classList.add("subcontent");

    const imgTag = document.createElement("img");
    imgTag.alt = "Wagyu";
    imgTag.src = "images/wagyu.jpg"
    imgTag.classList.add("subcontent");

    const pTag = document.createElement("p");
    pTag.innerHTML = "Located in my wildest dreams, this restaurant provides you with the finest food from around the world like this juicy Wagyu Beef above. Just <em><b>LOOK</em></b> at that marbling!";
    pTag.classList.add("subcontent");

    mainDiv.appendChild(h1Tag);
    mainDiv.appendChild(imgTag);
    mainDiv.appendChild(pTag);

    toggle("home", headers);
}
const pageLoad = (headerTag, mainDiv, toggle, headers) => {
    document.querySelector("title").innerText = "Restaurant"
    
    const ulTag = document.createElement("ul");
    headers.forEach(header => {
        const liTag = document.createElement("li");
        const aTag = document.createElement("a");

        aTag.id = header + "-nav";
        aTag.innerText = header.charAt(0).toUpperCase() + header.substring(1,);
        aTag.href = "#"

        liTag.appendChild(aTag);
        ulTag.appendChild(liTag);
    })

    headerTag.appendChild(ulTag);
    

    homeLoad(mainDiv, toggle, headers)
}



/***/ }),

/***/ "./src/removeContent.js":
/*!******************************!*\
  !*** ./src/removeContent.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function removeContent(mainDiv){
    while (mainDiv.firstChild !== null) mainDiv.firstChild.remove(mainDiv.firstChild);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeContent);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map