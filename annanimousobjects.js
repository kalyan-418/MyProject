JS CODE changed again
class cards{
    constructor(value,suit){
        this.value=value;
        this.suit=suit;
    }
}
/*const cards1 = new cards("A","Hearts");
const cards2 = new cards("A","Hearts");
const cards3 = new cards("A","Hearts");
INSTEAD OF USING THIS MANY OBJECTS
*/
let card=[new cards("A","Hearts"),new cards("A","spade"),new cards("A","clubs")];
console.log("Using Ananimous Objects");

//card.forEach(cards => console.log(`${card.value}`) );
console.log(card[0].value +card[2].suit );
 