(function (global) {
    function getRandomValue(max = 100) {
        return Math.floor(Math.random() * max);
    }

    function generateRandomArray(size) {
        let result = [];
        for (let index = 0; index < size; index++) {
            result[index] = getRandomValue();
        }
        return result;
    }

    let dataArray = generateRandomArray(20);
    console.log(StrangeLibrary.sortDataWithWeirdAlgorithm(dataArray, true));
    document.getElementById("content").textContent = dataArray;
    document.getElementById("generate").addEventListener("click", (event) => {
        console.log();
        if (
            !document.getElementById("custom-container") &&
            document.getElementById("height").value
        ) {
            createCustomContainer();
        } else {
            document.getElementById("custom-container").remove();
            document.getElementById("left-button").remove();
            document.getElementById("right-button").remove();
            createCustomContainer();
        }
    });
    function createCustomContainer() {
        const container = document.createElement("div");
        container.id = "custom-container";
        container.style.backgroundColor = "blue";
        container.style.position = "relative";
        container.style.width = "30px";
        container.style.height = `${document.getElementById("height").value}px`;
        document.body.appendChild(container);
        createMoveButtons();
    }
    function createMoveButtons() {
        const leftButton = document.createElement("button");
        const rightButton = document.createElement("button");
        leftButton.id = "left-button";
        rightButton.id = "right-button";
        leftButton.textContent = "left";
        rightButton.textContent = "right";

        leftButton.addEventListener("click", (event) => {
            let leftValue = document.getElementById("custom-container").style.left;
            leftValue = leftValue.replace("px", "");
            leftValue = Number(leftValue) - 20;
            document.getElementById("custom-container").style.left = `${leftValue}px`;
        });
        rightButton.addEventListener("click", (event) => {
            let rightValue = document.getElementById("custom-container").style.left;
            rightValue = rightValue.replace("px", "");
            rightValue = Number(rightValue) + 20;
            document.getElementById("custom-container").style.left = `${rightValue}px`;
        });

        document.body.appendChild(leftButton);
        document.body.appendChild(rightButton);
    }
})(window);
