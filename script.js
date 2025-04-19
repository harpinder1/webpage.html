const restaurantList = document.getElementById("restaurantList");
const searchBox = document.getElementById("searchBox");

const restaurants = [
  { name: "Pizza Palace", image: "default-pizza-outlets-13.jpg.avif" },
  { name: "Burger Town", image: "burger.jpeg" },
  { name: "Sushi World", image: "images.jpeg" },
  { name: "Curry House", image: "istockphoto-673858790-612x612.jpg" },
  { name: "Taco Villa", image: "taco.jpg" },
  { name: "Noodle Nook", image: "veg-hakka-noodles-recipe-with-step-by-step-instructions.jpg" },
];

function displayRestaurants(data) {
  restaurantList.innerHTML = "";
  data.forEach(res => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <img src="${res.image}" alt="${res.name}">
      <h3>${res.name}</h3>
    `;
    restaurantList.appendChild(div);
  });
}

displayRestaurants(restaurants);

searchBox.addEventListener("input", () => {
  const value = searchBox.value.toLowerCase();
  const filtered = restaurants.filter(r => r.name.toLowerCase().includes(value));
  displayRestaurants(filtered);
});
