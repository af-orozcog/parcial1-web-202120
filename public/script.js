const enterButton = document.getElementById('enter');
const input = document.getElementById('inputText');
const tableSection = document.getElementById('table-section');
const table = document.getElementById('table');
const tbody = document.getElementById('body-table');
const message = document.getElementById('message');

enterButton.addEventListener('click', (event) => {
  //Implementar lógica del button submit
  let send = input.value;
  if(isNaN(send)){
    alert("invalid input");
    return;
  }
  getresults(parseInt(send));
  event.preventDefault();
});

function printValues(data){
  removeAllChildNodes(tbody);
  message.innerHTML = "";
  if("message" in data){
    message.innerHTML = data.message;
    return;
  }
  for(const value in data){
    const row = document.createElement('tr');
    const toAdd = `
      <td class="col1">${value.pName1}</td>
      <td class="col2">${value.pName2}</td>
    `;
    row.innerHTML = toAdd;
    tbody.appendChild(row);
  }
}


/**
 * Llamado al backend con queryParam
 * @param {*} heightRef
 */
async function getresults(heightRef) {
  try{
    const resp = await fetch(`api?input=${heightRef}`);
    const data = await resp.json();
    console.log('data from back', data);
    printValues(data);
  }catch(error){
    alert("there was an error");
    console.log(error);
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
