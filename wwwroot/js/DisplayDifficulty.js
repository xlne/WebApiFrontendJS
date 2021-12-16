'use strict';

const difficultyApiUrl = "https://localhost:5001/api/difficulty/";

// Defining async function
async function getApi(url) {
    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);

    showRecipes(data);
}

//Calling async function getting data from difficuly table
getApi(difficultyApiUrl);

// Function to define innerHTML for HTML table
function showRecipes(data) {
    let table = '';

    // Loop to access all rows 
    for (let r of data) {
        table += `<tr> 		
            <td>
                <span class="custom-checkbox">
                    <input type="checkbox" id="checkbox1" name="options[]" value="1">
                    <label for="checkbox1"></label>
                </span>
            </td>
    <td>${r.id} </td>
    <td>${r.difficulty}</td> 
    <td>
		<a href="#editModal" class="edit"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
		<a href="#deleteModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
	</td> 
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("tableData").innerHTML = table; //recipez
};

