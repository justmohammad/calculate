let x = 0

const onload = () => {
  updateScreen(x)
}

const updateScreen = (newNumber) => {
  document.getElementById('lcd').innerHTML = newNumber;
}

const number = (number) => {
  if (x) {
    x = x*10 + number
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
      if (typeof(x.slice(-1)) === "number") {
        x = `${x}+`
      } else {
        xnew = x.slice(0,x.length-1)
        x = `${xnew}`
      }
          break;
    case 'minus':
      x = `${x}-`
          break;
    case 'multiple':
      x = `${x}*`
          break;
    case 'dvide':
      x = `${x}/`
          break;
  }
  updateScreen(x)
}