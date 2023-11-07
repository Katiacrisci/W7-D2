
const input = document.querySelector("input");
const saveButton = document.getElementById("save");

saveButton.onclick = event => {
    const name = input.value;
    localStorage.setItem("name", JSON.stringify(name));

}

const removeButton = document.getElementById("remove");
removeButton.onclick = event => {
    localStorage.removeItem("name");
    input.value = "";
}
