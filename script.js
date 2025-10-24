const form = document.getElementById("studentForm");
const nameInput = document.getElementById("studentName");
const idInput = document.getElementById("studentId");
const classInput = document.getElementById("studentClass");
const rollInput = document.getElementById("rollNo");
const studentList = document.getElementById("studentList");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  //input from user
  const studentName = nameInput.value.trim();
  const studentId = idInput.value.trim();
  const studentClass = classInput.value.trim();
  const rollNo = rollInput.value.trim();

  // check for empty value
  if (!studentName || !studentId || !studentClass || !rollNo) {
    alert("Please fill all fields!");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.innerHTML = `
    <strong>${studentName}</strong> 
    (ID: ${studentId}) - Class: ${studentClass}, Roll No: ${rollNo}
  `;

  // add to existing list
  studentList.appendChild(li);

  form.reset();
});
