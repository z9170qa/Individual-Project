function searchItems() {
    const itemName = document.getElementById("searchItem");
    sessionStorage.setItem("itemName", itemName.value);
    window.location.href = "./items.html"
}
