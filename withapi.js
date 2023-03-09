// api url
const api_url =
	"https://dummyjson.com/products";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);

	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader

// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>id</th>
        <th>images</th>
		<th>desciption</th>
		<th>brand</th>
		<th>price</th>
		</tr>`;
	
	// Loop to access all rows
	for (let r of data.products) {
		tab += `<tr>
	<td>${r.id} </td>
    <td> <img src="${r.images[0]} "/></td>
	<td>${r.description}</td>
	<td>${r.brand}</td>
	<td>${r.price}</td>		
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("phone").innerHTML = tab;
}
