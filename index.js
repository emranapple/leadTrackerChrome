let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEL = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const deleteAllBtn = document.getElementById("delete-all")
const saveTabBtn = document.getElementById("save-tab-btn")

// saveTabBtn 
saveTabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderLeads(myLeads)
    })
})

// deletebtn 
deleteAllBtn.addEventListener("dblclick", function (e) {
    e.preventDefault()
    localStorage.clear()
    console.log("doubled click")
    myLeads = []
    renderLeads(myLeads)
})

// save myleads to localStorage 
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads)


}

// inputBtn 
inputBtn.addEventListener('click', function () {
    myLeads.push(inputEL.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads(myLeads)
    clearInputField()
})

// render function 
function renderLeads(leads) {
    let listItem = ""
    for (let i = 0; i < leads.length; i++) {
        listItem += `
            <li>
                <a target="_blank"href="${leads[i]}">${leads[i]}</a>
            </li>
            `
    }
    ulEl.innerHTML = listItem
}

// clear inputfield function 
function clearInputField() {
    inputEL.value = ""
}






// Maybe in near future I will make it to firebase 
// also make menifest file to run 




