const main = document.getElementById("main");
const itemToDel = document.getElementById("itemToDel");
//const itemName = document.getElementById("searchItem");

function delItem() {
    fetch("http://localhost:8080/item/delete/" + itemToDel.value, {method: "DELETE"})
        .then(() => window.location.href='items.html');

        // .then(() => {window.location.href="./items.html"});
        
}

function showItems() {
console.log("passed through function"); 
itemName = sessionStorage.getItem("itemName");
    if (itemName !== null) {
        console.log("if");
        fetch("http://localhost:8080/item/get/" + itemName)
        .then(res => res.
            json())
        //  .then(json => console.log(json));
        .then(json => displayItems(json)).then( () => sessionStorage.clear());
    
    
} else {
    console.log("else");
    fetch("http://localhost:8080/item/get/all")
        .then(res => res.
            json())
        // .then(json => console.log(json));
        .then(json => displayItems(json));
        

}
}



function displayItems(data) {
    for (let instance of data) {
        let newItem = document.createElement("div");
          
        newItem.className = "card mb-3";     
        // newItem.style = "max-width: 700px";

        let container = document.createElement("div");
        container.className = "row no-gutters";
        newItem.appendChild(container);

        let cardBody = document.createElement("div");
        cardBody.className = "card-body";
        container.appendChild(cardBody);

        let title = document.createElement("h1");
        title.className = "card-title";
        title.innerHTML = "<u>" + instance.name + "</u>";
        cardBody.appendChild(title);

        let info = document.createElement("p");
        info.className = "card-text"
        info.innerHTML = "<b>Type:</b> " + instance.type + "<br><b>Description:</b> " + instance.description + "<br><b>Cost:</b> " 
        + instance.cost;
        cardBody.appendChild(info);



        main.appendChild(newItem);
    }


}

