/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/


function includesElement(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) return true;
    }
    return false;
}


function findUniqueElements(array) {
    let uniqueArray = [];

    // Проходим по каждому элементу входящего массива
    for (let i = 0; i < array.length; i++) {
        const currentItem = array[i];

        // Проверяем, содержится ли текущий элемент в новом массиве уникальных элементов
        if (!includesElement(uniqueArray, currentItem)) {
            // Если элемент уникален — добавляем его в итоговый массив
            uniqueArray.push(currentItem);
        }
    }

    return uniqueArray;
}

// Пример использования
console.log(findUniqueElements([1, 2, 3, 2, 1, 4]));
