let countdown; 

function start() {
    let datetimeValue = document.getElementById("datetimer").value;
    let startButton = document.getElementById("start");

    if (startButton.textContent === "Cancel Timer") {
        clearInterval(countdown); // Stop the timer
        startButton.textContent = "Start Timer"; // Change button text back
        return;
    }

    if (!datetimeValue) {
        alert("Please select a date and time.");
        return;
    }

    let targetTime = new Date(datetimeValue).getTime();

    countdown = setInterval(() => {
        let now = new Date().getTime();
        let timeDiff = targetTime - now;

        if (timeDiff <= 0) {
            clearInterval(countdown);
            document.getElementById("day").textContent = "00";
            document.getElementById("hour").textContent = "00";
            document.getElementById("min").textContent = "00";
            document.getElementById("sec").textContent = "00";
            
            // Show message when time is up
            const message = document.createElement("p");
            message.innerText = "Time is up!";
            message.setAttribute("id", "time-up-message");
            document.getElementById("mainpart").appendChild(message);

            startButton.textContent = "Start Timer"; // Reset button text
            return;
        }

        let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById("day").textContent = days < 10 ? "0" + days : days;
        document.getElementById("hour").textContent = hours < 10 ? "0" + hours : hours;
        document.getElementById("min").textContent = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("sec").textContent = seconds < 10 ? "0" + seconds : seconds;
    }, 1000);

    startButton.textContent = "Cancel Timer"; // Change button text
}

