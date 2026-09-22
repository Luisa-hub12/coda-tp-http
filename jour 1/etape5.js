export const etape5 = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            completed: true
        })
    })
    .then(response => response.json())
    .then(json => {
        console.log(json);
    })
}