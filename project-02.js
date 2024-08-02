const car = {year:"2015", make:"Toyota", model:"Prius"};
const truck = {year:"2019", make:"Ford", model:"F-150"};

cars(car, truck);
function cars(car, truck){
    var prompt = document.getElementById("prompt");
    car.year = 2024;
    prompt.innerHTML = "Steven is driving a " + car.year + " " + car.make + " " + car.model + ", and Sarah is driving a " + truck.year + " " + truck.make + " " + truck.model + ".";
}