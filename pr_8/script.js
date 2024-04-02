(function () {
    var names = ["Tom", "Michael", "Emily", "David", "Chris", "Jack", "Daniel", "Robert", "Kate", "Sarah", "Peter"];

    for (let name of names) {
        if (name.charAt(0).toLowerCase() == "j") {
            speakHello.speak(name);
        } else {
            speakGoodBye.speak(name);
        }
    }

    for (let name of names) {
        if (name.charCodeAt(name.length - 1) === 110) {
            speakHello.speak(name);
        } else {
            speakGoodBye.speak(name);
        }
    }
})();