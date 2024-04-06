const productData = JSON.parse(recipes);

const wraper = document.querySelector('.wraper');
productData.forEach(element => {
    wraper.insertAdjacentHTML('beforeend', 
    `
        <div class="wraper__container">
            <h1 class="wraper__title">${element.name}</h1>
            <img src="${element.img}" alt="" class="wraper__photo">
            <div class="wraper-contains">
                <div class="wraper-contains__item wraper-contains__item_info">
                    <p>${element.servings} порций</p>
                    <p>${element.calories} ккал</p>
                </div>
                <div class="wraper-contains__item">
                    <ul class="wraper-contains__lists">
                        <li class="wraper-contains__list">
                            <span>Белки</span>
                            <span>${element.bju.protein} gr</span>
                        </li>
                        <li class="wraper-contains__list">
                            <span>Жиры</span>
                            <span>${element.bju.fat} gr</span>
                        </li>
                        <li class="wraper-contains__list">
                            <span>Углеводы</span>
                            <span>${element.bju.carb} gr</span>
                        </li>
                    </ul>
                </div>
                <div class="wraper-contains__item">
                    <ul class="wraper-contains__lists">
                        <li class="wraper-contains__list">
                            <span>Холестерин</span>
                            <span>${element.contains.Cholesterol} gr</span>
                        </li>
                        <li class="wraper-contains__list">
                            <span>Натрий</span>
                            <span>${element.contains.Sodium} gr</span>
                        </li>
                        <li class="wraper-contains__list">
                            <span>Кальций</span>
                            <span>${element.contains.Calcium} gr</span>
                        </li>
                        <li class="wraper-contains__list">
                            <span>Магний</span>
                            <span>${element.contains.Magnesium} gr</span>
                        </li>
                        <li class="wraper-contains__list">
                            <span>Калий</span>
                            <span>${element.contains.Potassium} gr</span>
                        </li>
                        <li class="wraper-contains__list">
                            <span>Железо</span>
                            <span>${element.contains.Iron} gr</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `)
});