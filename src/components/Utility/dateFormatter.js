function formatDateFromMilliseconds(milliseconds) {
  // Create a new Date object using milliseconds
  let date = new Date(milliseconds);

  // Extract date components
  let day = date.getDate();
  let month = date.getMonth() + 1; // Months are zero indexed
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  // Adjust single digit components with leading zeros if needed
  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  // Determine AM/PM
  let period = hours >= 12 ? 'PM' : 'AM';

  // Convert hours from 24-hour time to 12-hour time
  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight (0 hours)

  // Construct formatted string in dd/mm/yyyy hh:mm a format
  let formattedDate = `${day}/${month}/${year} ${hours}:${minutes} ${period}`;

  return formattedDate;
}

export default formatDateFromMilliseconds;
