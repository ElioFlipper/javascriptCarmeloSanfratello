const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

function calculateSalary(role) {
    switch (role) {
        case "ceo":
            console.log("The ceo salary is 2200€");
            break;
        case "manager":
            console.log("The manager salary is 1800€");
            break;
        case "cto":
            console.log("The cto salary is 1800€");
            break;
        case "developer":
            console.log("The developer salary is 1500€");
            break;
        default:
            console.log("The default salary is 1000€")
    }
}

