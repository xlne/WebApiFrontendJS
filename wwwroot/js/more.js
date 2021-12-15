
// const recipes = document.querySelector('.recipes');
// console.log('hej');

// //https://localhost:5001/api/difficulty/
// async function loadRecipes() {
// 	const responseUrl = await fetch('https://localhost:5001/api/recipe/');

// 	if (responseUrl.ok) {
// 		const data = await responseUrl.json();
// 		console.log(data);
// 		recipes.insertAdjacentHTML('beforeend', generateHtml(data));

// 	}
// 	else {
// 		console.error(responseUrl.statusText);
// 	}
// }
// console.log(loadRecipes());

// async function loadDifficulty() {
// 	const responseUrl = await fetch('https://localhost:5001/api/difficulty/');

// 	if (responseUrl.ok) {
// 		const data = await responseUrl.json();
// 		console.log(data);
// 		//
// 		recipes.insertAdjacentHTML('beforeend', generateHtml(data));
// 		show(data);
// 	}
// 	else {
// 		console.error(responseUrl.statusText);
// 	}
// }
// console.log(loadDifficulty());
// // loadDifficulty();
// // loadRecipes();

// function generateHtml(recipe) {
// 	let html = '';
// 	recipe.forEach(element => {

// 	});

// 	return html;
// }

// $(document).ready(function () {
// 	// Activate tooltip
// 	$('[data-toggle="tooltip"]').tooltip();

// 	// Select/Deselect checkboxes
// 	var checkbox = $('table tbody input[type="checkbox"]');
// 	$("#selectAll").click(function () {
// 		if (this.checked) {
// 			checkbox.each(function () {
// 				this.checked = true;
// 			});
// 		} else {
// 			checkbox.each(function () {
// 				this.checked = false;
// 			});
// 		}
// 	});
// 	checkbox.click(function () {
// 		if (!this.checked) {
// 			$("#selectAll").prop("checked", false);
// 		}
// 	});
// });




//const editModal = document.querySelector('#editModal');
//editModal.addEventListener('click', openEditModal);

// function openEditModal(id){
// 	editModal.addEventListener('click', editModal);
// 	const recipe = await 	


// 	const hej = editModal.querySelector('#editModal');
// 	editModal.innerHTML = 
// 	`<div id="editModal" class="modal fade">
// 	<div class="modal-dialog">
// 		<div class="modal-content">
// 			<form>
// 				<div class="modal-header">						
// 					<h4 class="modal-title">Edit Recipe</h4>
// 					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
// 				</div>
// 				<div class="modal-body">					
// 					<div class="form-group">
// 						<label>Recipename</label>
// 						<input type="text" class="form-control" required>
// 					</div>
// 					<div class="form-group">
// 						<label>Difficulty</label>
// 						<input type="text" class="form-control" required>
// 					</div>									
// 				</div>
// 				<div class="modal-footer">
// 					<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
// 					<input type="submit" class="btn btn-info" value="Save">
// 				</div>
// 			</form>
// 		</div>
// 	</div>
// </div>`;

// editModal.classList.remove('hidden');

//};
//openEditModal();


// function showDifficultys(data) {
//     let tab = 
//         `<tr>          
//           <th>Recipename</th>
//          </tr>`;
    
//     // Loop to access all rows 
//     for (let r of data) {
//         tab += `<tr> 
//     <td>${r.recipeName}</td>
// </tr>`;
//     }
//     // Setting innerHTML as tab variable
//     document.getElementById("recipeName").innerHTML = tab;
//     document.getElementsByClassName("modal-dialog");
// }



// const tableData = document.querySelector('#tableData');

// async function loadData(){
// 	const url = "https://localhost:5001/api/recipe/";
// 	const response = await fetch(url);
// 	if(!response.ok){
// 		return;
// 	}

// 	tableData.innerHTML = '';
// 	const data = await response.json();
// 	tableData.insertAdjacentHTML('afterbegin', insertTableData(data));
// }

// function insertTableData(recipes) {
// 	console.log(recipes);
// 	let html = '';
// 	recipes.forEach(recipe => {
// 		html +=
// 		`<tr>
// 		<td>
// 			<span class="custom-checkbox">
// 				<input type="checkbox" id="checkbox1" name="options[]" value="1">
// 				<label for="checkbox1"></label>
// 			</span>
// 		</td>		
// 		<td>1{recipe.id}</td>
// 		<td>2{recipe.recipeName}</td>
// 		<td>3{recipe.difficulty}</td>
// 		<td>123</td>
		
// 		<td>
// 			<a href="#editModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
// 			<a href="#deleteModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
// 		</td>
// 	</tr>`
	
// 	});
// }
// loadData();

//onClick="editModal('${recipes[recipe].id}')"




