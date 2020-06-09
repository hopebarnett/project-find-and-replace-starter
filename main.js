// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.
let findInputElement = document.querySelector(".find-input")
let replaceInputElement = document.querySelector(".replace-input")
let replaceAllButtonElement = document.querySelector(".replace-all-button")
let rowElements = document.querySelectorAll(".row")
    // console.log(rowElements)

function getCellElements(currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}


replaceAllButtonElement.addEventListener("click", function () {
    let findUserInput = findInputElement.value
    let replaceUserInput = replaceInputElement.value
    let numberOfTimes = 0 
    for (let index = 0; index < rowElements.length; index++) {
            // console.log(rowElements.length)
        let currentRowElement = rowElements[index]
        let currentCellElementArray = getCellElements(currentRowElement)
    
        for (let index2 = 0; index2 < currentCellElementArray.length; index2++){
            let currentCellElement = currentCellElementArray[index2]
            let currentCellContent = currentCellElement.innerHTML

            if (currentCellContent.includes(findUserInput)) {
                currentCellElement.innerHTML = currentCellContent.replace(findUserInput, replaceUserInput)
                numberOfTimes = numberOfTimes + 1
            }
            }

        }
        console.log(numberOfTimes)

    })
    // let findInputElement = document.querySelector(".find-input")
    // console.log(findInputElement.value)
    //  let replaceInputElement = document.querySelector(".replace-input")
    //  console.log(replaceInputElement.value)
    // let replaceAllButtonElement = document.querySelector(".replace-all-button")

    // let rowElements = document.querySelector(".row")




// let findInputElement = document.querySelector(".find-input")
// let replaceInputElement = document.querySelector(".replace-input")
// let replaceAllButtonElement = document.querySelector(".replace-all-button")

// let rowElements = document.querySelector(".row")

// console.log(rowElements)
// When you call the function belwo, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen?
// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of 
// developing your code means wasted time.
//
// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.
//
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer.