//Создаём генератор рандомного цвета фона линейным градиентом
document.getElementById("btn").addEventListener("click", () => { //навешиваем прослушиватель
    let color1 = document.querySelector(".color1"); //передаём в переменную color1 класс .color1 
    let color2 = document.querySelector(".color2"); //передаём в переменную color2 класс .color2
    let deg = document.querySelector(".deg");
    let hex = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B","C","D", "E", "F",]; //создание переменной с перечислением символов HEX формата
    let hexColor1 = "";
    let hexColor2 = "";
    let randomIn = getRandomInt(0, 360);

    for (let i = 0; i < 6; i++) {  //задаём формат в hex, 6 можно заменить на 3
        hexColor1 += hex[getRandomNumber()];
        hexColor2 += hex[getRandomNumber()];
    };
    
    // [DANGEON]     Изменение цвета в CSS  
    document.body.style.background = `linear-gradient(${randomIn}deg, #${hexColor1}, #${hexColor2})`;

    // [MASTER] изменение текстового содержимого в HTML
    color1.textContent = hexColor1; //меняет содержимое элемента для первой части
    color2.textContent = hexColor2; //меняет содержимое элемента для второй части
    deg.textContent = randomIn;  //меняет содержимое элемента для угла градиента

    //Функция рандомного числа
    function getRandomNumber() {
        return Math.floor(Math.random() * hex.length);  
    };

    //Функция рандомного числа в диапозоне от 0 до 360
    function getRandomInt(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
});