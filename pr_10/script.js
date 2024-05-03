((global) => {
    const getRandomInt = (max = 100) => Math.floor(Math.random() * max);

    const generateArray = (n) => {
        const array = [];
        for (let index = 0; index < n; index++) {
            array[index] = getRandomInt();
        }
        return array;
    };

    const array = generateArray(100);
    const array2 = [...array];
    const array3 = [...array];

    console.log(SortLibrary.bubbleSort([...array], true));
    console.log(SortLibrary.bubbleSort([...array]));

    console.log(SortLibrary.selectionSort([...array2], true));
    console.log(SortLibrary.selectionSort([...array2]));

    console.log(SortLibrary.insertionSort([...array3], true));
    console.log(SortLibrary.insertionSort([...array3]));
})(window);
