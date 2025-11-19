const inp = document.querySelector('#input-field') || document.querySelector('input');
const add = document.getElementById('add');
const clear = document.getElementById('clear');
const ul = document.querySelector('#item-list') || document.querySelector('ul');
const msg = document.querySelector('#messaggio');
let id = 1;




//check se lista vuota
function updateMessageVisibility() {
    if (ul.children.length === 0) {
        msg.style.display = 'block';
    } else {
        msg.style.display = 'none';
    }
}

//crea li con span e bottone
add.addEventListener('click', creaList);

function creaList() {
    const value = inp.value.trim();

    const li = document.createElement('li');
    li.dataset.id = id;

    const textContainer = createTextContainer(value);
    const delBtn = createDeleteButton(li);

    li.appendChild(textContainer);
    li.appendChild(delBtn);
    ul.appendChild(li);

    inp.value = '';
    id++;

    updateMessageVisibility();
}

//span con testo e event listener
function createTextContainer(text) {
    const span = document.createElement('span');
    span.textContent = text + ' ';

    span.addEventListener('click', onTextClick);
    span.addEventListener('dblclick', onTextDblClick);

    return span;
}

//elimina e event listener
function createDeleteButton(li) {
    const btn = document.createElement('button');
    btn.className = 'elimina';
    btn.dataset.id = li.dataset.id;
    btn.textContent = 'X';

    btn.addEventListener('click', () => {
        ul.removeChild(li);
        updateMessageVisibility();
    });

    return btn;
}

//click singolo barra/torna normale
function onTextClick(click) {
    const li = click.currentTarget;
    li.classList.toggle('completed');
/*     if (li.style.textDecoration === 'line-through') {
        li.style.textDecoration = 'none';
        li.classList.toggle('completed');
    } else {
        li.style.textDecoration = 'line-through';
        li.classList.toggle('completed');
    } */
}

//doppio click evidenzia verde/torna normale
function onTextDblClick(dbclick) {
    const li = dbclick.currentTarget;
    li.classList.toggle('highlighted');
/*     if (li.style.backgroundColor === 'lightgreen') {
        li.style.backgroundColor = 'white';
        li.classList.toggle('highlighted');
    } else {
        li.style.backgroundColor = 'lightgreen';
        li.classList.toggle('highlighted');
    } */
}

//rimuovi tutti li
clear.addEventListener('click', () => {
    ul.innerHTML = '';
    updateMessageVisibility();
});


//show all
all.addEventListener('click', showAll);

function showAll() {
    const items = ul.children;
    for (let item of items) {
        item.style.display = 'block';
    }
}

//show completati
completati.addEventListener('click', showCompleted);

function showCompleted() {
    const items = ul.children;
    for (let item of items) {
        if (!item.firstChild.classList.contains('completed')) {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }
    }
}

//show evidenziati
evidenziati.addEventListener('click', showHighlighted);
function showHighlighted() {
    const items = ul.children;
    for (let item of items) {
        if (!item.firstChild.classList.contains('highlighted')) {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }
    }
}
