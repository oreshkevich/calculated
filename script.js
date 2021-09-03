function insert(symbol) {
  if (typeof symbol === "string") {
    if (document.form.subject.value.slice('-1') === symbol) {
      symbol = '';
    }
  }

  document.form.subject.value = document.form.subject.value + symbol;
}

function clean() {
  document.form.subject.value = '';
}

function backspace() {
  let exp = document.form.subject.value.slice(0, -1);
  document.form.subject.value = exp;
}

function alike() {
  let exp = document.form.subject.value;
  let ff = exp;
  let ggg = ff.replace(/\s/g, '');
  let regexp = new RegExp(/\d*\/0/);
  let isZeroDivision = regexp.test(ggg);
  if (isZeroDivision) alert(new RangeError("TypeError: Division by zero."));
  
  let str = exp.replace(/[0-9]/g, '');
  console.log(str);
  if (str == '-√' || str == '√-' ) alert(new RangeError("TypeError: negative value"));
  if ( str == '√' ) {
   
    let sub = exp.replace(/[^0-9]/g, '');
    document.form.subject.value = +(Math.sqrt(`${sub}`)).toFixed(10);
  } else if (str == '^' || str == '-^' ) {
    let exp1 = exp.split('^');
    let sub = exp1[0];
    let sub1 = exp1[exp1.length - 1];
    document.form.subject.value = +(Math.pow(`${sub}`, `${sub1}`)).toFixed(10);
    console.log(Math.pow(`${-9}`, `${3}`));
  } else {
    document.form.subject.value = +(new Function(`return ${exp}`)()).toFixed(10);
  }


}