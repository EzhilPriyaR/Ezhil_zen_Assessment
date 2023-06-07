let thirukuralForm = document.querySelector('.thirukuralForm');
let contentCard = document.querySelector('.contentCard');
let searchButton = document.querySelector('.searchButton');
let thirukuralInTamil = document.querySelector('.thirukuralInTamil');
let thirukuralInEnglish = document.querySelector('.thirukuralInEnglish');

contentCard.addEventListener('submit', getData);
searchButton.addEventListener('click', getData);

/* displaying the data in english */
function displayEnglish(responseData){

    let listDetails = `<h3><b>குறள் எண்:</b> ${responseData.number}</h3>
                       <h6><b>பால் : </b>${responseData.sect_tam}</h6>
                       <h6><b>அதிகாரம் :</b> ${responseData.chap_tam}</h6>
                       <h6><b>இயல் :</b> ${responseData.chapgrp_tam}</h6>
                       <ul>
                       <li><b>குறள்:</b> </li>
                            <ol style="list-style-type: none;">
                               <li>${responseData.line1}</li>
                               <li>${responseData.line2}</li>
                            </ol>
                       <li><b>குறள் விளக்கம்:</b> </li>
                            <ol style="list-style-type: none;">
                                <li>${responseData.tam_exp}</li>
                            </ol>
                       </ul>`;

    thirukuralInTamil.innerHTML = listDetails;
}

/* displaying the data in tamil */
function displayTamil(responseData){

    let listDetails = `<h3>Number: ${responseData.number}</h3>
                       <h6>Section : ${responseData.sect_eng}</h6>
                       <h6>Chapter : ${responseData.chap_eng}</h6>
                       <h6>Chapter groups : ${responseData.chapgrp_eng}</h6>
                       <ul>
                       <li><b>Content:</b> </li>
                            <ol style="list-style-type: none;">
                               <li>${responseData.eng}</li>
                            </ol>
                       <li><b>Explanation:</b> </li>
                            <ol style="list-style-type: none;">
                                <li>${responseData.eng_exp}</li>
                            </ol>
                       </ul>`;

    thirukuralInEnglish.innerHTML = listDetails;
}

/* fetching details from the api*/
async function getData(event){
    event.preventDefault();

    let input = contentCard.value;

    if(input == "" || input == null){
        alert("Enter a valid number");
    }else if(input > 1330){
        alert("Enter number below 1330")
    }else{
        let data = await fetch(`https://api-thirukkural.vercel.app/api?num=${input}`);
        let responseData = await data.json();
        displayTamil(responseData);
        displayEnglish(responseData);
    }

}