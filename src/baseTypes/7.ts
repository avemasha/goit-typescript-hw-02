/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
  Sun
}

function isWeekend(day:DayOfWeek):boolean {
  return day === DayOfWeek.Sat || day === DayOfWeek.Sun;
}