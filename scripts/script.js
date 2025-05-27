document.addEventListener("DOMContentLoaded", () => {
    // * 1. Начало
    // * 2. Получаем все элементы изображений с описанием
    // * 3. Для каждого изображения ( проверяем есть ли такие изображения):
    // * 3.1. Добавляем обработчик наведения курсора на изображение:
    // * 3.1.1. Да:
    // * 3.1.1.1. показываем текст при наведении.
    // * 3.1.2. Нет: продолжаем.
    // * 3.2. Добавляем обработчик курсос уходит с изображения:
    // * 3.3.1. Да:
    // * 3.3.1.1. Скрываем элемент с описанием.
    // * 3.3.2. Нет: продолжаем
    // * 4. Конец

    console.log('Скрипт отработал корректно')

    const intensiveImg = document.querySelectorAll(".famous__item");
    const dataTitlefamous= [
      "Виктор Михайлович Васнецов",
      "Иван Иванович Шишкин",
      "Автор Неизвестен",
    ];

    if (intensiveImg) {
      intensiveImg.forEach((item, i) => {
        item.querySelector(".famous__name").textContent = dataTitlefamous[i];
      });
    }
});

// 2. Динамический вывод навигационного меню
const headerMenu = document.querySelector('.header__menu');
if (headerMenu){
          const headerList = headerMenu.querySelector('.header__list');
          const menuData = {
            link1: {
                link: '#',
                title: 'Главная',
            },
            link2: {
                link: '#',
                title: 'Словарик музеолога',
            },
            link3: {
                link: '#',
                title: 'Полезные источники',
            },
            link4: {
                link: '#',
                title: 'Музеи г. Чистополь',
            }
        }
const createLink = (UrlLink, title) =>{
     const link = `
            <li class="header__item"><a href="${UrlLink}" class="header__link">${title}</a></li>
            `;
            return link;
        }
for (const linkItem in menuData) {
  const link = menuData[linkItem];
  const linkIndex = createLink(link.UrlLink, link.title);
  headerList.insertAdjacentHTML('beforeend', linkIndex);

  }
}

console.log('Навигацинное меню создано с помощью javascript!');