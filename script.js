let nameInput = document.getElementById("name");
let presentBtn = document.getElementById("presentBtn");
let absentBtn = document.getElementById("absentBtn");

let total = document.getElementById("total");
let present = document.getElementById("present");
let absent = document.getElementById("absent");

let studentList = document.getElementById("studentList");

let totalCount = 0;
let presentCount = 0;
let absentCount = 0;

// Present Button
presentBtn.addEventListener("click", function () {

    if (nameInput.value == "") {
        alert("Enter Student Name");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
        ${nameInput.value} - Present
        <button>Delete</button>
    `;

    studentList.appendChild(li);

    totalCount++;
    presentCount++;

    total.innerHTML = totalCount;
    present.innerHTML = presentCount;

    nameInput.value = "";

    let deleteBtn = li.querySelector("button");

    deleteBtn.addEventListener("click", function () {
        li.remove();

        totalCount--;
        presentCount--;

        total.innerHTML = totalCount;
        present.innerHTML = presentCount;
    });

});

// Absent Button
absentBtn.addEventListener("click", function () {

    if (nameInput.value == "") {
        alert("Enter Student Name");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
        ${nameInput.value} - Absent
        <button>Delete</button>
    `;

    studentList.appendChild(li);

    totalCount++;
    absentCount++;

    total.innerHTML = totalCount;
    absent.innerHTML = absentCount;

    nameInput.value = "";

    let deleteBtn = li.querySelector("button");

    deleteBtn.addEventListener("click", function () {
        li.remove();

        totalCount--;
        absentCount--;

        total.innerHTML = totalCount;
        absent.innerHTML = absentCount;
    });

});