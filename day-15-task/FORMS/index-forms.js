function updateTable(){
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var address = document.getElementById('address').value;
    var state = document.getElementById('stateInput').value;
    var pincode = document.getElementById('pincode').value;
    var country = document.getElementById('countryInput').value;
    var gender = document.querySelector('input[name="flexRadioDefault"]:checked').value;
    let food = document.getElementsByName('choiceOfFood');

    var selectedFood = [];
    for(var foods of food){
        if(foods.checked){
            selectedFood.push(foods.value);
        }
    }


    var table = document.getElementById("table");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);

    cell1.innerHTML = firstName +" "+ lastName;
    cell2.innerHTML = address;
    cell3.innerHTML = gender;
    cell4.innerHTML = selectedFood;
    cell5.innerHTML = state;
    cell6.innerHTML = pincode;
    cell7.innerHTML = country;

    
    clearFields();
}

function clearFields(){
    var elements = document.querySelectorAll('#first-name, #last-name, #address, #stateInput, #pincode, #countryInput');
    elements.forEach(element => {
        element.value = '';
    });

    var genderList = document.getElementsByName('flexRadioDefault');

    for(let gender of genderList){
        if(gender.checked){
            gender.checked = false;
        }
    }

    var foodList = document.getElementsByClassName('form-check-input');

    for(let food of foodList){
        if(food.checked){
            food.checked = false;
        }
    }
}