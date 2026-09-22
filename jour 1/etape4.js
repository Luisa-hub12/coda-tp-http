export const etape4 = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId: 1,
            title: "delectus aut autem",
            completed: true
        })
    })
    .then(response => response.json())
    .then(json => {
        console.log(json);
    })

}