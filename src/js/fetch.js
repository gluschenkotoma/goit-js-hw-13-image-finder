
//   Для HTTP-запросов используй публичный Pixabay API. Зарегистрируйся и получи ключ.
const API_KEY = `22755596-bd5bc4dc11dbf7c870dedd292`;

const BASE_URL = `https://pixabay.com/api/`;
let searchQuery = ``,


// URL-строка запроса:
// https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ

const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=${API_KEY}`

fetch(url).then(response=>console.log(response))