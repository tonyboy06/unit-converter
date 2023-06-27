const valueEl = document.getElementById('value-input')
const convertBtn = document.getElementById('input-btn')
const readoutDiv = document.getElementById('readout-div')

const data = [
    {
        title: "Length (Meters/Feet)",
        imperialUnit: "feet",
        metricUnit: "meters",
        imperialSingular: "foot",
        metricSingular: "meter",
        multiplier: 3.281
    },
    {
        title: "Volume (Liters/Gallons)",
        imperialUnit: "gallons",
        metricUnit: "liters",
        imperialSingular: "gallon",
        metricSingular: "liter",
        multiplier: 0.264
    },
    {
        title: "Mass (Kilograms/Pounds)",
        imperialUnit: "pounds",
        metricUnit: "kilograms",
        imperialSingular: "pound",
        metricSingular: "kilogram",
        multiplier: 2.204
    }
]

valueEl.value = 20

convert()

convertBtn.addEventListener('click', function() {
    convert()
})

valueEl.addEventListener('blur', function() {
    if (valueEl.value === '') {
        valueEl.value = 20
    }
})

valueEl.addEventListener('focus', function() {
    valueEl.value = ''
})



function convert() {
    const userInput = valueEl.value

    if(isNaN(userInput)) {
        return
    }

    let readoutDivDOM = ''

    for (let i = 0; i < data.length; i++) {
        const imperialValue = (userInput * data[i].multiplier).toFixed(3)
        const metericValue = (userInput / data[i].multiplier).toFixed(3)

        let metricString = data[i].metricUnit
        let imperialString = data[i].imperialUnit

        if (Number(userInput) === 1) {
            metricString = data[i].metricSingular
            imperialString = data[i].imperialSingular
        }

        readoutDivDOM += `
            <div class="unit-div">
                <h2>
                    ${data[i].title}
                </h2>
                <h3>
                    ${userInput} ${metricString} = ${imperialValue} ${data[i].imperialUnit} | 
                    ${userInput} ${imperialString} = ${metericValue} ${data[i].metricUnit}
                </h3>
            </div>
        `
    }
    readoutDiv.innerHTML = readoutDivDOM
}
