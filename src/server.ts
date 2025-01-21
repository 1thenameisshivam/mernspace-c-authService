import { PORT } from "./config";
function welcome(name: string) {
    console.log("welcome " + name);
    console.log("firstname");
}

const user = {
    name: "shivam",
    age: 25,
};

console.log(PORT, user);

welcome("shivam");
