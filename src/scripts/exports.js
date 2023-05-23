// Tierlist class.
export class Tierlist {
    tiers;
    hold;
    constructor() {
        this.tiers = [new Tier("S", "red"),
            new Tier("A", "orange"),
            new Tier("B", "yellow"),
            new Tier("C", "green"),
            new Tier("D", "blue")
        ];
        this.hold = new Tier("Holding", "grey");
    }

    // Moves an element from a tier a different one.
    moveTo(field, moveTo, moveFrom = null) {
        let refFrom = this.tiers.find(tier => tier == moveFrom);
        let refTo = this.tiers.find(tier => tier == moveTo);
        if ((refFrom == undefined && moveFrom != this.hold && moveFrom != null) || (refTo == undefined && moveTo != this.hold)) return;
        
        // Moves it to the specified tier.
        moveTo.add(field);
        if (moveFrom != null) refFrom.remove(field);
        console.log(`${field.name} moved from ${moveFrom} to ${moveTo.id}`);
    }

    // Creates a field and adds it to holding.
    createField(fieldName, fieldImg, fieldUrl = null) {
        // Create the object and move it to holding.
        let field = new Field(fieldName, fieldImg, fieldUrl);
        this.moveTo(field, this.hold);
    
        // Create the object in html.
        document.createElement("div");
    }
}

// Tier class.
export class Tier {
    id;
    container;
    color;
    constructor(tierID, tierCol) {
        this.id = tierID;
        this.container = [];
        this.color = tierCol;
    }

    // Adds a Field to the tier.
    add(field) {
        this.container.push(field);
    }

    // Moves a field to a different position.
    move(toMove, moveTo) {
        let move = this.container.find(field => field == toMove);
        let ref = this.container.findIndex(field => field == moveTo);
        if (ref == -1) return;

        // Moves the field.
        this.container.splice(ref, 0, move);
    }

    // Removes an element from the tier
    remove(del) {
        let ref = this.container.findIndex(field => field == del);
        if (ref == -1) return;

        // Removes the element.
        this.container.splice(ref, 1);
    }
}

// Field class.
export class Field {
    name;
    image;
    url;
    constructor(fieldName, fieldImg, fieldUrl = null) {
        this.name = fieldName;
        this.image = fieldImg;
        this.url = fieldUrl;
    }
}