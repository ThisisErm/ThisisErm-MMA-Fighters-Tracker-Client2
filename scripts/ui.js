const indexFighterContainer = document.querySelector('#index-fighter-container')
const messageContainer = document.querySelector('#message-container')
const showFighterContainer = document.querySelector('#show-fighter-container')

export const onIndexFighterSuccess = (fighters) => {
    fighters.forEach(fighter => {
        const div = document.createElement('div')
        div.innerHTML = `
            <h3>${fighter.firstName}  ${fighter.lastName}</h3>
            <button data-id="${fighter._id}" >Show fighter</button>
        `

        indexFighterContainer.appendChild(div)
    })
}

export const onFailure = (error) => {
    messageContainer.innerHTML = `
        <h3>You have an error! :(</h3>
        <p>${error}</p>
    `
}

export const onCreateFighterSuccess = () => {
    messageContainer.innerText = 'You have added a fighter'
}

export const onShowFighterSuccess = (fighter) => {
    const div = document.createElement('div')
    div.innerHTML = `
        <h3>${fighter.firstName}  ${fighter.lastName}</h3>
        <p>${fighter.wins}</p>
        <p>${fighter.losses}</p>
        <p>${fighter.draws}</p>
        <p>${fighter._id}</p>

        <form data-id="${fighter._id}">
        <input type="text" name="firstName" value="${fighter.firstName}" />
        <input type="text" name="lastName" value="${fighter.lastName}" />
        <input type="number" name="strength" value="${fighter.wins}" />
        <input type="number" name="strength" value="${fighter.losses}" />
        <input type="number" name="strength" value="${fighter.draws}" />
        <input type="submit" value="Update fighter" />
    </form>

    <button type="button" data-id="${fighter._id}">Delete fighter</button>
    `
    showFighterContainer.appendChild(div)
}

export const onUpdateFighterSuccess = () => {
    messageContainer.innerText = 'Update was successful :)'
}

export const onDeleteFighterSuccess = () => {
    messageContainer.innerText = 'Delete was successful :)'
}
