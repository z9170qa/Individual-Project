function createItem() {
    const crItemName = document.getElementById("createItemName");
    const crItemType = document.getElementById("createItemType");
    const crItemCost = document.getElementById("createItemCost");
    const crItemDesc = document.getElementById("createItemDesc");
    // if (crItemType in ["weapon, adventure gear, tools"]) {
    fetch('http://localhost:8080/item/post/', {
        method: 'POST',
        body: JSON.stringify({
            "name": crItemName.value,
            "type": crItemType.value,
            "cost": crItemCost.value,
            "description": crItemDesc.value,
        }),
        headers: { 'Content-Type': 'application/json' }
    }).then(() => {
        window.location.href = "./items.html"
    });
}

