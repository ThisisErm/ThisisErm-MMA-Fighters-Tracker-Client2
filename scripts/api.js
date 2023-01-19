export const indexFighter = () => {
    return fetch(`http://localhost:8000/fighters`)
}

export const createFighter = (data) => {
    return fetch(`http://localhost:8000/fighters`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const showFighter = (id) => {
    return fetch(`http://localhost:8000/fighters/${id}`)
}
