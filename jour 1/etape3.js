export const etape3 = () => {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId: 1,
            title: "delectus aut autem",
            completed: false
        })
    })
    .then(response => response.json())
    .then(json => {
        console.log(json);
    })
}