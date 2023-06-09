const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number 
}

const numbers = document.querySelectorAll(".number")

number.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value)

    })
})

let preNumber = ''
let calculationOperator = ''
let currentNumber = '0'


number.forEach ((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
    currentNumber += number
    }
}


const inputOperator = (operator) => {
    if (calculationOperator === ''){
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

const operators = document.querySelectorAll (".operator")

operators.forEach ((operator) => {
    operator.addEventListener ("click" , (event) => {
        inputOperator(event.target.value)
    })
})



const calculate = () => {
    let result = ''
    switch (calculationOperator){
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '*':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '/':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        default:
            return
    }
    currentNumber = result
    calculationOperator = ''
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
} )



const clearAll = () => {
    preNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click' , () => {
    clearAll()
    updateScreen(currentNumber)
})

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click' , (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})
 
inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}
