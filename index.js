let opt = null
let x = 0
let state = 'number1';
let y = 0;
let z

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

const clearLcd = () => {
    [].forEach.call(document.querySelectorAll('.oprator'), (item) => {
        item.classList.remove('active');
    })

    state = 'number1'
    x = 0
    y = 0
  updateScreen(x)
}

const oprator = (opratorCase) => {

    [].forEach.call(document.querySelectorAll('.oprator'), (item) => {
        item.classList.remove('active');
    })

    document.getElementById(`${opratorCase}`).classList.add('active')

  switch (opratorCase) {
      case 'sum':
          opt = 'sum'
          state = 'number2'
          break;
      case 'minus':
          opt = 'minus'
        state = 'number2'
        break;
      case 'multiple':
          opt = 'multiple'
        state = 'number2'
        break;
    case 'dvide':
        opt = 'dvide'
        state = 'number2'
        break;
  }
  updateScreen(x)
}

const dotNumber = () => {
    x = `${x}.`
    updateScreen(x)
}

const eval = () => {
    [].forEach.call(document.querySelectorAll('.oprator'), (item) => {
        item.classList.remove('active');
    })

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
