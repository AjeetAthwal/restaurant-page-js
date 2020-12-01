import {homeLoad, pageLoad} from "./pageLoad";
import menuLoad from "./menuLoad";
import contactLoad from "./contactLoad";
import removeContent from "./removeContent";

const headerTag = document.querySelector("header");
const mainDiv = document.querySelector("#content");
const headers = ["home" , "menu", "contact"];

function toggle(header){
    const headers = ["home" , "menu", "contact"];
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

    removeContent(mainDiv);
    if (header === "home") homeLoad(mainDiv, toggle);
    else if (header === "menu") menuLoad(mainDiv, toggle);
    else if (header === "contact") contactLoad(mainDiv, toggle);
}

pageLoad(headerTag, mainDiv, toggle, headers);