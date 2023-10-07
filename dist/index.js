var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPhone = void 0;
const data_json_1 = __importDefault(require("./data.json"));
const string_lib_1 = require("@scaryswe/string-lib");
// Challenge 1
data_json_1.default.forEach((person) => {
    person.first_name = (0, string_lib_1.capitalize)(person.first_name);
    person.last_name = (0, string_lib_1.capitalize)(person.last_name);
});
// Challenge 2
const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};
function formatDate(date) {
    return new Date(date).toLocaleDateString(undefined, options);
}
// Challenge 3
function when(date1, date2) {
    const months = (date2.getFullYear() - date1.getFullYear()) * 12;
    return months - date1.getMonth() + date2.getMonth();
}
// Challenge 4
function formatPhone(phone) {
    if (phone.length !== 10) {
        throw new Error('Must be 9 digits');
    }
    else if (isNaN(Number(phone))) {
        throw new Error('Must contain only digits');
    }
    try {
        const areaCode = phone.slice(0, 3);
        const firstThree = phone.slice(3, 6);
        const lastFour = phone.slice(6, 10);
        return `(${areaCode}) ${firstThree}-${lastFour}`;
    }
    catch (error) {
        console.log(error);
        throw new Error('Incorrect format');
    }
}
exports.formatPhone = formatPhone;
// Console logs
data_json_1.default.forEach((person) => {
    console.log('--------------------');
    // Challenge 1
    console.log(person.first_name, person.last_name);
    // Information
    console.log((0, string_lib_1.capitalize)(person.make), (0, string_lib_1.capitalize)(person.model));
    // Challenge 2
    console.log('Purchased:', formatDate(person.purchased));
    // Challenge 3
    const monthsDiff = when(new Date(person.lastpayment), new Date());
    console.log('Last Payment:', `${monthsDiff} months ago`);
    // Challenge 4
    console.log('Phone:', formatPhone(person.phone));
    // City
    console.log('City:', (0, string_lib_1.capitalize)(person.city));
    console.log('--------------------');
});
