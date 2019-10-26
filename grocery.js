var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, department) {
        this.name = name;
        this.quantity = quantity;
        this.department = department;
        this.lineItem = name + ", " + quantity + ", " + department;
    }
    return Grocery;
}());
function groceryList(groceries) {
    return "What: " + groceries.name + " | " + "How Many: " + groceries.quantity;
}
var apples = new Grocery("Apples", "4", "Produce");
var cheese = new Grocery("Cheese Block", "1", "Dairy");
var notDelivery = new Grocery("Pizza", "3", "Frozen Foods");
document.body.textContent = groceryList(apples) + groceryList(cheese) + groceryList(notDelivery);
