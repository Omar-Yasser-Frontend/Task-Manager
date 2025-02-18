export function dateDistance(date) {
  date = new Date(date);
  const currDate = new Date();

  let distance = {
    year: date.getFullYear() - currDate.getFullYear(),
    month: date.getMonth() - currDate.getMonth(),
    day: date.getDate() - currDate.getDate(),
  };

  if (distance.month < 0) {
    distance.year -= 1;
    distance.month += 12;
  }

  if (distance.day < 0) {
    const prevMonth = new Date(date.getFullYear(), date.getMonth(), 0); // Last day of previous month
    distance.month -= 1;
    distance.day += prevMonth.getDate();
  }

  if (distance.year < 0 || distance.month < 0 || distance.day < 0) {
    return "You passed the deadline";
  }

  return distance;
}
export function formatDate(date) {
  const year = date.year !== 0 ? `${date.year} year` : "";
  const month = date.month !== 0 ? `${date.month} month` : "";
  const day = date.day !== 0 ? `${date.day} day` : "";
  return `${year} ${month} ${day} left on deadline"`;
}
