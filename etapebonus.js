export const etapebonus = () => {
    let url = "https://jsonplaceholder.typicode.com/photos/418";
    let method = "PUT";

    fetch(url, {
        method: method,
        body: JSON.stringify({
            id: 418,
            title: "I am a teapot",
            url: "https://live.staticflickr.com/7006/6508102407_a4de65687b_c.jpg",
            thumbnailUrl: "https://live.staticflickr.com/7006/6508102407_a4de65687b_c.jpg"
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            console.log("Etape Bonus 1/2 (Photos mise à jour) :", json)

            return fetch(url, {
                method: "PATCH",
                body: JSON.stringify({
                    albumId: 42
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
        }).then((response) => response.json())
        .then((json) => console.log("Etape Bonus 2/2 (Associée à l'album 42) :", json))
        .catch((error) => console.error("Erreur :", error));
}