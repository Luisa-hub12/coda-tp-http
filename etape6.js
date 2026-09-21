export const etape6 = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(json => {
        console.log(json);
    })

}