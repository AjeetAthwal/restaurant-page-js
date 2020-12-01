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

export default menuLoad;