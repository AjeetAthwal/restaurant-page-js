const pageLoad = () => {
    const mainDiv = document.querySelector("#content");
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
}

export default pageLoad;