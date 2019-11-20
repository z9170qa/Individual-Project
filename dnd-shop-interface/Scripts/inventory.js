const main = document.getElementById("main"); 
const itemToDrop = document.getElementById("invItem");


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



        main.appendChild(newItem);
    }


}

function delItem() {
    fetch("http://localhost:8080/inventory/delete/" + itemToDrop.value, {method: "DELETE"})
        .then(res => res.json())
        .then(json => location.reload(true));
        
        
        
        
}

