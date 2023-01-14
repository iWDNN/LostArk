export const server_list: string[] = [
  "루페온",
  "아브렐슈드",
  "카제로스",
  "아만",
  "카단",
  "카마인",
  "실리안",
  "니나브",
];

export const makeCalendar = (month: number = 0) => {
  const date = new Date();
  const firstDay = new Date(date.getFullYear(), date.getMonth() + month, 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + month + 1, 0);
  const resultArr = [];
  let count = 1;
  for (let i = 0; i < 35; i++) {
    if (i < firstDay.getDay()) {
      resultArr.push({
        date: null,
        day: 0,
        active: false,
      });
    } else if (
      i >= firstDay.getDay() &&
      i < lastDay.getDate() + firstDay.getDay()
    ) {
      resultArr.push({
        date:
          count <= lastDay.getDate()
            ? count === 1
              ? new Date(firstDay.setDate(firstDay.getDate()))
              : new Date(firstDay.setDate(firstDay.getDate() + 1))
            : null,
        day: count <= lastDay.getDate() ? count : 0,
        active: false,
      });
      count++;
    } else {
      resultArr.push({
        date: null,
        day: 0,
        active: false,
      });
    }
  }
  return resultArr;
};
