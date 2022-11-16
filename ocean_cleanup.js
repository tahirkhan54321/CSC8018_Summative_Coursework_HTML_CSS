/********* CONSTANTS *************/

const bottlesKgPerYear = 0.730;
const bagsKgPerYear = 0.417;
const wrappingKgPerYear = 0.583;
const containersKgPerYear = 0.383;
const takeawayBoxKgPerYear = 0.383;
const cupsKgPerYear = 0.240;
const packagesKgPerYear = 0.834;
const cleaningKgPerYear = 0.120;
const toiletriesKgPerYear = 0.080;
const toothbrushesKgPerYear = 0.020;
const toothpasteKgPerYear = 0.015;

const bottlesTip = "Many beverages can be purchased in glass bottles. Consider to bring reusable bottles for water and hot beverages when you are out and about.";
const bagsTip = "Bring reusable fabric totes for shopping and refuse plastic bags when offered.";
const wrappingTip = "Consider to buy more unpackaged food at local markets.";
const containersTip = "Some places offer dairy in glass containers. You could even explore recipes to make your own yogurt.";
const takeawayBoxTip = "Cut down on take-out packaging by preparing more meals at home.";
const cupsTip = "Bring your own tumbler when ordering hot beverages to go.";
const packagesTip = "Try to purchase more products in shops rather than online.";
const cleaningTip = "Explore refill stations in your neighborhood to cut down on bottles from detergents and cleaning products.";
const toiletriesTip = "Explore refill stations in your neighborhood to cut down on plastic waste from toiletries.";
const toothbrushesTip = "Seriously? How often do you brush your teeth? Anyway, Did you know there are toothbrushes made from wood?";
const toothpasteTip = "Seriously? How much toothpaste do you use? Did you know there are plastic-free alternatives available?";
const unknownSources = "Most of your plastic waste originates from unknown sources."


/********* OBJECTS *************/

var bottles = document.getElementById("bottles");
var bags = document.getElementById("bags");
var wrapping = document.getElementById("wrapping");
var containers = document.getElementById("containers");
var takeawayBox = document.getElementById("takeawayBox");
var cups = document.getElementById("cups");
var packages = document.getElementById("packages");
var cleaning = document.getElementById("cleaning");
var toiletries = document.getElementById("toiletries");
var toothbrushes = document.getElementById("toothbrushes");
var toothpaste = document.getElementById("toothpaste");
var peopleInHousehold = document.getElementById("shareHousehold");
var resetButton = document.getElementById("reset");


/********* FUNCTIONS *************/

function resetForm() {
    document.getElementById("calculatorForm").reset();
}

function plasticFootprint () {
    
        /* Declare useful variables */
        var bottlesValue = +document.getElementById("bottles").value;
        var bagsValue = +document.getElementById("bags").value;
        var wrappingValue = +document.getElementById("wrapping").value;
        var containersValue = +document.getElementById("containers").value;
        var takeawayBoxValue = +document.getElementById("takeawayBox").value;
        var cupsValue = +document.getElementById("cups").value;
        var packagesValue = +document.getElementById("packages").value;
        var cleaningValue = +document.getElementById("cleaning").value;
        var toiletriesValue = +document.getElementById("toiletries").value;
        var toothbrushesValue = +document.getElementById("toothbrushes").value;
        var toothpasteValue = +document.getElementById("toothpaste").value;

        var totalBottlesYearKg = 52 * bottlesValue * bottlesKgPerYear;
        var totalBagsYearKg = 52* bagsValue * bagsKgPerYear;
        var totalWrappingYearKg = 52 * wrappingValue * wrappingKgPerYear;
        var totalContainersYearKg = 52 * containersValue * containersKgPerYear;
        var totalTakeawayBoxYearKg = 12 * takeawayBoxValue * takeawayBoxKgPerYear;
        var totalCupsYearKg = 12 * cupsValue * cupsKgPerYear;
        var totalPackagesYearKg = 12 * packagesValue * packagesKgPerYear;
        var totalCleaningYearKg = cleaningValue * cleaningKgPerYear;
        var totalToiletriesYearKg = toiletriesValue * toiletriesKgPerYear;
        var totalToothbrushesYearKg = toothbrushesValue * toothbrushesKgPerYear;
        var totalToothpasteYearKg = toothpasteValue * toothpasteKgPerYear;

        /* Perform calculations */
        var overallTotal = totalBottlesYearKg + totalBagsYearKg + totalWrappingYearKg + totalContainersYearKg + 
            totalTakeawayBoxYearKg + totalCupsYearKg + totalPackagesYearKg + totalCleaningYearKg +
                totalToiletriesYearKg + totalToothbrushesYearKg + totalToothpasteYearKg;

        var peopleInHouseholdValue = +document.getElementById("shareHousehold").value;

        var averageTotal = ((overallTotal / peopleInHouseholdValue * 1000) / 1000).toFixed(3);
        
        /* modify the plastic footprint on the page */
        const footprint = document.querySelector('#footprint');
        footprint.textContent = averageTotal;
}

