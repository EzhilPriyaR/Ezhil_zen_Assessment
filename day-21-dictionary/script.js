//get all the references

let searchForm = document.querySelector('.dictionaryForm');
let wordInput = document.querySelector('.wordInput');
let wordInformation = document.querySelector('.meaningForWord');
let submitButton = document.querySelector('.submitButton');


async function getmeaning(word) {
    try {

        let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

        let data = await response.json();
        let paragraph = document.createElement('p');

        wordInformation.innerHTML = '';

        paragraph.innerHTML = `Word: <b>${data[0].word}</b>`;
        wordInformation.appendChild(paragraph);

        let list = document.createElement('ul');
        list.style.listStyleType = 'none';

        let meanings = data[0].meanings;

        for (let meaning of meanings) {
            let listItem = document.createElement('li');
            listItem.innerHTML = `${meaning.partOfSpeech}`;
            let subList = document.createElement('ul');
            subList.style.listStyleType = 'disc';
            let definitions = meaning.definitions;

            for (let definition of definitions) {
                let subListItem = document.createElement('li');
                subListItem.innerHTML = `<em>${definition.definition}</em>`;
                subList.appendChild(subListItem);
            }

            listItem.appendChild(subList);
            list.appendChild(listItem);
        }

        wordInformation.appendChild(list);

    } catch (error) {
        console.error('error fetching the meaning of the word');
    }
}


function handleSubmit(event) {
    event.preventDefault();

    let word = wordInput.value;
    getmeaning(word);
}

searchForm.addEventListener('submit', handleSubmit);
submitButton.addEventListener('click', handleSubmit);