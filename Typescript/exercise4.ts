/*Exercise 4: Enumerations

Create an enumeration for different days of the week.
Write a function that takes a DayOfWeek and returns a message indicating whether it's a working day or a weekend.*/

enum DayOfWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
  };

  const dayType = (day: DayOfWeek): string => {
      let res: string;
      switch(day){
        case DayOfWeek.Sunday:
          res = "weekend";
          break;
        case DayOfWeek.Saturday:
          res = "weekend";
          break;
        default:
          res = "working day";
      }

      return res;
  }

  let res = dayType(DayOfWeek.Sunday);
  console.log(res)
