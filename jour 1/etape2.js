export const etape2 = () => {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    .then(response => response.json())
    .then(json => {
        console.log(json);
    })
}