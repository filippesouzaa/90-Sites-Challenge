var DolarUrl = "https://economia.awesomeapi.com.br/json/all/USD-BRL";
var EurUrl = "https://economia.awesomeapi.com.br/json/all/EUR-BRL";

function getCoin() {
  const coin = document.getElementById("coin").value;
  const dolarValue = document.getElementById("dolar-value");
  const money = document.getElementById("money").value;

  if (coin == "dolar") {
    showDolarValue(DolarUrl);
    fetch(DolarUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const currentDolar = (dolarToday.innerHTML = data.USD.ask);
        const calc = money * currentDolar;
        dolarValue.innerHTML = "R$: " + calc.toFixed(2);
      });
  } else {
    showEurValue(EurUrl);
    fetch(EurUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const currentDolar = (dolarToday.innerHTML = data.EUR.ask);
        const calc = money * currentDolar;
        dolarValue.innerHTML = "R$: " + calc.toFixed(2);
      });
  }
}

function showDolarValue(coin) {
  const dolarToday = document.getElementById("dolarToday");
  fetch(coin)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      dolarToday.innerHTML = data.USD.ask;
    });
}

function showEurValue(coin) {
  const dolarToday = document.getElementById("dolarToday");
  fetch(coin)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const value = parseInt(data.EUR.ask).toFixed(2);
      dolarToday.innerHTML = value;
    });
}

showDolarValue(DolarUrl);
