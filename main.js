function getElement(selector, parent = document) {
    return parent.querySelector(selector);
}

const elInput = getElement("input");
const elBtn = getElement("#addBtn");
const elClearBtn = getElement("#clearBtn");
const elWrapper = getElement(".wrapper");
const elCounts = getElement(".all-count");
const elTemplate = getElement("#template");
const elEditInput = getElement("#edit-input");
const elEditBtn = getElement("#edit-btn");

//2
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
    elWrapper.textContent = undefined;

    todos.forEach((item, i) => {
        const newElementFromTemplate = elTemplate.content.cloneNode(true);

        const elTitle = getElement("span", newElementFromTemplate);
        const elDeleteBtn = getElement("#delete-btn", newElementFromTemplate);
        const elEditBtn = getElement(".edit", newElementFromTemplate);
        const elImg = getElement("#img", newElementFromTemplate);

        elImg.src = "./po.png";

        elDeleteBtn.dataset.id = todos[i].id;
        elEditBtn.dataset.id = todos[i].id;

        elTitle.textContent = i + 1 + " " + todos[i].title;

        elWrapper.appendChild(newElementFromTemplate);
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
    if (evt.target.className === "btn btn-danger") {
        const id = Number(evt.target.dataset.id);

        todos = todos.filter((todo) => todo.id !== id);
        showTodos();
    }
});
