/* 
 *  monthFormatterFromDigitsToLetters function
 *  convert a number in the appropriate 
 *  literally name month. 
*/
const monthFormatterFromDigitsToLetters = (month) => {

  try {
    if (typeof month !== 'string') {
      throw new Error('Month parameter should be a string');
    }
  } catch (e) {
    console.error(e.message);
  }

  switch(month) {
    case '01': 
      return 'January';
    case '02': 
      return 'February';
    case '03': 
      return 'March'; 
    case '04':
      return 'April';
    case '05':
      return 'May';
    case '06':
      return 'June';
    case '07':
      return 'July';
    case '08':
      return 'August';
    case '09':
      return 'September';
    case '10':
      return 'October';
    case '11':
      return 'November';
    case '12':
      return 'December';
    default: 
      return 'No item'; 
  }
}


/* 
 *  dateSubscriptionFormatter is an utility function
 *  that take in input a date in a string format 
 *  and return an array of two elements, 
 *  representing the appropriate month and year.
 * 
 *  It lean to x function to get the name of the month.
*/
const dateSubscriptionFormatter = (date) => {
  // Copy the date in input
  let subscriptionUserDate = date;
  // Container to split the parts of date
  let slicesArrayDate;
  let year;
  let month;

  try {
    if (typeof subscriptionUserDate !== 'string') {
      throw new Error('Date must be a string');
    }

    slicesArrayDate = subscriptionUserDate.split('-');
    year = slicesArrayDate[0];
    month = slicesArrayDate[1];

    month = monthFormatterFromDigitsToLetters(month);

    // A new array with year and month elements
    return Array.of(year, month);

  } catch (e) {
    console.error(e.message);
  }

};

export default dateSubscriptionFormatter;
