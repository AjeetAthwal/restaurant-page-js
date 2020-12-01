const contactLoad = (mainDiv, toggle, headers) => {
    const h1Tag = document.createElement("h1");
    h1Tag.innerText = "Contact Us"
    h1Tag.classList.add("subcontent");

    mainDiv.appendChild(h1Tag);

    toggle("contact", headers);
}

export default contactLoad;