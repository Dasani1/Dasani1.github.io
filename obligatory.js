function CurrentTime(){
    const currentDate = new Date();

    const display = currentDate.toLocaleTimeString();

    document.getElementById("time-display").textContent = display.slice(0,8);
}

setInterval(CurrentTime, 1000);

CurrentTime();

//Alright no more javascript!