function changeTip () {

        var bottlesValue = +document.getElementById("bottles").value;
        var bagsValue = +document.getElementById("bags").value;
        var wrappingValue = +document.getElementById("wrapping").value;
        var containersValue = +document.getElementById("containers").value;
        var takeawayBoxValue = +document.getElementById("takeawayBox").value;
        var cupsValue = +document.getElementById("cups").value;
        var packagesValue = +document.getElementById("packages").value;
        var cleaningValue = +document.getElementById("cleaning").value;
        var toiletriesValue = +document.getElementById("toiletries").value;
        var toothbrushesValue = +document.getElementById("toothbrushes").value;
        var toothpasteValue = +document.getElementById("toothpaste").value;

        var totalBottlesYearKg = 52 * bottlesValue * bottlesKgPerYear;
        var totalBagsYearKg = 52* bagsValue * bagsKgPerYear;
        var totalWrappingYearKg = 52 * wrappingValue * wrappingKgPerYear;
        var totalContainersYearKg = 52 * containersValue * containersKgPerYear;
        var totalTakeawayBoxYearKg = 12 * takeawayBoxValue * takeawayBoxKgPerYear;
        var totalCupsYearKg = 12 * cupsValue * cupsKgPerYear;
        var totalPackagesYearKg = 12 * packagesValue * packagesKgPerYear;
        var totalCleaningYearKg = cleaningValue * cleaningKgPerYear;
        var totalToiletriesYearKg = toiletriesValue * toiletriesKgPerYear;
        var totalToothbrushesYearKg = toothbrushesValue * toothbrushesKgPerYear;
        var totalToothpasteYearKg = toothpasteValue * toothpasteKgPerYear;

        /* initialise arrays to help find the maximum */

        var tipsArray = [bottlesTip, bagsTip, wrappingTip, containersTip, takeawayBoxTip, cupsTip,
                            packagesTip, cleaningTip, toiletriesTip, toothbrushesTip, toothpasteTip];

        var valuesArray = [totalBottlesYearKg, totalBagsYearKg, totalWrappingYearKg, totalContainersYearKg, 
            totalTakeawayBoxYearKg, totalCupsYearKg, totalPackagesYearKg, totalCleaningYearKg, 
            totalToiletriesYearKg, totalToothbrushesYearKg, totalToothpasteYearKg]

        var objectNameArray = ["Plastic bottles", "Plastic bags", "Food wrapping", "Yogurt, cream, etc. containers", 
                                "Take-away plastic boxes", "Take-away cups", "Plastic-wrapped packages", 
                                "Detergent & cleaning product bottles", "Shampoo, conditioner & toiletries", 
                                "Plastic toothbrushes", "Toothpaste"];

        /* find maximum and store as variable */
        var max = valuesArray[0];
        var maxIndex = 0;
        
        for (var i = 1; i < valuesArray.length; i++) {
            if (valuesArray[i] > max) {
                maxIndex = i;
                max = valuesArray[i];
            }
        }

        var maxTip = tipsArray[maxIndex];
        var maxObject = objectNameArray[maxIndex];
        
        /* modify the relevant tip and replace unknown sources with most plastic waste object */
        const tip = document.querySelector('#tip');
        const source = document.querySelector('#source');

        if (max == 0) {
            tip.textContent = "";
            source.textContent = "unknown sources"
        } else {
            tip.textContent = maxTip;
            source.textContent = maxObject;
        }
    }

    /********* EVENT LISTENERS *************/

    bottles.addEventListener('change', plasticFootprint);
    bags.addEventListener('change', plasticFootprint);
    wrapping.addEventListener('change', plasticFootprint);
    containers.addEventListener('change', plasticFootprint);
    takeawayBox.addEventListener('change', plasticFootprint);
    cups.addEventListener('change', plasticFootprint);
    packages.addEventListener('change', plasticFootprint);
    cleaning.addEventListener('change', plasticFootprint);
    toiletries.addEventListener('change', plasticFootprint);
    toothbrushes.addEventListener('change', plasticFootprint);
    toothpaste.addEventListener('change', plasticFootprint);

    bottles.addEventListener('change', changeTip);
    bags.addEventListener('change', changeTip);
    wrapping.addEventListener('change', changeTip);
    containers.addEventListener('change', changeTip);
    takeawayBox.addEventListener('change', changeTip);
    cups.addEventListener('change', changeTip);
    packages.addEventListener('change', changeTip);
    cleaning.addEventListener('change', changeTip);
    toiletries.addEventListener('change', changeTip);
    toothbrushes.addEventListener('change', changeTip);
    toothpaste.addEventListener('change', changeTip);

    peopleInHousehold.addEventListener('change', plasticFootprint);

    resetButton.addEventListener('click', resetForm);
    resetButton.addEventListener('click', plasticFootprint);
    resetButton.addEventListener('click', changeTip);