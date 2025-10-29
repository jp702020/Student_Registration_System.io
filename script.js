const form = document.getElementById("studentForm");
const nameInput = document.getElementById("studentName");
const idInput = document.getElementById("studentId");
const classInput = document.getElementById("studentClass");
const rollInput = document.getElementById("rollNo");
const studentList = document.getElementById("studentList");

let editMode = null; // store which list item is being edited

// Handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const studentName = nameInput.value.trim();
  const studentId = idInput.value.trim();
  const studentClass = classInput.value.trim();
  const rollNo = rollInput.value.trim();

  if (!studentName || !studentId || !studentClass || !rollNo) {
    alert("Please fill all fields!");
    return;
  }

  // If editing an existing student
  if (editMode) {
    editMode.querySelector(".student-details").innerHTML = `
      <strong>${studentName}</strong> 
      (ID: ${studentId}) - Class: ${studentClass}, Roll No: ${rollNo}
    `;
    editMode = null;
    form.reset();
    return;
  }

  // Create new list item
  const li = document.createElement("li");
  li.innerHTML = `
    <span class="student-details">
      <strong>${studentName}</strong> 
      (ID: ${studentId}) - Class: ${studentClass}, Roll No: ${rollNo}
    </span>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  `;

  studentList.appendChild(li);
  form.reset();
});

// Handle Edit & Delete actions
studentList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove(); // remove the list item
  }

  if (e.target.classList.contains("edit-btn")) {
    const li = e.target.parentElement;
    const text = li.querySelector(".student-details").textContent;

    // Extract details
    const nameMatch = text.match(/^(.*?)\s*\(ID:/);
    const idMatch = text.match(/ID:\s*(.*?)\)/);
    const classMatch = text.match(/Class:\s*(.*?),/);
    const rollMatch = text.match(/Roll No:\s*(.*)$/);

    nameInput.value = nameMatch ? nameMatch[1].trim() : "";
    idInput.value = idMatch ? idMatch[1].trim() : "";
    classInput.value = classMatch ? classMatch[1].trim() : "";
    rollInput.value = rollMatch ? rollMatch[1].trim() : "";

    editMode = li; // track current editing item
  }
});
