let opt,x,y,z
let state = 'number1';

class Screen {

}

const onload = () => {
    x = 0;
    updateScreen(x)
}

const updateScreen = (newNumber) => {
  document.getElementById('lcd').innerHTML = newNumber;
}

const number = (number) => {
    if (state === 'number1') {
        if (x) {
            x = `${x}${number}`
        } else {
            x = number
        }
        updateScreen(x);
    } else if (state === 'number2') {
        if (y) {
            y = `${y}${number}`
        } else {
            y = number
        }
        updateScreen(y);
    }
}

const removeActive = () => {
    [].forEach.call(document.querySelectorAll('.oprator'), (item) => {
        item.classList.remove('active');
    })
}

const clearLcd = () => {
    removeActive()
    state = 'number1'
    x = 0
    y = 0
  updateScreen(x)
}

const oprator = (opratorCase) => {

    removeActive()

    document.getElementById(`${opratorCase}`).classList.add('active')

    opt = opratorCase
    state = 'number2'
  updateScreen(x)
}

const dotNumber = () => {
    if (state === 'number1') {
        x = `${x}.`
        updateScreen(x);
    } else if (state === 'number2') {
        y = `${y}.`
        updateScreen(y);
    }
}

const eval = () => {
    removeActive()

    switch (opt) {
        case 'sum':
            z = Number(x) + Number(y)
            break
        case 'minus':
            z = Number(x) - Number(y)
            break
        case 'multiple':
            z = Number(x)*Number(y)
            break
        case 'dvide':
            z = Number(x)/Number(y)
            break
    }
    updateScreen(z)
    state = 'number1'
    x = z
    y = 0
}
