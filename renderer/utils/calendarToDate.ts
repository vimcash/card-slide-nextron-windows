export const calendarToDate = (inCalendar, splitBy = "-") => `'${inCalendar.split(splitBy)[2]}.${inCalendar.split(splitBy)[1]}.${inCalendar.split(splitBy)[0]}'`