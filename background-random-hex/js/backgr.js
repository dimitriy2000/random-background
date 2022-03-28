//Создаём генератор рандомного цвета фона
document.getElementById("btn").addEventListener("click", () => { //навешиваем прослушиватель
    let color = document.querySelector(".color"); //передаём в переменную color класс .color 
    let hex = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B","C","D", "E", "F",]; //создание переменной с перечислением символов HEX формата
    let hexColor = generateHex();
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor; //меняет содержимое элемента

    //Функция генерирующая цвет фона
    function generateHex() {
        let hexColor = "#"; //вставляем решётку перед hex-ом
        for (let i = 0; i < 6; i++) {  //задаём формат в hex, 6 можно заменить на 3
            hexColor += hex[getRandomNumber()]
        }
        return hexColor;
    }

    //Функция рандомного числа
    function getRandomNumber() {
        return Math.floor(Math.random() * hex.length);  
    };
});