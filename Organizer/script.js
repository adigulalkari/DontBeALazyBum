let activeWeb=[]
let webTitle=[]
const getBtn = document.getElementById("get-btn")
const tableData = document.getElementById('table-data')
const webFromStorage = JSON.parse(localStorage.getItem('activeWeb'))
const titleFromStorage = JSON.parse(localStorage.getItem('webTitle'))

if(webFromStorage){
    activeWeb = webFromStorage
    webTitle = titleFromStorage
    renderTable(webTitle,activeWeb)
}
// Event listener to show the current tags 
getBtn.addEventListener('click', function(){
    chrome.tabs.query({}, function(tabs){
        for(let i=0; i<tabs.length; i++){
            webTitle.push(tabs[i].title)
            activeWeb.push(tabs[i].url)
            localStorage.setItem("activeWeb",JSON.stringify(activeWeb))
            localStorage.setItem("webTitle",JSON.stringify(webTitle))
            renderTable(webTitle,activeWeb)
        }
    })
})

function renderTable(title,link){
    let row = ""
    for(let i=0; i<title.length; i++){
        row += `
        <tr>
            <td>${title[i]}</td>
            <td><a href='${link[i]}'>${link[i]}</a></td>
        </tr>
        `
    }
    tableData.innerHTML = row
}