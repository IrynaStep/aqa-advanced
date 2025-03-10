function fetchToDo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .catch((error) => console.error("Wrong todo response", error));
}

function fetchUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .catch((error) => console.error("Wrong user response", error));
}

Promise.all([fetchToDo(), fetchUser()]).then((results) => {
  const [todo, user] = results;
  console.log("Promise.all results:", { todo, user });
});

Promise.race([fetchToDo(), fetchUser()]).then((result) => {
  console.log("Promise.race result:", result);
});
  