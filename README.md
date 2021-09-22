Создает DOM-элемент следующей структуры. Можно использовать шаблонизацию.

<form class="search-form" id="search-form">
  <input
    type="text"
    name="query"
    autocomplete="off"
    placeholder="Search images..."
  />
</form>
Галерея изображений
Создает DOM-элемент следующей структуры.

<ul class="gallery">
  <!-- Список <li> с карточками изображений -->
</ul>
Карточка изображения
Создает DOM-элемент следующей структуры.

<div class="photo-card">
  <img src="" alt="" />

  <div class="stats">
    <p class="stats-item">
      <i class="material-icons">thumb_up</i>
      1108
    </p>
    <p class="stats-item">
      <i class="material-icons">visibility</i>
      320321
    </p>
    <p class="stats-item">
      <i class="material-icons">comment</i>
      129
    </p>
    <p class="stats-item">
      <i class="material-icons">cloud_download</i>
      176019
    </p>
  </div>
</div>
Для иконок используются Material icons. Для их корректной работы достаточно в HTML-файле добавить ссылку на веб-шрифт.

<link
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet"
/>
Или добавив npm-пакет material-design-icons и импортировав веб-шрифт в index.js.

Кнопка 'Load more' При нажатии на кнопку Load more должна догружаться следующая порция изображений и
рендериться вместе с предыдущими.

Страница должна автоматически плавно проскроливаться после рендера изображений, чтобы перевести
пользователя на следующие загруженные изображения. Используй метод Element.scrollIntoView().

const element = document.getElementById('.my-element-selector'); element.scrollIntoView({ behavior:
'smooth', block: 'end', }); Дополнительно Можно добавить плагин нотификаций, например pnotify, и
показывать нотификации на результат HTTP-запросов Можно добавить функционал отображения большой
версии изображения через плагин модального окна, например basicLightbox, при клике на изображение
галереи Вместо кнопки Load more можно сделать бесконечную загрузку при скроле используя Intersection
Observer.
