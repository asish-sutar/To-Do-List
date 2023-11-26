// For single page application
function showSection(sectionId) {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => section.classList.remove("active-section"));

  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.classList.add("active-section");
  }
}

function addTask() {
  // Get form values
  const name = document.getElementById("name").value;
  const taskName = document.getElementById("taskname").value;
  const startDate = document.getElementById("startdate").value;
  const endDate = document.getElementById("enddate").value;

  // Create a new table row
  const table = document.getElementById("taskTable");
  const newRow = table.insertRow(table.rows.length);

  // Insert cells with form values
  const nameCell = newRow.insertCell(0);
  const taskCell = newRow.insertCell(1);
  const startDateCell = newRow.insertCell(2);
  const endDateCell = newRow.insertCell(3);

  nameCell.innerHTML = name;
  taskCell.innerHTML = taskName;
  startDateCell.innerHTML = startDate;
  endDateCell.innerHTML = endDate;
  document.getElementById("addTaskSuccess").innerHTML =
    "Task added successfully!";
}

function editTask() {
  // Get form values
  const editName = document.getElementById("editName").value;
  const editTaskName = document.getElementById("editTaskName").value;
  const editStartDate = document.getElementById("editStartDate").value;
  const editEndDate = document.getElementById("editEndDate").value;

  // Update the first row in the table
  const table = document.getElementById("taskTable");
  if (table.rows.length > 1) {
    const firstRow = table.rows[1];
    firstRow.cells[0].innerHTML = editName;
    firstRow.cells[1].innerHTML = editTaskName;
    firstRow.cells[2].innerHTML = editStartDate;
    firstRow.cells[3].innerHTML = editEndDate;
    document.getElementById("editTaskSuccess").innerHTML =
      "Task edited successfully!";
  }
}

// Function to delete task
function deleteTask() {
  // Get task name to delete
  const deleteTaskName = document.getElementById("deleteTaskName").value;

  // Find and delete the row with the specified task name
  const table = document.getElementById("taskTable");
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[1].innerHTML === deleteTaskName) {
      table.deleteRow(i);
      document.getElementById("deleteTaskSuccess").innerHTML =
        "Task deleted successfully!";
      break;
    }
  }
}
