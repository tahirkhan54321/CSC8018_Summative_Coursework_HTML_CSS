/********* CONSTANTS *************/

const bottlesKgPerYear = 0.730
const bagsKgPerYear = 0.417
const wrappingKgPerYear = 0.583
const containersKgPerYear = 0.383
const takeawayBoxKgPerYear = 0.383
const cupsKgPerYear = 0.240
const packagesKgPerYear = 0.834
const cleaningKgPerYear = 0.120
const toiletriesKgPerYear = 0.080
const toothbrushesKgPerYear = 0.020 
const toothpasteKgPerYear = 0.015


/********* OBJECTS *************/

var bottles = document.getElementById("bottles")
var bags = document.getElementById("bags")
var wrapping = document.getElementById("wrapping")
var containers = document.getElementById("containers")
var takeawayBox = document.getElementById("takeawayBox")
var cups = document.getElementById("cups")
var packages = document.getElementById("packages")
var cleaning = document.getElementById("cleaning")
var toiletries = document.getElementById("toiletries")
var toothbrushes = document.getElementById("toothbrushes")
var toothpaste = document.getElementById("toothpaste")


/********* FUNCTIONS *************/

function getAverage (bottles, bags, wrapping, containers, takeawayBox, 
    cups, packages, cleaning, toiletries, toothbrushes, toothpaste) {
    
        var bottlesValue = +document.getElementById("bottles").value
        var bagsValue = +document.getElementById("bags").value
        var wrappingValue = +document.getElementById("wrapping").value
        var containersValue = +document.getElementById("containers").value
        var takeawayBoxValue = +document.getElementById("takeawayBox").value
        var cupsValue = +document.getElementById("cups").value
        var packagesValue = +document.getElementById("packages").value
        var cleaningValue = +document.getElementById("cleaning").value
        var toiletriesValue = +document.getElementById("toiletries").value
        var toothbrushesValue = +document.getElementById("toothbrushes").value
        var toothpasteValue = +document.getElementById("toothpaste").value

        var totalBottlesYearKg = 52 * bottlesValue * bottlesKgPerYear
        var totalBagsYearKg = 52* bagsValue * bagsKgPerYear
        var totalWrappingYearKg = 52 * wrappingValue * wrappingKgPerYear
        var totalContainersYearKg = 52 * containersValue * containersKgPerYear
        var totalTakeawayBoxYearKg = 12 * takeawayBoxValue * takeawayBoxKgPerYear
        var totalCupsYearKg = 12 * cupsValue * cupsKgPerYear
        var totalPackagesYearKg = 12 * packagesValue * packagesKgPerYear
        var totalCleaningYearKg = cleaningValue * cleaningKgPerYear
        var totalToiletriesYearKg = toiletriesValue * toiletriesKgPerYear
        var totalToothbrushesYearKg = toothbrushesValue * toothbrushesKgPerYear
        var totalToothpasteYearKg = toothpasteValue * toothpasteKgPerYear

        var overallTotal = totalBottlesYearKg + totalBagsYearKg + totalWrappingYearKg + totalContainersYearKg + 
            totalTakeawayBoxYearKg + totalCupsYearKg + totalPackagesYearKg + totalCleaningYearKg +
                totalToiletriesYearKg + totalToothbrushesYearKg + totalToothpasteYearKg

        var peopleInHousehold = +document.getElementById("shareHousehold").value

        var averageTotal = overallTotal / peopleInHousehold;
        
        /* add in return statement here - want to modify the plastic footprint on the page */
}

function getMaximum (bottles, bags, wrapping, containers, takeawayBox, 
    cups, packages, cleaning, toiletries, toothbrushes, toothpaste) {

        var bottlesValue = +document.getElementById("bottles").value
        var bagsValue = +document.getElementById("bags").value
        var wrappingValue = +document.getElementById("wrapping").value
        var containersValue = +document.getElementById("containers").value
        var takeawayBoxValue = +document.getElementById("takeawayBox").value
        var cupsValue = +document.getElementById("cups").value
        var packagesValue = +document.getElementById("packages").value
        var cleaningValue = +document.getElementById("cleaning").value
        var toiletriesValue = +document.getElementById("toiletries").value
        var toothbrushesValue = +document.getElementById("toothbrushes").value
        var toothpasteValue = +document.getElementById("toothpaste").value
    
        var overallMaximum = max(totalBottlesYearKg, totalBagsYearKg, totalWrappingYearKg, totalContainersYearKg, 
            totalTakeawayBoxYearKg, totalCupsYearKg, totalPackagesYearKg, totalCleaningYearKg, 
            totalToiletriesYearKg, totalToothbrushesYearKg, totalToothpasteYearKg)

            /* add in return statement here - want to modify the Tip on the page */
    }