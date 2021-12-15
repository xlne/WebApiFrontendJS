'use strict';

const formAdd = document.querySelector('#addingRecipe');
const formAddName = document.querySelector('#inputRecipeName');
const formAddDifficulty = document.querySelector('#inputDifficulty');

formAdd.addEventListener('submit', (event) => {
    event.preventDefault();
    submitForm();
});

async function submitForm(){
    //add controlfunction 

    let data = {
        RecipeName: formAddName.value,
        Difficulty: formAddDifficulty.value
    };
    
    const url = "https://localhost:5001/api/recipe/";
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
            
    console.log(response.statusText);    
    window.location.href = "index.html";    
};