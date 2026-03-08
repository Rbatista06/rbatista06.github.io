document.querySelectorAll("nav a").forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault()

const target = document.querySelector(this.getAttribute("href"))

target.scrollIntoView({
behavior:"smooth"
})

})

})

document.querySelectorAll(".galeria img").forEach(img => {

img.addEventListener("click", () => {

window.open(img.src)

})

})

//responsivo.
@media (max-width: 900px){

header{
flex-direction:column;
gap:15px;
text-align:center;
}

nav a{
margin:0 10px;
}

.hero h2{
font-size:36px;
}

section{
padding:60px 30px;
}

//projeto destaque

.projeto{
flex-direction:column;
text-align:center;
}

.projeto-img{
width:100%;
max-width:300px;
height:auto;
}

/* galeria */

.galeria{
justify-content:center;
flex-wrap:wrap;
}

.galeria img{
height:140px;
}

//contato

.contato-links{
flex-direction:column;
align-items:center;
}

}
