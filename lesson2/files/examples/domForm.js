document.addEventListener("DOMContentLoaded", function () {


  const userForm = document.getElementById("userForm");
  const userTable = document.getElementById("userTable").querySelector("tbody");

  // Counter to keep track of the number of users
  let userCount = 3; // Initial count based on the existing table rows

  // Function to add a new user to the table
  function addUser(firstName, lastName, email) {
    const newRow = document.createElement("tr");
    newRow.id = `user-${userCount + 1}`
    newRow.innerHTML = `
        <th scope="row">${++userCount}</th>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td><button class="btn btn-danger btn-sm delete-btn">Delete</button></td>

      `;
    userTable.appendChild(newRow);
  }

  // Event listener for form submission
  userForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get form inputs
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const emailInput = document.getElementById("email");

    // Get values from inputs
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();

    // Validate inputs
    if (firstName === "" || lastName === "" || email === "") {
      alert("Please fill in all fields.");
      return;
    }

    // Add user to the table
    addUser(firstName, lastName, email);

    // Clear form inputs
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";

    // Optionally, you can focus on the first input field after submission
    firstNameInput.focus();
  });

  userTable.addEventListener("click", function (event) {


    if (event.target.classList.contains("delete-btn")) {
      const rowId = event.target.closest("tr").id;
      deleteUser(rowId);
    }
  });


  function deleteUser(rowId) {
    console.log(userTable)
    const rowElement = userTable.querySelector("#" + rowId)
    userTable.removeChild(rowElement);
    userCount--; // Decrement user count when a row is deleted
  }

});
