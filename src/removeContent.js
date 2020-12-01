function removeContent(mainDiv){
    while (mainDiv.firstChild !== null) mainDiv.firstChild.remove(mainDiv.firstChild);
}

export default removeContent;