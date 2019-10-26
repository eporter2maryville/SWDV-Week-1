
class Grocery{
    lineItem: string;
    constructor(public name: string, public quantity: string, public department: string) {
        this.lineItem = name + ", " + quantity + ", " + department;
    }
}

interface listItem{
    name: string;
    quantity: string;
}

function groceryList(groceries: listItem) {
    return "What: " + groceries.name + " | " + "How Many: " + groceries.quantity;
}

let apples = new Grocery ("Apples", "4", "Produce");
let cheese = new Grocery ("Cheese Block", "1", "Dairy")
let notDelivery = new Grocery ("Pizza", "3", "Frozen Foods")

document.body.textContent = groceryList(apples) + groceryList(cheese) + groceryList(notDelivery)

