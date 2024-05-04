(function (global) {
    const gameDifficulty = document.getElementById("game-difficulty");
    const gameColor = document.getElementById("game-color");
    const mainMenu = document.getElementById("main-menu");
    const gameContainer = document.getElementById("game-container");
    const scoreDisplay = document.getElementById("game-score");
    const scoreboard = document.getElementById("scoreboard");
    const tbody = document.querySelector("tbody");
    const template = document.querySelector("#score-template");
    const timerDisplay = document.getElementById("click-time");
    let timer = 0;
    let score = 0;
    let interval;
    let player;

    const range = {
        x:
            gameDifficulty.value === "Lazy"
                ? Math.round(global.innerWidth / 4)
                : gameDifficulty.value === "Medium"
                ? Math.round(global.innerWidth / 2)
                : gameDifficulty.value === "Impossible"
                ? global.innerWidth
                : Math.round(global.innerWidth / 3),
        y:
            gameDifficulty.value === "Lazy"
                ? Math.round(global.innerHeight / 4)
                : gameDifficulty.value === "Medium"
                ? Math.round(global.innerHeight / 2)
                : gameDifficulty.value === "Impossible"
                ? global.innerHeight
                : Math.round(global.innerHeight / 3),
    };

    const startGame = function () {
        player = document.getElementById("game-player");
        setPlayerPosition(player, generateRandomPosition({ left: 1, top: 1 }));
        player.addEventListener("click", endGame);
        if (gameDifficulty.value && gameColor.value) {
            timer =
                gameDifficulty.value === "Lazy"
                    ? 100
                    : gameDifficulty.value === "Medium"
                    ? 50
                    : gameDifficulty.value === "Impossible"
                    ? 10
                    : 30;
            timerDisplay.textContent = timer;
            interval = setInterval(() => {
                timer--;
                timerDisplay.textContent = timer;
                if (timer === -1) endGame();
            }, 1000);
            mainMenu.style.display = "none";
            scoreboard.style.display = "none";
            gameContainer.style.display = "block";
            player.style.display = "block";
            player.style.backgroundColor = gameColor.value;
        }
    };

    const endGame = function () {
        if (!alert(`Your score - ${score}`)) {
            mainMenu.style.display = "block";
            scoreboard.style.display = "block";
            gameContainer.style.display = "none";
            player.style.display = "none";
            player.removeEventListener("click", endGame);
            addScoreToTable(gameDifficulty.value, score);
            score = 0;
            scoreDisplay.textContent = score;
            clearInterval(interval);
        }
    };

    const addScore = function () {
        score++;
        scoreDisplay.textContent = score;
    };

    const addScoreToTable = function (difficulty, score) {
        const clone = template.content.cloneNode(true);
        let th = clone.querySelectorAll("th");
        th[0].textContent = difficulty;
        th[1].textContent = score;
        tbody.appendChild(clone);
    };

    const getPlayerSize = function () {
        switch (gameDifficulty.value) {
            case "Lazy":
                return 150;
            case "Medium":
                return 100;
            case "Impossible":
                return 50;
        }
    };

    const setPlayerPosition = function (player, [x, y]) {
        player.style.left = `${x}px`;
        player.style.top = `${y}px`;
    };

    const generateRandomPosition = function (currentPosition) {
        return [
            filter(
                getRandomIntInclusive(
                    currentPosition.left - range.x < 0 ? 0 : currentPosition.left - range.x,
                    currentPosition.left + range.x
                ),
                0,
                global.innerWidth
            ),
            filter(
                getRandomIntInclusive(
                    currentPosition.top - range.y < 0 ? 0 : currentPosition.top - range.y,
                    currentPosition.top + range.y
                ),
                0,
                global.innerHeight
            ),
        ];
    };

    const filter = function (current, left, right) {
        if (current < left) {
            return left;
        } else if (current > right - getPlayerSize()) {
            return right - getPlayerSize();
        } else {
            return current;
        }
    };

    const getRandomIntInclusive = function (min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    };

    document.getElementById("start-button").addEventListener("click", startGame);
})(window);
