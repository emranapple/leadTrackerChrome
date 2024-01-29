const inputBtn = document.getElementById("input-btn")
const inputEL = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let myLeads = []

inputBtn.addEventListener('click', function() {
    myLeads.push(inputEL.value)
    renderLeads()
    clearInputField()
    
})

function renderLeads() {
    let listItem = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItem += `
            <li>
                <a target="_blank"href="${myLeads[i]}">${myLeads[i]}</a>
            </li>
            `
    }
    ulEl.innerHTML = listItem
}


function clearInputField() {
    inputEL.value = ""
}




// now needs to store the value after refresh the page how?

