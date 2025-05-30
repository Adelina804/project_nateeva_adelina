"use strict";

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
  const intensiveImg = document.querySelectorAll('.famous__link');

  intensiveImg.forEach((item, index) => {
    const intensiveText = document.querySelectorAll('.intensive__description');

    item.addEventListener('click', () => {
      item.style.opacity = 0.5;
      intensiveText[index].removeAttribute('hidden');
    });
    // item.addEventListener('mouseleave', () => {
    //   item.style.opacity = 1;
    //   intensiveText[index].setAttribute('hidden', true);

    // });
  });






  console.log('Скрипт отработал корректно')

  const intensiveImg1 = document.querySelectorAll(".famous__item");
  const dataTitlefamous = [
    "Виктор Михайлович Васнецов",
    "Иван Иванович Шишкин",
    "Автор Неизвестен",
  ];

  if (intensiveImg1) {
    intensiveImg1.forEach((item, i) => {
      item.querySelector(".famous__name").textContent = dataTitlefamous[i];
    });
  }

  // 2. Динамический вывод навигационного меню
  const headerMenu = document.querySelector('.header__menu');
  if (headerMenu) {
    const headerList = document.querySelector('.menu');
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
    const createLink = (UrlLink, title) => {
      const link = `
            <li class="menu__item"><a href="${UrlLink}" class="menu__link">${title}</a></li>
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

  const cardsCon = document.querySelector(".dictionary");
    if (cardsCon) {
        const cardList = cardsCon.querySelector(".dictionary__list");
 
        // Пример URL для получения данных с сервера
        const apiUrl = "data.json";

         // Функция для создания карточки
        const createCard = (
            
            title,
            description
        ) => {
            // Шаблонные строки и подстановки
            const card = `
                <li class="dictionary__item" href="#">
                    <h3 class="dictionary__title">${title}</h3>
                    <p class="dictionary__description">${description}</p>
                </li>
            `;
            return card;
        };
        // Загрузка данных с сервера
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log(data); // Данные
                console.log(typeof data); // Тип полученных данных
 
                data.forEach((item) => {
                    const cardElement = createCard(
                        
                        item.title,
                        item.description
                    );
                    cardList.insertAdjacentHTML("beforeend", cardElement);
                    });
            })
            .catch((error) => {
                console.error("Ошибка при загрузке данных:", error);
            });
 

}


 
  const preloader = document.querySelector(".preloader");
  const content = document.querySelector(".content");
  if (preloader && content) {
    setTimeout(() => {
      // Скрываем прелоадер
      preloader.style.opacity = "0";
      preloader.style.visibility = "hidden";

      // Показываем контент
      content.style.display = "block";

      // Удаляем элемент из DOM
      preloader.remove();
    }, 3000); // Задержка 3 секунды
  }
})
 var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });