// Ahoy matey!

// You are a leader of a small pirate crew. And you have a plan. With the help of OOP you wish to make a pretty efficient system to identify ships with a heavy booty on board.

// Unfortunattely for you, people weigh a lot this days, so how do you know if a ship if full of gold and not people?

// Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:

// draft - an estimate of the ship's weight based on how low it is in the water
// crew - the count of crew on board
// Taking into account that an average crew member on board adds 1.5 units to the draft, a ship that has a draft of more than 20 without crew is considered worthy to loot. 
//Any ship weighing that much must have a lot of booty!

// Add the method

// You begin with writing a generic Ship class:

//P num
//R num
//E 
//P

function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
    titanic.isWorthIt = function(){
        return(this.draft - (this.crew *1.5) > 20)
    }
}


var titanic = new Ship(15, 10)