export const etape1 = () => {
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(json => {
        console.log(json);
    })

}