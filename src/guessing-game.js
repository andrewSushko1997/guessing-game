class GuessingGame {
    constructor() {
    	this.minNumber = 0;
    	this.maxNumber = 0;
    	this.midNumber = 0;
    }

    setRange(min, max) {
    	this.minNumber = min;
    	this.maxNumber = max;
    }

    guess() {
    	
    	return this.midNumber = Math.ceil((this.minNumber + this.maxNumber)/2);
    }

    lower() {
    	this.maxNumber = this.midNumber; 
    }

    greater() {
    	this.minNumber = this.midNumber;
    }
}

module.exports = GuessingGame;
