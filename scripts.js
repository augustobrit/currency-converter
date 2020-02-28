// Callbacks
// Promises
// Async/Await

const GITHUB_API = "https://api.github.com/users";

const getUser = async userName => {
  let user = null;
  try {
    user = await (await fetch(`${GITHUB_API}/${user}`)).json();
    return user;
  } catch (error) {
    console.log("Error", error);
  }
};

getUser("augustobrit").then(console.log);
