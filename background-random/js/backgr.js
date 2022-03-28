//Создаём генератор рандомного цвета фона
document.getElementById("btn").addEventListener("click", () => { //навешиваем прослушиватель
    let color = document.querySelector(".color"); //передаём в переменную color класс .color 
    // цвета здесь можно указать свои цвета, функция рандома может повторяться, потому что тут рандом лучше чем в бравл старсе
    let colors = [
        "linear-gradient(36deg, #0dd3ff, #0389ff, #1c79c0)",
        "blue",
        "radial-gradient(gold, orangered)",
        "#993CB0",
        "radial-gradient(blue, pink)",
        "#E98799",
        "linear-gradient(red, yellow, blue, orange)",
        "yellow",
        "green",
        "linear-gradient(to right, blue, pink)",
    ];
    let hexColor = colors[getRandomNumber()];
    document.body.style.background = hexColor;
    color.textContent = hexColor;

    // Функция рандома
    function getRandomNumber() {
    return Math.floor(Math.random() * colors.length); 
    };
});