// обработка JSON с помощью ассинхронного запроса,  работает по принципу "обещание"
const url = "./data.json";

// начинаем работать с ассинхроном
async function fetchData(url) {
    // пробуем получить данные, если не получим, то ловим ошибку через catch
    try {
        // ожидаем ответ от сервера или можем получить 404
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`ошибка - ${error}`);
    }
}

const data = await fetchData(url);
console.log(data);