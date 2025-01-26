async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataConatainer = document.getElementById("api-data");

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("HTTP Error! Status: &{response.status}");
    }

    const users = await response.json();

    dataConatainer.innerHTML = '';

    const userList = document.createElement("ul");
    users.forEach(user => {
      const listItem = document.createElement("li");
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    dataConatainer.appendChild(userList);

  } catch {
    
    dataConatainer.innerHTML = '';
    dataConatainer.textContent = "Failed to load user data.";
    console.error("Error fetching user data:", error);
  }
}

document.addEventListener("DOMContentLoaded", fetchUserData);
