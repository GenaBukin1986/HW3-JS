function greeting(name) {
    console.log(`Привет, ${name}!`);
}

const nameHuman = prompt("Введите Ваше имя: ", "Например: Николай");
greeting(nameHuman);