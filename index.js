let x = 0

const onload = () => {
  updateScreen(x)
}

const updateScreen = (newNumber) => {
  document.getElementById('lcd').innerHTML = newNumber;
}

const number = (number) => {
  if (x) {
    x = `${x}${number}`
  } else {
    x = number
  }
  updateScreen(x);
}

const clearLcd = () => {
  x = 0
  updateScreen(x)
}

const oprator = (opratorCase) => {
  switch (opratorCase) {
    case 'sum':
      console.log('a')
          break;
    case 'minus':
      console.log('b')
          break;
    case 'multiple':
          console.log('c')
          break;
    case 'dvide':
      console.log('c')
          break;
  }
}