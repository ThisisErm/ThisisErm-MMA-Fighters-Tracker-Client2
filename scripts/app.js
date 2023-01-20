import { indexFighter, createFighter, showFighter, updateFighter, deleteFighter } from './api.js'
import { 
	onIndexFighterSuccess,
	onFailure,
	onCreateFighterSuccess,
	onShowFighterSuccess,
	onUpdateFighterSuccess,
	onDeleteFighterSuccess,
} from './ui.js'

const createfighterForm = document.querySelector('#create-fighter-form')
const indexfighterContainer = document.querySelector('#index-fighter-container')
const showfighterContainer = document.querySelector('#show-fighter-container')


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

	if (!id) return

    showFighter(id)
			.then((res) => res.json())
			.then((res) => onShowFighterSuccess(res.fighter))
			.catch(onFailure)
})

showfighterContainer.addEventListener('submit', (event) => {
	event.preventDefault()

	const id = event.target.getAttribute('data-id')

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

	if (!id) return

	updateFighter(fighterData, id)
		// this function (onUpdateFighterSuccess) does not need anything to run. NO params
		.then(onUpdateFighterSuccess)
		.catch(onFailure)
})

showfighterContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

	if (!id) return

	deleteFighter(id)
		.then(onDeleteFighterSuccess)
		.catch(onFailure)
})

