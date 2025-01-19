/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayType {
  Workday = 'Workday',
  Weekend = 'Weekend'
}

enum Weekday {
  Monday = DayType.Workday,
  Tuesday = DayType.Workday,
  Wednesday = DayType.Workday,
  Thursday = DayType.Workday,
  Friday = DayType.Workday,
  Saturday = DayType.Weekend,
  Sunday = DayType.Weekend
}

function isWeekend(day: Weekday): boolean {
  return Weekday[day] === DayType.Weekend;
}

export {};