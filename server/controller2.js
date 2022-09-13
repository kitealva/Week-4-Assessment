const baseURL = 'http://localhost:4000'
//Step 1: Select HTML Element

const complimentBtn = document.getElementById ("complimentButton")

const getGirlsBtn = document.getElementById('getGirls')

const girlRoster = document.getElementById('displayGirls')

const addForm = document.getElementById('addForm')

const addInput = document.getElementById('addInput')

const deleteForm = document.getElementById('deleteForm')

const deleteInput = document.getElementById('deleteInput')

const editForm = document.getElementById('editForm')

const editIndex = document.getElementById('editIndex')

const editInput = document.getElementById('editInput')

// Step 2: Write Functions

const getCompliment = () => {
    axios.get ("http://localhost:4000/api/compliment/")
    .then(res => {
        const data = res.data;
        alert(data)
    })
}

const getGirls = () => {
    axios.get(`${baseURL}/api/girls`)
    .then((res) => {
        console.log(res.data)
        const girls = res.data
        girlRoster.innerHTML = ''

        for (let i = 0; i < girls.length; i++) {
            let newGirls = document.createElement('li')
            newGirls.textContent = 
            girls[i]
            girlsRoster.appendChild
            (newGirls)
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

const addNewItem = (event) => {
    event.preventDefault()

    let bodyObj = {
        item: addInput.value
    }

    axios.post(`${baseURL}/api/addGirl`, bodyObj)
    .then((res) => {
        console.log(res.data)
        const girls = res.data
        girlRoster.innerHTML = ''

        for (let i = 0; i < girls.length; i++)
        {
            let newGirls = document.createElement('li')
            newGirls.textContent = girls[i]
            girlRoster.appendChild(newGirls)
        }
    })
    .catch((err) => {
        console.log(err)
    })
}


const deleteItem = (event) => {
    event.preventDefault()

    axios.delete(`${baseURL}/api/deleteGirl/${deleteInput.value}`)
    .then ((res) => {
        const girls = res.data
        girlRoster.innerHTML = ''

        for (let i = 0; i < girls.length; i++)
        {
            let newGirls = document.createElement('li')
            newGirls.textContent = girls[i]
            girlRoster.appendChild(newGirls)
        }

        deleteInput.value = ''
    })
}

const editItem = (e) => {
    e.preventDefault()

    let bodyObj = {
        item: editInput.value
    }

    axios.put(`${baseURL}/api/editGirls/${editIndex.value}`, bodyObj)
    .then((res) => {
        const girls = res.data
        girlRoster.innerHTML = ''

        for(let i =0; i<girls.length; i++) {
            let newGirls = document.createElement('li')
            newGirls.textContent = 
            girls [i]
            girlsRoster.appendChild
            (newGirls)
        }
        editIndex.value = ''
        editInput.value = ''
    })
}



// Step 3: Combine with event listeners

complimentBtn.addEventListener('click', getCompliment)
getGirlsBtn.addEventListener('click', getGirls)
addForm.addEventListener('submit', addNewItem)
deleteForm.addEventListener('submit', deleteItem)
editForm.addEventListener('submit', editItem)