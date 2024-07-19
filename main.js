function getElement(selector) {
    return document.querySelector(selector);
}

const elInput = getElement("input");
const elBtn = getElement("#addBtn");
const elClearBtn = getElement("#clearBtn");
const elWrapper = getElement(".wrapper");
const elCounts = getElement(".all-count");
let todos = [
    {
        id: 1,
        title: "Kartoshka sotvolish",
    },
    {
        id: 2,
        title: "Dars qilish",
    },
    {
        id: 3,
        title: "nimadir sotvolish",
    },
    {
        id: 4,
        title: "nimadir qilish",
    },
];

function showTodos() {
    elWrapper.textContent = "";
    todos.forEach((item, i) => {
        const newElement = document.createElement("div");

        newElement.style.backgroundColor = "#f2f2f2";
        newElement.style.borderRadius = "5px";
        newElement.className = "d-flex justify-content-between align-items-center p-3 mt-2";

        newElement.innerHTML = `
        <span> ${todos[i].title} </span>
           <div>
            <button data-id="${todos[i].id}" class="btn btn-danger">X</button>
        <button data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${todos[i].id}" class="edit btn btn-info">Edit</button>
           </div>
        `;

        elWrapper.appendChild(newElement);
    });

    elCounts.textContent = `You have ${todos.length} pending tasks`;
}

showTodos();

elClearBtn.addEventListener("click", () => {
    todos = [];
    showTodos();
});

elBtn.addEventListener("click", () => {
    const newTodo = {
        title: elInput.value,
        id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
    };
    todos.push(newTodo);

    showTodos();

    elInput.value = "";
});

elWrapper.addEventListener("click", (evt) => {
    console.log(evt);

    if (evt.target.className === "btn btn-danger") {
        const id = Number(evt.target.dataset.id);

        todos = todos.filter((todo) => todo.id !== id);
        showTodos();
    }
});
