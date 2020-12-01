const homeLoad = (mainDiv, toggle) => {
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

    toggle("home");
}
const pageLoad = (headerTag, mainDiv, toggle, headers) => {
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
    

    homeLoad(mainDiv, toggle)
}

export {homeLoad, pageLoad};