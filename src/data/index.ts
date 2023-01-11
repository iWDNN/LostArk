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

export const makeCalendar = () => {
  const date = new Date();
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const calArr1 = [];
  const calArr2 = [];
  for (let i = 0; i < firstDay.getDay(); i++) {
    calArr1.push({
      day: 0,
      active: false,
    });
  }
  for (let i = 0; i < lastDay.getDate(); i++) {
    calArr2.push({
      day: i + 1,
      active: false,
    });
  }
  return calArr1.concat(calArr2);
};
