'use strict';

// Table generation
const letters = 'ABCDEFGHIJ';

let fieldHtml = '<table>';

fieldHtml += '<tr><td></td>';
for(let i = 0; i < 10; i++){
  fieldHtml += `<th class="header">${letters[i]}</th>`;
}
fieldHtml += '</tr>';


for(let i = 0; i < 10; i++){
  fieldHtml += `<tr><th class="header">${i + 1}</th>`;
  for(let j = 0; j < 10; j++){
    fieldHtml += `<td>
<!--<a class="link" href="https://www.google.com/">goo</a>-->
</td>`;
    // fieldHtml += `<td>${i + 1} : ${j + 1}</td>`;
  }
  fieldHtml += '</tr>';
}
fieldHtml += '</table>';

document.getElementById("table-container").innerHTML = fieldHtml;