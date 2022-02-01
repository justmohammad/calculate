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
            if (!x.length || x.slice(-1) !== '+' || x.slice(-1) !== '-' || x.slice(-1) !== '*' || x.slice(-1) !== '/') {
                x = `${x}+`
            } else {
                xnew = x.slice(0,x.length-1)
                x = `${xnew}`
            }
          break;
    case 'minus':
        if (!x.length || x.slice(-1) !== '+' || x.slice(-1) !== '-' || x.slice(-1) !== '*' || x.slice(-1) !== '/') {
            x = `${x}-`
        } else {
            xnew = x.slice(0,x.length-1)
            x = `${xnew}`
        }
          break;
    case 'multiple':
        if (!x.length || x.slice(-1) !== '+' || x.slice(-1) !== '-' || x.slice(-1) !== '*' || x.slice(-1) !== '/') {
            x = `${x}*`
        } else {
            xnew = x.slice(0,x.length-1)
            x = `${xnew}`
        }
          break;
    case 'dvide':
        if (!x.length || x.slice(-1) !== '+' || x.slice(-1) !== '-' || x.slice(-1) !== '*' || x.slice(-1) !== '/') {
            x = `${x}/`
        } else {
            xnew = x.slice(0,x.length-1)
            x = `${xnew}`
        }
          break;
  }
  updateScreen(x)
}

const dotNumber = () => {
    x = `${x}.`
    updateScreen(x)
}