
//selectors
const phoneNumer = document.querySelector('.phone-number');
const phoneName = document.querySelector('.phone-name');
const phoneSubmit = document.querySelector('.submit-btn');
const list = document.querySelector('.phone-list');
const phoneType = document.querySelector('.phone-type');

//event listener
phoneSubmit.addEventListener('click', addItem);

function addItem(e) {
    e.preventDefault();
    const listItem = document.createElement('li');

    const spanNumber = document.createElement('span'); 
    const spanName = document.createElement('span'); 
    const spanType = document.createElement('span'); 

    const delButton = document.createElement('button');
    delButton.classList.add('delBtn');
    delButton.innerHTML = '<i class="bi bi-trash3-fill"></i>';
    spanName.innerText = phoneName.value;
    spanNumber.innerText = phoneNumer.value;
    spanType.innerText = phoneType.value;
    listItem.appendChild(spanNumber);
    listItem.appendChild(spanName);
    listItem.appendChild(spanType);

    listItem.appendChild(delButton);

    list.appendChild(listItem);
    phoneNumer.value = '';
    phoneName.value = '';

    delButton.addEventListener('click', delItem); 
}

function delItem(e) {
    const listItem = e.target.parentNode.parentNode;
    listItem.remove();
}
