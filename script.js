console.log("🌻 Script connected")
// https://www.dictionaryapi.com/api/v3/references/thesaurus/json/umpire?key=your-api-key

// you can use the method: fetch("https.....") 
// However that's very long

// base url + word + api_key

const API_KEY = "075245fb-6e0a-4561-a4dd-217b528a3d34"
const BASE_URL = "https://www.dictionaryapi.com/api/v3/references/thesaurus/json"
let word = "umpire"

const URL = `${BASE_URL}/${word}?key=${API_KEY}`

console.log(URL)

//DOM selectors
const wordTitle = document.getElementById("word")
const type = document.getElementById("wordType")
const explanation = document.getElementById("explanation")
const synonymsList = document.getElementById("synonyms")

wordTitle.innerText = word

// fetch(URL)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         // console.log(data[0]def[0].sseq[0][0][1].syn_list[0])
//         console.log(data[0].fl)
//         console.log(data[0].meta.syns[0])

//         const wordType = data[0].fl
//         const shortdef = data[0].shortdef[0]
//         const synonyms = data[0].meta.syns[0]

//         type.innerText = wordType
//         explanation.innerText = shortdef

//         // synonymsList.innerText = synonymsList

//         synonyms.forEach(synonym => {
//             synonymsList.innerHTML += `<li>${synonym}</li>`
//         })

//     })


// modular code: every function should have one tasks or takes care of one thing

const updateHTML = (data) => {
    console.log(data)
    const wordType = data[0].fl
    const shortdef = data[0].shortdef[0]
    const synonyms = data[0].meta.syns[0]

    type.innerText = wordType
    explanation.innerText = shortdef

    synonyms.forEach(synonym => {
        synonymsList.innerHTML += `<li>${synonym}</li>`
    })
}

const fetchData = () => {
    fetch(URL)
        .then(response => response.json())
        .then(data => {

            updateHTML(data)
        })
}
// fetchData()

// asynchronous approach

const fetchDataAsync = async () => {
    const response = await fetch(URL)
    const data = await response.json()

    updateHTML(data)

}
fetchDataAsync()

