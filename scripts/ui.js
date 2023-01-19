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
        <h3>You've got an error! :(</h3>
        <p>${error}</p>
    `
}

export const onCreateFighterSuccess = () => {
    messageContainer.innerText = 'You have created added a fighter'
}

export const onShowFighterSuccess = (fighter) => {
    const div = document.createElement('div')
    div.innerHTML = `
        <h3>${fighter.firstName}  ${fighter.lastName}</h3>
        <p>${fighter.class}</p>
        <p>${fighter.strength}</p>
        <p>${fighter._id}</p>
    `
    showFighterContainer.appendChild(div)
}
