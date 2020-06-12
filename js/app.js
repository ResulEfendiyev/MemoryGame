document.addEventListener('DOMContentLoaded', () => {       
    const cardArray = [
        {
            name: 'img1',
            img: 'images/img-1.png'
        },
        {
            name: 'img1',
            img: 'images/img-1.png'
        },
        {
            name: 'img2',
            img: 'images/img-2.png'
        },
        {
            name: 'img2',
            img: 'images/img-2.png'
        },
        {
            name: 'img3',
            img: 'images/img-3.png'
        },
        {
            name: 'img3',
            img: 'images/img-3.png'
        },
        {
            name: 'img4',
            img: 'images/img-4.png'
        },
        {
            name: 'img4',
            img: 'images/img-4.png'
        },
        {
            name: 'img5',
            img: 'images/img-5.png'
        },
        {
            name: 'img5',
            img: 'images/img-5.png'
        },
        {
            name: 'img6',
            img: 'images/img-6.png'
        },
        {
            name: 'img6',
            img: 'images/img-6.png'
        }
    ]
    cardArray.sort(() => 0.5 - Math.random());
    const grid = document.querySelector('.grid');
    const resultDisplay = document.getElementById('result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];  
    function createBoard() {
        for(let i = 0; i < cardArray.length;i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'images/img-0.png')
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card); 
        }
    }
    
    function checkForMatch(){
        let cards = document.querySelectorAll('img');   
        let optionOneId = cardsChosenId[0];
        let optionTwoId = cardsChosenId[1];
        
        if(cardsChosen[0] === cardsChosen[1]){
            
            alert('You find a match');
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cardsWon.push(cardsChosen);
        }
        
        else{
            alert('Sorry, try again!');
            console.log(cards[optionOneId]);
            cards[optionOneId].setAttribute('src', 'images/img-0.png');
            cards[optionTwoId].setAttribute('src', 'images/img-0.png');
        }
        cardsChosen = [];
        cardsChosenId = [];
        
        resultDisplay.textContent = cardsWon.length;
        if( cardsWon.length === cardArray.length / 2){
            resultDisplay.textContent = 'Congrats! You find them all!';
        }
    }

    function flipCard(){
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        
        this.setAttribute('src', cardArray[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();
})


