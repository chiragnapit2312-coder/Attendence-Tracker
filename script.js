// ---------- Login User ----------

let user = JSON.parse(localStorage.getItem("login"));

document.getElementById("userName").innerHTML =
"Welcome, " + user.name;


// ---------- Elements ----------

let name = document.getElementById("name");
let presentBtn = document.getElementById("presentBtn");
let absentBtn = document.getElementById("absentBtn");
let studentList = document.getElementById("studentList");

let total = document.getElementById("total");
let present = document.getElementById("present");
let absent = document.getElementById("absent");

let logout = document.getElementById("logout");


// ---------- Logout ----------

logout.addEventListener("click", function () {

    localStorage.removeItem("login");

    window.location.href = "login.html";

});


// ---------- Attendance Data ----------

let students = JSON.parse(localStorage.getItem("students")) || [];


// ---------- Save Data ----------

function saveData(){

    localStorage.setItem("students", JSON.stringify(students));

}


// ---------- Count ----------

function updateCount(){

    let totalCount = students.length;

    let presentCount = 0;

    let absentCount = 0;

    students.forEach(function(student){

        if(student.status=="Present"){
            presentCount++;
        }
        else{
            absentCount++;
        }

    });

    total.innerHTML = totalCount;

    present.innerHTML = presentCount;

    absent.innerHTML = absentCount;

}


// ---------- Show Students ----------

function showStudents(){

    studentList.innerHTML="";

    students.forEach(function(student,index){

        let li=document.createElement("li");

        li.innerHTML=
        student.name+" - "+student.status+
        " <button onclick='deleteStudent("+index+")'>Delete</button>";

        studentList.appendChild(li);

    });

    updateCount();

}
// ---------- Add Student ----------

function addStudent(status){

    let studentName = name.value.trim();

    if(studentName==""){
        alert("Enter Student Name");
        return;
    }

    students.push({
        name: studentName,
        status: status
    });

    saveData();

    showStudents();

    name.value="";

}


// ---------- Delete Student ----------

function deleteStudent(index){

    students.splice(index,1);

    saveData();

    showStudents();

}


// ---------- Buttons ----------

presentBtn.addEventListener("click",function(){

    addStudent("Present");

});


absentBtn.addEventListener("click",function(){

    addStudent("Absent");

});


// ---------- First Load ----------

showStudents();