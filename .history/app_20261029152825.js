const not = document.querySelector(".conteudo-escrito-eventos");
const button = document.getElementById("seta-proxima-pagina");

let indice = 0;

const h3 = document.getElementById("h3-upcoming-events");
const pData = document.getElementById("id-data-upcoming-events");
const pDescription = document.querySelector(".conteudo-escrito-eventos .paragrafos-site");

let content = [
    {
        h3: "Cinema",
        pData: "27/10/2026",
        pDescription: "defsgnbrd fnefne fsef bseifbse fvse fef"
    },
    {
        h3: "Cinema Night",
        pData: "27/10/2027",
        pDescription: "defsgnbrd fnefne dwaef bseifbse fvse fef"
    },
    {
        h3: "Coffe Night",
        pData: "25 september, 2019",
        pDescription: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
    }
]

button.addEventListener("click", () => {
    h3.textContent = content[indice].h3;
    pData.textContent = content[indice].pData;
    pDescription.textContent = content[indice].pDescription;

    indice = (indice + 1) % content.length; 
})

/*/**** */

const botao = document.getElementById("botao-livro-mesa");

botao.addEventListener("click", () => {
    botao.classList.toggle("token")
})