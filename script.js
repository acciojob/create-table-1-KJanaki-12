function insert_Row() {
    //Write your code here
	let newRow = document.createElement("tr");
	newRow.innerHTML=`
		<td>New Cell1</td>
		<td>New Cell2</td>
	`;
	let table = document.getElementById("sampleTable");
	table.appendChild(newRow);

  
}
