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

export default contactLoad;