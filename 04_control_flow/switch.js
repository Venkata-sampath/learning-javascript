// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "january":
        console.log("january")
        break;
    case "february":
        console.log("february")
        break;
    case "march":
        console.log("march")
        break; // if break statement not applied then everything below gets executed except default case
    case "april":
        console.log("april")
        break;
    default:
        console.log("default case")
        break;
}