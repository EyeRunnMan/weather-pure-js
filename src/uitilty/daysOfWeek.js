export const DAY_0 = "SUNDAY";
export const DAY_1 = "MONDAY";
export const DAY_2 = "TUESDAY";
export const DAY_3 = "WEDNESDAY";
export const DAY_4 = "THURSDAY";
export const DAY_5 = "FRIDAY";
export const DAY_6 = "SATURDAY";

export const getDayString = (num) => {
  switch (num) {
    case 0:
      return DAY_0;
    case 1:
      return DAY_1;
    case 2:
      return DAY_2;
    case 3:
      return DAY_3;
    case 4:
      return DAY_4;
    case 5:
      return DAY_5;
    case 6:
      return DAY_6;
    default:
      break;
  }
};
