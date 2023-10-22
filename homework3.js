//Итеративный подход
//-

//Рекурсивный подход

function recursive(n, left, middle, right) {
    if (n === 1) {
        console.log(`Move disk from ${left} to ${right}`);
        return;
    } //если кольцо 1, то из левого перекинуть на правое

    recursive(n - 1, left, right, middle); // перемещаем n-1 дисков с левого стержня на средний, используя правый как вспомогательный
    console.log(`Move disk from ${left} to ${right}`); // перемещаем самый большой диск с левого стержня на правый
    recursive(n - 1, middle, left, right); // перемещаем n-1 дисков со среднего стержня на правый стержень, используя левый как вспомогательный
}

recursive(3, 'Left', 'Middle', 'Right');
