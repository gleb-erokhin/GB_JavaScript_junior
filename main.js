const productData = JSON.parse(recipes);

const wraper = document.querySelector('.wraper');
productData.forEach(element => {
    wraper.insertAdjacentHTML('beforeend', `
    
    `)
});