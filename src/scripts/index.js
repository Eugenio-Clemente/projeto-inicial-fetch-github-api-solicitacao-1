document.getElementById('btn-search').addEventListener("click", () => {
    const userName = document.getElementById("input-search").value 
    getUserProfile(userName) 
})

document.getElementById('input-search').addEventListener("keyup", (e) => {
    const userName = e.target.value 
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key == 13 
    if(isEnterKeyPressed){
      getUserProfile(userName)
    }
})

async function user(userName) {
 const response = await fetch(`https://api.github.com/users/${userName}`) 
 return response.json()
}

function getUserProfile(userName) {
    user(userName).then(userData =>{ 
    let userInfo = `<div class="info">
                    <img src="${userData.avatar_url} alt="Foto perfil do usuário"/>
                    <div class="data">
                      <h1>${userData.name?? "Não possui nome cadastrado 😥"}</h1>
                      <p>Login: ${userData.login??  "Não possui Login 😥"}</p>
                      <p>Bio: ${userData.bio?? "Não possui bio 😥"}</p>
                      <p>Seguidores: ${userData.followers?? "Não possui seguidores 😥"}</p>
                      <p>Seguindo: ${userData.following?? "Não possui pessoas seguindo 😥"}</p>
                      </div>
                      </div>`  

      document.querySelector(".profile-data").innerHTML = userInfo
    })
}
