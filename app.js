document.addEventListener('DOMContentLoaded', () => {

 const cardArray = [
    {
        name: 'ganhou',
        img: 'images/ganhou.png',
      },
   {
     name: 'ganhou',
     img: 'images/ganhou.png',
   },
    {
        name: 'direita',
        img: 'images/direita.png'
    },
    {
        name: 'direita',
        img: 'images/direita.png'
    },
    {
        name: 'trasd',
        img: 'images/trasd.png',
    },
    {
        name: 'trasd',
        img: 'images/trasd.png',
    },
{
    name: 'correndo',
    img: 'images/correndo.png'
},
{
    name: 'correndo',
    img: 'images/correndo.png'
},
{
     name: 'pulo',
     img: 'images/pulo.png'
},
{
    name: 'pulo',
    img: 'images/pulo.png'
},
{
    name:'esquerda',
    img: 'images/esquerda.png'
},
{
    name:'esquerda',
    img: 'images/esquerda.png'
}
 ]

 cardArray.sort(() => 0.5 - Math.random())

 const grid = document.querySelector('.grid')

 const resultDisplay = document.querySelector('#result')
 var cardsChosen = []
 var cardsChosenId = []
 var pares = []

 function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        var card = document.createElement('img')
        card .setAttribute('src','images/card.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
 }

 function checkFormMatch(){
    var card = document.querySelectorAll ('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if(optionOneId == optionTwoId){
        card[optionOneId].setAttribute('src','images/card.png')
        card[optionTwoId].setAttribute('src','images/card.png')
        alert("Voce clicou na mesma imagem")
    }

     else if(cardsChosen[0] == cardsChosen[1]){
        alert("Voce conseguiu um par !!")
        card[optionOneId].setAttribute('src', 'images/white.png')
        card[optionTwoId].setAttribute('src', 'images/white.png')
        card[optionOneId].removeEventListener('click',flipCard)
        card[optionTwoId].removeEventListener('click',flipCard)
        pares.push(cardsChosen)
     }
     else {
        card[optionOneId].setAttribute('src', 'images/card.png')
        card[optionTwoId].setAttribute('src', 'images/card.png')
        alert("Ops! jogue novamente :)")
     }

     cardsChosen = []
     cardsChosenId = []
     resultDisplay.textContent = pares.length

     if(pares.length == cardArray.length/2){
        resultDisplay.textContent = 'Parabens! Voce encontrou todos os pares!'
     }

     }



   function flipCard(){
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardsChosen.length == 2){
        setTimeout(checkFormMatch, 500)
    }
   }
   createBoard()

})