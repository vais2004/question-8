// Here's an API. It will give an error. Write a web app, call this API and read the error message. Show user the error message.

var outputOne = document.querySelector('#outputOne')
var outputTwo = document.querySelector('#outputTwo')
var btnAPI = document.querySelector('#btnAPI')

var serverURL = 'https://datausa.io/api/data'

function callAPI() {
  try {
    fetch(serverURL)
      .then((response) => 
        // console.log(response)
        response.json()
      )
      .then((json) => {
        // console.log(json)
        var data = json.error
        outputOne.textContent = data
        outputOne.style.color = 'red'
      })
  } catch (error) {
    console.log("there's an error")
    // console.log(error)
    outputTwo.textContent = error
  }
}

btnAPI.addEventListener('click', callAPI)