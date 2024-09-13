function tableGeneration() {
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  for (let r = 1; r < 6; r++) {
    const row = document.createElement("tr");

    for (let d = 1; d < 6; d++) {
      const data = document.createElement("td");

      const cell = document.createTextNode(`${d}:${r}`);

      data.appendChild(cell);
      row.appendChild(data);
    }

    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  document.body.appendChild(tbl);
  tbl.setAttribute("border", "1");
}

tableGeneration();

function tableColoring() {
  const tbl = document.body.querySelector("table");

  const trows = tbl.rows;

  for (let r = 0; r < trows.length; r++) {
    const row = trows[r];

    const datas = row.cells;

    for (let d = 0; d < datas.length; d++) {
      const data = datas[d];
      if (data === datas[r]) {
        data.style.background = "red";
      }
    }
  }
}

tableColoring();

function List() {
  const lists = document.querySelectorAll("li");
  for (let li of lists as any) {
    console.log(li.firstChild.data);
  }
}

List();

function homeTable() {
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  

  
  

  for (let r = 0; r < 5; r++) {
    const row = document.createElement("tr");
    for (let d = 0; d < 5; d++) {
      const td = document.createElement("td");
      const cell = document.createTextNode(`${d}`);
      td.appendChild(cell);
      row.appendChild(td);
    }
    
    tbody.appendChild(row);
  }
table.appendChild(tbody);
document.body.appendChild(table)
  table.setAttribute("border", "2");
}

homeTable();

const childrenList = () => {
  const table = document.getElementById('age-table');
  const labels = table.querySelectorAll('label');
  const tbody = table.firstElementChild;
  const ftd = tbody.firstElementChild.firstElementChild;


  console.log(labels, ftd)
}

