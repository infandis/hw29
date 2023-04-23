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
}
