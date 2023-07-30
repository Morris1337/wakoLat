function saveNews(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    // Создаем объект для новости
    const news = {
        title: title,
        content: content
    };

    // Преобразуем объект в строку JSON и сохраняем в localStorage
    localStorage.setItem("news", JSON.stringify(news));

    // Перенаправляем пользователя на новую страницу с публикацией новости
    window.location.href = "news.html";
}