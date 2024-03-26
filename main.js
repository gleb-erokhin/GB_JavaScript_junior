const userData = JSON.parse(data);
console.log(userData);

const divContentEl = document.querySelector(".content");

userData.forEach((element) => {
  divContentEl.insertAdjacentHTML(
    "beforeend",
    `
    <div class = 'wrapper'>
        <h2>${element.name}</h2>
        <h3>${element.username}</h3>
        <p>${element.email}</p>
        <p>${element.address.city}</p>
        <a href="tel:+${element.phone}">${element.phone}</a>
    </div>
    `
  );
});
