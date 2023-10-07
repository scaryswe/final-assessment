import data from './data.json';
import { capitalize } from '@scaryswe/string-lib';

// Challenge 1
data.forEach((person) => {
  person.first_name = capitalize(person.first_name);
  person.last_name = capitalize(person.last_name);
});

// Challenge 2
const options: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString(undefined, options);
}

// Challenge 3
function when(date1: Date, date2: Date): number {
  const months = (date2.getFullYear() - date1.getFullYear()) * 12;
  return months - date1.getMonth() + date2.getMonth();
}

// Challenge 4
export function formatPhone(phone: string): string {
  if (phone.length !== 10) {
    throw new Error('Needs to be 9 digits');
  } else if (isNaN(Number(phone))) {
    throw new Error('Must contain only digits');
  }

  try {
    const areaCode = phone.slice(0, 3);
    const firstThree = phone.slice(3, 6);
    const lastFour = phone.slice(6, 10);
    return `(${areaCode}) ${firstThree}-${lastFour}`;
  } catch (error) {
    console.log(error);
    throw new Error('Incorrect format');
  }
}

// Console logs
data.forEach((person) => {
  console.log('--------------------');
  // Challenge 1
  console.log(person.first_name, person.last_name);

  // Make and model
  console.log(capitalize(person.make), capitalize(person.model));

  // Challenge 2
  console.log('Purchased:', formatDate(person.purchased));

  // Challenge 3
  const monthsDiff = when(new Date(person.lastpayment), new Date());
  console.log('Last Payment:', `${monthsDiff} months ago`);

  // Challenge 4
  console.log('Phone:', formatPhone(person.phone));

  // City
  console.log('City:', capitalize(person.city));

  console.log('--------------------');
});
