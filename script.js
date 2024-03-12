// <!-- Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
// Получите ссылку на первый абзац с классом www. и вывести его в консоль -->


const pEl = document.querySelector('p');
console.log(pEl);

const p2El = document.querySelectorAll('.www');
console.log(p2El);

// обращение к массиву
const p3El = document.querySelectorAll('.www')[0];
console.log(p3El);