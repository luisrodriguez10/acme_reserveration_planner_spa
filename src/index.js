const api = require("./api");
const { fetchUsers, fetchRestaurants } = api;
const userList = document.querySelector("#users-list");
const restaurantList = document.querySelector("#restaurants-list");

const renderUsers = async () => {
  const users = await fetchUsers();
  const html = users
    .map(
      (user) =>
        `
            <li>
                ${user.name}
            </li>
        `
    )
    .join(" ");
  userList.innerHTML = html;
};

const renderRestaurants = async () => {
  const restaurants = await fetchRestaurants();
  const html = restaurants
    .map(
      (restaurant) =>
        `
                <li>
                    ${restaurant.name}
                </li>
            `
    )
    .join(" ");

  restaurantList.innerHTML = html;
};

const init = async () => {
  try {
    renderUsers();
    renderRestaurants();
  } catch (ex) {
    console.log(ex);
  }
};

init();
