import {FormDataContext} from "./FormDataContext";

let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

let day = new Date(); // Creating a new Date object

// Assuming you want to set specific parameters like year, month, and day
// Note: The month in JavaScript is 0-indexed (0 for January, 1 for February, etc.)

day.setFullYear(2023); // Set the year to 2023
day.setMonth(10); // Set the month to January (0)
day.setDate(30); // Set the date to the 1st
let formattedDay = day.toISOString().replace(/T.*$/, '');

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: formattedDay
  },
  {
    id: createEventId(),
    title: 'Timed test event',
    start: formattedDay
  }
]

export function createEventId() {
  return String(eventGuid++)
}