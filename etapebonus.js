export const etapebonus = () => {
    fetch('https://jsonplaceholder.typicode.com/photos/418', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "albumId": 42,
            "title": "new photo",
            "url": "https://live.staticflickr.com/7006/6508102407_a4de65687b_c.jpg",
            "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        })
    })
    .then(response => response.json())
    .then(json => {
        console.log(json);
    })

}