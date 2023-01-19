import { indexFighter, createFighter, showFighter } from './api.js'
import { onIndexFighterSuccess,
	onFailure,
	onCreateFighterSuccess,
	onShowFighterSuccess,
} from './ui.js'

const createfighterForm = document.querySelector('#create-fighter-form')
const indexfighterContainer = document.querySelector('#index-fighter-container')

indexFighter()
    .then(res => res.json())
    .then(res => {
        console.log(res)
        onIndexFighterSuccess(res.fighters)
    })
    .catch(onFailure)


createfighterForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const fighterData = {
			fighter: {
				firstName: event.target['firstName'].value,
				lastName: event.target['lastName'].value,
				fightingStyle: event.target['fightingStyle'].value,
				wins: event.target['wins'].value,
                losses: event.target['losses'].value,
				draws: event.target['draws'].value,
			},
		}

    // console.log(fighterData)
    createFighter(fighterData)
			.then(onCreateFighterSuccess)
			.catch(onFailure)
})

indexfighterContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')
    // console.log(id)

    showFighter(id)
			.then((res) => res.json())
			.then((res) => onShowFighterSuccess(res.fighter))
			.catch(onFailure)
})

