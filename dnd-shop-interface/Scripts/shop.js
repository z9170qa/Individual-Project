function showInvShop() {
    const shopMain = document.getElementById("shopMain");
    const invMain = document.getElementById("invMain");
    showShop();
    showInventory();
}

function showShop() {


    fetch("http://localhost:8080/shop/get/all")
        .then(res => res.json())
        .then(json => displayShopItems(json));

}



function displayShopItems(data) {
    for (let instance of data) {
        let newItem = document.createElement("div");

        newItem.className = "card mb-3";

        let container = document.createElement("div");
        container.className = "row no-gutters";
        newItem.appendChild(container);

        let cardBody = document.createElement("div");
        cardBody.className = "card-body";
        container.appendChild(cardBody);

        let title = document.createElement("h1");
        title.className = "card-title";
        title.innerHTML = "<u>" + instance.item.name + "</u>";
        cardBody.appendChild(title);

        let info = document.createElement("p");
        info.className = "card-text"
        info.innerHTML = "<b>Type:</b> " + instance.item.type + "<br><b>Description:</b> " + instance.item.description + "<br><b>Cost:</b> "
            + instance.item.cost + "<br><b>Quantity:</b> " + instance.quantity;
        cardBody.appendChild(info);



        shopMain.appendChild(newItem);
    }
}

function showInventory() {


    fetch("http://localhost:8080/inventory/get/all")
        .then(res => res.json())
        .then(json => displayInvItems(json));

}



function displayInvItems(data) {
    for (let instance of data) {
        let newItem = document.createElement("div");

        newItem.className = "card mb-3";

        let container = document.createElement("div");
        container.className = "row no-gutters";
        newItem.appendChild(container);

        let cardBody = document.createElement("div");
        cardBody.className = "card-body";
        container.appendChild(cardBody);

        let title = document.createElement("h1");
        title.className = "card-title";
        title.innerHTML = "<u>" + instance.item.name + "</u>";
        cardBody.appendChild(title);

        let info = document.createElement("p");
        info.className = "card-text"
        info.innerHTML = "<b>Type:</b> " + instance.item.type + "<br><b>Description:</b> " + instance.item.description + "<br><b>Cost:</b> "
            + instance.item.cost;
        cardBody.appendChild(info);



        invMain.appendChild(newItem);
    }


}

function buyItem() {
    const itemToBuy = document.getElementById("buyItem");
    fetch("http://localhost:8080/shop/delete/" + buyItem.value, { method: "DELETE" })
        .then(res => res.json())
        .then(() => alert("Item " + buyItem.value + "purchased from shop!"))
        .then(fetch("http://localhost:8080/inventory/post/" + buyItem.value, { method: "POST" }))
        .then(res => res.json())
        .then(json => location.reload(true));
}