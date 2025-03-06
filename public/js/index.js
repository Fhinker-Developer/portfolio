


const url = "https://api.github.com/users/cceffas";


const avatar=document.querySelector(".container-img img")
const text_name = document.querySelector(".container-txt h1")
const text_bio = document.querySelector(".container-txt p")

// text_bio.textContent="banaa"

async function apiResquest(url) {


    const query = await fetch(url)


    let data = await query.json()
    console.log(data)


    // console.log()

    text_bio.textContent = data['bio']
    avatar.src=data['avatar_url']
    text_name.textContent=data['name']








}


apiResquest(url);
// apiResquest("https://fhinker-games.itch.io/rgbol");