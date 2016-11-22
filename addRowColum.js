function addRow() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(table.rows.length);//insert new row
    var columnCount =  table.rows[0].cells.length; 
  for(var i=1; i<=columnCount;i++){
     var cell = row.insertCell(i-1);  //insert cell to new row           
     var element = document.createElement("input");            
     element.type = "text"; 
     element.setAttribute('id', 'newInput');
     cell.appendChild(element);
 }
}


function addColumn() {    
 var tblHeadObj = document.getElementById('myTable').tHead; 
 for (var h=0; h< tblHeadObj.rows.length; h++) {
  var newTH = document.createElement('th');
  tblHeadObj.rows[h].appendChild(newTH); 
  newTH.innerHTML = 'Column '+ (tblHeadObj.rows[h].cells.length); 
 }

 var tblBodyObj = document.getElementById('myTable').tBodies[0]; 
 for (var i=0; i< tblBodyObj.rows.length; i++) {
  var newCell = tblBodyObj.rows[i].insertCell(-1);
  var element = document.createElement("input");
  element.type = "text";
  element.setAttribute('id','newInput');
  newCell.appendChild(element);
 }
}

