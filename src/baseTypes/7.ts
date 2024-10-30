/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DaysOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function isWeekend(value: number) {
    let weekend:number[]=[5,6];
    return weekend.includes(value);
}

console.log(isWeekend(DaysOfWeek.Sunday));