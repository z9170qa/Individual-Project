function updateItem() {
    const upItem = document.getElementById("itemToUpdate")
    const upItemName = document.getElementById("updateItemName");
    const upItemType = document.getElementById("updateItemType");
    const upItemCost = document.getElementById("updateItemCost");
    const upItemDesc = document.getElementById("updateItemDesc");
    fetch('http://localhost:8080/item/update/' + upItem.value, {
        method: 'PUT',
        body: JSON.stringify({
            "name": upItemName.value,
            "type": upItemType.value,
            "cost": upItemCost.value,
            "description": upItemDesc.value,
        }),
        headers: {'Content-Type': 'application/json'}
    }).then(() => {
        window.location.href = "./items.html"
    });
}