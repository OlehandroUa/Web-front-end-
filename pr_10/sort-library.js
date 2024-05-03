((global) => {
    const SortUtil = {};

    const isSorted = (arr, reverse) => {
        return reverse
            ? arr.every((value, i, array) => !i || array[i - 1] >= value)
            : arr.every((value, i, array) => !i || array[i - 1] <= value);
    };

    const getComparator = (reverse) => {
        return reverse ? (a, b) => a < b : (a, b) => a > b;
    };

    SortUtil.bubbleSort = (arr, reverse) => {
        const compare = getComparator(reverse);
        let compareCount = 0;
        let swapCount = 0;

        while (!isSorted(arr, reverse)) {
            for (let i = 0; i < arr.length - 1; i++) {
                compareCount++;
                if (compare(arr[i], arr[i + 1])) {
                    swapCount++;
                    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                }
            }
        }

        console.log(`Number of comparisons: ${compareCount}`);
        console.log(`Number of swaps: ${swapCount}`);
        return arr;
    };

    SortUtil.selectionSort = (arr, reverse) => {
        const compare = getComparator(!reverse);
        let compareCount = 0;
        let swapCount = 0;

        for (let i = 0; i < arr.length - 1; i++) {
            let min = i;
            for (let j = i + 1; j < arr.length; j++) {
                compareCount++;
                if (compare(arr[j], arr[min])) {
                    min = j;
                }
            }

            swapCount++;
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }

        console.log(`Number of comparisons: ${compareCount}`);
        console.log(`Number of swaps: ${swapCount}`);
        return arr;
    };

    SortUtil.insertionSort = (arr, reverse) => {
        const compare = getComparator(reverse);
        let compareCount = 0;
        let swapCount = 0;

        for (let i = 1; i < arr.length; i++) {
            let j = i - 1;
            if (isSorted(arr, reverse)) {
                break;
            }
            while (j > -1 && compare(arr[j], arr[j + 1])) {
                compareCount++;
                swapCount++;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                j--;
            }
        }

        console.log(`Number of comparisons: ${compareCount}`);
        console.log(`Number of swaps: ${swapCount}`);
        return arr;
    };

    global.SortUtil = SortUtil;
})(window);
