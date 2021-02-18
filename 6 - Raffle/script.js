function getValues() {
    const value1 = document.getElementById("option1").value;
    const value2 = document.getElementById("option2").value;
    


  const result = document.getElementById("result");

  console.log("A PRIMEIRA OPÇÃO FOI: " + value1);
  console.log("A SEGUNDA OPÇÃO FOI: " + value2);

  let options = [value1, value2];
  let quantidade = options.length;
  let sorteador = Math.floor(Math.random() * quantidade);
  console.log(options[sorteador]);
  result.innerHTML = options[sorteador];
}

function newOption() {
  const option = document.getElementById("options");
  option.innerHTML +=
    '<input id="option3" class="inputOption" placeholder="Option" type="text" required="required" name="option3"/>';

}

