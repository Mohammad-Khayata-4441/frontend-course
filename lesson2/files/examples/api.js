document.addEventListener("DOMContentLoaded", function () {
  const GET_USERS_API = "https://jsonplaceholder.typicode.com/users";

  const userTable = document.getElementById("userTable").querySelector("tbody");

  function loadUsers() {
    fetch(GET_USERS_API).then((result) => {
      result.json().then((users) => {
        renderUsers(
          users.map((user) => {
            const [firstName, lastName] = user.name.split(" ");
            const email = user.email;

            return {
              firstName: firstName,
              lastName: lastName,
              email: email,
            };
          })
        );
      });
    });
  }

  function renderUsers(users) {
    userTable.innerHTML = "";

    users.forEach((usr, i) => {
      const { firstName, lastName, email } = usr;
      const newRow = document.createElement("tr");
      newRow.id = `user-${i + 1}`;
      newRow.innerHTML = `
        <th scope="row">${i}</th>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td><button class="btn btn-danger btn-sm delete-btn">Delete</button></td>
        `;

      userTable.appendChild(newRow);
    });
  }

  loadUsers();
});
