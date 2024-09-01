const form = document.getElementById("form");
const title = document.getElementById("Title");
const dis = document.getElementById("Description");

const body = document.getElementById("table-body");

function renderTable() {
  body.innerHTML = "";

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);

    body.innerHTML += `
      <tr>
        <th>${i + 1}</th>
        <th>${key}</th>
        <th>${value}</th>
        <th><button id="${key + "edit"}" class="edit">Edit</button></th>
        <th><button id="${key + "del"}" class="delete">Delete</button></th>
      </tr>
    `;
  }

  document.querySelectorAll(".edit").forEach((button) => {
    button.addEventListener("click", function () {
      updateRow(button.id.replace("edit", ""));
    });
  });

  document.querySelectorAll(".delete").forEach((button) => {
    button.addEventListener("click", function () {
      deleteRow(button.id.replace("del", ""));
    });
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let title1 = title.value;
  let dis1 = dis.value;

  localStorage.setItem(title1, dis1);

  title.value = "";
  dis.value = "";

  renderTable();
});

function deleteRow(key) {
  localStorage.removeItem(key);
  renderTable();
}

function updateRow(key) {
  let value = prompt(`Change Discription ${key}`);
  localStorage.setItem(key, value);
  renderTable();
}

renderTable();
