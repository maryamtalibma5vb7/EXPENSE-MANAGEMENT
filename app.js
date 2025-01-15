var getul = document.getElementById('ul');
var total = 0;
var totalDisplay = document.getElementById('total');

function addItem() {
    var a = document.getElementById("inp");
    var priceInput = document.getElementById("price");
    var priceValue = Number(priceInput.value);

    if (isNaN(priceValue) || priceValue <= 0) {
        alert("Please enter a valid number for the price.");
        priceInput.value = '';
        return;
    }

    var li = document.createElement('li');
    li.textContent = a.value + " : " + priceValue;
    li.setAttribute('price', priceValue);
    getul.appendChild(li);

    total += priceValue;
    updateTotal();

    a.value = '';
    priceInput.value = '';

    var deletebtn = document.createElement('button');
    deletebtn.textContent = 'Delete';
    li.appendChild(deletebtn);
    deletebtn.setAttribute('onclick', 'deleteItem(this)');

    var editbtn = document.createElement('button');
    editbtn.textContent = 'Edit';
    li.appendChild(editbtn);
    editbtn.setAttribute('onclick', 'editItem(this)');
}

function deleteAll() {
    getul.innerHTML = '';
    total = 0;
    updateTotal();
}

function deleteItem(e) {
    var li = e.parentNode;
    var price = li.getAttribute('price');
    total -= Number(price);
    updateTotal();
    li.remove();
}

function editItem(e) {
    var li = e.parentNode;
    var itemText = li.textContent.split(" : Rs ")[0];
    var price = li.getAttribute('price');

    var newName = prompt('Enter new item name', itemText);
    var newPrice = prompt('Enter new price', price);

    var newPriceValue = Number(newPrice);
    if (isNaN(newPriceValue) || newPriceValue <= 0) {
        alert("Please enter a valid number for the price.");
        return;
    }

    if (newName && newPrice) {
        total -= Number(price);
        total += newPriceValue;
        updateTotal();

        li.textContent = newName + " : Rs " + newPriceValue; 
        li.setAttribute('price', newPriceValue);

        var deletebtn = document.createElement('button');
        deletebtn.textContent = 'Delete';
        li.appendChild(deletebtn);
        deletebtn.setAttribute('onclick', 'deleteItem(this)');

        var editbtn = document.createElement('button');
        editbtn.textContent = 'Edit';
        li.appendChild(editbtn);
        editbtn.setAttribute('onclick', 'editItem(this)');
    }
}

function updateTotal() {
    totalDisplay.textContent = 'Total:Rs ' + total;
}
