// --------------------------
// Interview Question 1
// --------------------------
const createSaleCountdownTicker = (
    elementId: string,
    saleStartDate: Date,
    saleEndDate: Date
) => {
    const targetElement: Element = document.getElementById(elementId);
    displayMsHHMMSS(saleStartDate.getTime(), saleEndDate);
    let displayedTime = saleStartDate.getTime();

    setInterval(() => {
        countDownFunction();
    }, 10);

    let now: Date = new Date();
    function countDownFunction() {
        let timeLeft: number = saleEndDate.getTime() - now.getTime();
        // Time from start time to 1 second past the current time.
        // Adding 1 second means that counting down will go past the current time.
        // If current time was used the countdown would never reach the current time.
        let distanceLeft: number = displayedTime - (now.getTime() + 1000);
        // Offset the displayed time by time left. Makes the target time 0 instead of the current time
        displayedTime += timeLeft;
        displayedTime -= distanceLeft * 0.01;
        // Reset the offset so the target time is the current time.
        displayedTime -= timeLeft;
        // If the displayed time goes past the current time, display the current time.
        displayedTime = Math.min(displayedTime, now.getTime());
        displayMsHHMMSS(displayedTime, saleEndDate);
        now = new Date();
    }

    function displayMsHHMMSS(currentTime: number, endTime: Date) {
        var timeLeft: number = endTime.getTime() - currentTime;
        var hours: number = Math.floor(timeLeft / (1000 * 60 * 60));
        var minutes: number = Math.floor(
            (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
        );
        var seconds: number = Math.floor((timeLeft % (1000 * 60)) / 1000);
        targetElement.innerHTML = `<label class="countdown-number">${String(
            hours
        ).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(
            seconds
        ).padStart(
            2,
            "0"
        )}</label><label class="countdown-text"> Remaining</label>`;
    }
    // Function should display sale countdown timer within the div with the provided element ID
    // e.g. Sale starting 1st April, Todays date is 7th April, sale ends 30th April -
    //      timer initially displays 1st April and rapidly counts to 7th April before ticking every second to the 30th April
    // Requirements:
    // 1. Timer should start at sale start date, rapidly count down to todays date, and continue counting down to sale end date
    // 2. Timer should update every second to display remaining time
    // 3. Timer should show in the format "HH:MM:SS Remaining"
    // Bonus Points:
    // 1. Counting down from start date to todays date could be variable speed, starting very quickly and slowly reaching todays date
    // 2. Creating a demo page and adding flare
};

// --------------------------
// Interview Question 2
// --------------------------
class NumberScale {
    constructor(
        private readonly minValue: number,
        private readonly maxValue: number
    ) {}

    public getScaleIntervals(): number[] {
        let difference: number = this.maxValue - this.minValue;
        let minRound: number;
        let maxRound: number;
        let scales: number[] = [];

        if (difference <= 10) {
            minRound = Math.floor(this.minValue);
            maxRound = Math.ceil(this.maxValue);

            scales.push(minRound);
        } else {
            minRound = Math.floor(this.minValue / 10) * 10;
            maxRound = Math.ceil(this.maxValue / 10) * 10;
            scales.push(minRound);
        }

        difference = maxRound - minRound;

        let interval: number = difference / 10;
        console.log(minRound, maxRound, interval);

        let tempMin: number = minRound;
        for (let index = 0; index < 10; index++) {
            scales.push(Math.round((tempMin += interval) * 10) / 10);
        }
        return scales;

        // Intended to calculate the scale labels of a graph
        // Requirements:
        // 1. Should return a sensible number of graph intervals, always between 8 and 12
        // 2. Intervals should extend or equal the min and max value boundries
        // 3. Intervals should be evenly spaced
        // Bonus Points:
        // 1. Upper and lower boundries could exceed the boundries on a graph, e.g. if the max was 55 the upper interval could be 60
        //    for the sake of round numbers and clear graph labeling
        // 2. Bonus points if you can make the labels work with round numbers, e.g. 10, 20, 30 etc
    }
}
