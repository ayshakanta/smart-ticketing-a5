function buyTickets(){
    const paribahanSection = document.getElementById("paribahan-section")
    paribahanSection.scrollTop = paribahanSection.scrollHeight

}

const classTitle = 'Economy' ;
const priceTitle = '550' ;

let clickCount = 0 ;


const seats = document.querySelectorAll(".seats");

for (let index = 0; index < seats.length; index++) {
    
    const seat = seats[index];

    seat.addEventListener('click', function(){
        
        const title = seat.querySelector("span").innerText ;
        setBackgroundColorById(title)

        const seatDetailContainer = document.getElementById("seat-details-container")

        const p1 = document.createElement("p")
        p1.innerText = title ;
        seatDetailContainer.appendChild(p1)

        const economyClass = document.getElementById("economy-class")

        const p2 = document.createElement("p")
        p2.innerText = classTitle ;
        economyClass.appendChild(p2)

        const priceClass = document.getElementById("price-title")

        const p3 = document.createElement("p")
        p3.innerText = priceTitle ;
        priceClass.appendChild(p3)
        
    })
    
}

