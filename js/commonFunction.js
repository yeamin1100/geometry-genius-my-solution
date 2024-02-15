// That is inputfild code
function inputValue(id) {
    const inputfild = document.getElementById(id);
    const inputValue = inputfild.value;
    const numberValue = parseFloat(inputValue);
    inputfild.value = '';
    return numberValue;
}
// That is inputfild code

// That is Set Function For Set The Html in  websit
let No = 0;
function setInnertextByValue(calculateValue, name) {
    const tr = document.createElement("tr");
    const tableBody = document.getElementById("table-body");

    No++;
    tr.innerHTML = `
        <th>${No}</th>
                      <td>${name}</td>
                      <td>${calculateValue.toFixed(2)}cm&sup2</td>
                      <td><button class="btn custom-btn btn-secondary">Convert to m&sup2</button></td>
        `
    tableBody.appendChild(tr);
}

// That is Set Function For Set The Html in  websit