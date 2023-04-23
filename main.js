class Human {
    constructor(name, sex) {
        this._name = name;
        this._sex = sex;
    }
    
    getName() { return this._name;  }
    getSex() { return this._sex; }
    setName(name) { this._name = name; }
    setSex(sex) { this._sex = sex; }   
}

class Flat {
    _dweller = [];

    getDweller() { return this._dweller; }
    setDweller() { return this._dweller; }

    addDweller(human) {
        if(!(human instanceof Human)) {
            console.log("human must be existed in Human");
            return;
        }
        this._dweller.push(human);
    }
}

class House {
    _flats = [];

    constructor(flatsCount) {
        this._flatsCount = flatsCount;
    }
    
    getFlats() { return this._flats;  }
    getFlatsCount() { return this._flatsCount; }
    setFlats(flats) { this._flats = flats; }
    setFlatsCount(flatsCount) { this._flatsCount = flatsCount; } 
    
    addFlat(flat) {
        if(!(flat instanceof Flat)) {
            console.log("flat must be existed in Flat");
            return;
        }
        if(this._flats.length < this._flatsCount) {
            this._flats.push(flat); 
        }
        else {
            console.log("max number of flats is reached")
        }
    }
}

let sue = new Human("Sue", "female");
let sveta = new Human("Sveta", "female");
let shandor = new Human ("Shandor", "male");
let ira = new Human("Ira", "female");

let flat1 = new Flat();
flat1.addDweller(sue);
flat1.addDweller(sveta);
let flat2 = new Flat();
flat2.addDweller(ira);
flat2.addDweller(shandor);

let home = new House(4);
home.addFlat(flat1);
home.addFlat(flat2);
