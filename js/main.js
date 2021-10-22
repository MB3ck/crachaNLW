//variáveis: let ou const

const linksSocialMedia = {
  github: 'MB3ck',
  youtube: '/channel/UCMd0nYZAyAJsHjiS4-VhwbQ',
  instagram: 'marcelob3cker',
  facebook: 'marcelob3cker',
  twitter: 'Mb3cker'
}

function changeSocialMediaLinks() {
  //for(let i = 0; i<= 10; i++) {}
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

//a contagem do computador sempre começa do zero: 0123456789

function getGitHubInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPic.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubInfos()

//Arrow functions :
// function nomeDaFuncao (argumentos){
//code
// }
// argumentos => {} : essa é a arrow function, de uma função anônima.
