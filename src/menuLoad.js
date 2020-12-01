const menuLoad = (mainDiv, toggle) => {
    const h1Tag = document.createElement("h1");
    h1Tag.innerText = "Menu"
    h1Tag.classList.add("subcontent");

    mainDiv.appendChild(h1Tag);

    toggle("menu");
}

export default menuLoad;