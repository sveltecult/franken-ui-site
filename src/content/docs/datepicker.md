---
group: alpine-components
name: Datepicker
title: Tailwind CSS Datepicker
meta:
  description: A date field component that allows users to enter and edit date.
javascript: partial
---

# Datepicker

<p class="mt-2 text-xl text-muted-foreground">
  A date field component that allows users to enter and edit date.
</p>

## Usage

Datepicker can be easily build using existing components from Franken UI and some Tailwind CSS utility classes. And with the help of [Alpine.js](https://alpinejs.dev/), we can create a full-fledge calendar without leaving our HTML.

```example
<div
  x-data="{
    datePickerOpen: false,
    datePickerValue: '',
    datePickerFormat: 'M d, Y',
    datePickerMonth: '',
    datePickerYear: '',
    datePickerDay: '',
    datePickerDaysInMonth: [],
    datePickerBlankDaysInMonth: [],
    datePickerMonthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datePickerDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datePickerDayClicked(day) {
        let selectedDate = new Date(this.datePickerYear, this.datePickerMonth, day);
        this.datePickerDay = day;
        this.datePickerValue = this.datePickerFormatDate(selectedDate);
        this.datePickerIsSelectedDate(day);
        this.datePickerOpen = false;
    },
    datePickerPreviousMonth(){
        if (this.datePickerMonth == 0) {
            this.datePickerYear--;
            this.datePickerMonth = 12;
        }
        this.datePickerMonth--;
        this.datePickerCalculateDays();
    },
    datePickerNextMonth(){
        if (this.datePickerMonth == 11) {
            this.datePickerMonth = 0;
            this.datePickerYear++;
        } else {
            this.datePickerMonth++;
        }
        this.datePickerCalculateDays();
    },
    datePickerIsSelectedDate(day) {
        const d = new Date(this.datePickerYear, this.datePickerMonth, day);
        return this.datePickerValue === this.datePickerFormatDate(d) ? true : false;
    },
    datePickerIsToday(day) {
        const today = new Date();
        const d = new Date(this.datePickerYear, this.datePickerMonth, day);
        return today.toDateString() === d.toDateString() ? true : false;
    },
    datePickerCalculateDays() {
        let daysInMonth = new Date(this.datePickerYear, this.datePickerMonth + 1, 0).getDate();
        // find where to start calendar day of week
        let dayOfWeek = new Date(this.datePickerYear, this.datePickerMonth).getDay();
        let blankdaysArray = [];
        for (var i = 1; i <= dayOfWeek; i++) {
            blankdaysArray.push(i);
        }
        let daysArray = [];
        for (var i = 1; i <= daysInMonth; i++) {
            daysArray.push(i);
        }
        this.datePickerBlankDaysInMonth = blankdaysArray;
        this.datePickerDaysInMonth = daysArray;
    },
    datePickerFormatDate(date) {
        let formattedDay = this.datePickerDays[date.getDay()];
        let formattedDate = ('0' + date.getDate()).slice(-2); // appends 0 (zero) in single digit date
        let formattedMonth = this.datePickerMonthNames[date.getMonth()];
        let formattedMonthShortName = this.datePickerMonthNames[date.getMonth()].substring(0, 3);
        let formattedMonthInNumber = ('0' + (parseInt(date.getMonth()) + 1)).slice(-2);
        let formattedYear = date.getFullYear();

        if (this.datePickerFormat === 'M d, Y') {
        return `${formattedMonthShortName} ${formattedDate}, ${formattedYear}`;
        }
        if (this.datePickerFormat === 'MM-DD-YYYY') {
        return `${formattedMonthInNumber}-${formattedDate}-${formattedYear}`;
        }
        if (this.datePickerFormat === 'DD-MM-YYYY') {
        return `${formattedDate}-${formattedMonthInNumber}-${formattedYear}`;
        }
        if (this.datePickerFormat === 'YYYY-MM-DD') {
        return `${formattedYear}-${formattedMonthInNumber}-${formattedDate}`;
        }
        if (this.datePickerFormat === 'D d M, Y') {
        return `${formattedDay} ${formattedDate} ${formattedMonthShortName} ${formattedYear}`;
        }

        return `${formattedMonth} ${formattedDate}, ${formattedYear}`;
    },
  }"
  x-init="
    currentDate = new Date();
    if (datePickerValue) {
        currentDate = new Date(Date.parse(datePickerValue));
    }
    datePickerMonth = currentDate.getMonth();
    datePickerYear = currentDate.getFullYear();
    datePickerDay = currentDate.getDay();
    datePickerValue = datePickerFormatDate( currentDate );
    datePickerCalculateDays();
  "
  x-cloak
>
  <div class="w-72 space-y-1">
    <label for="datepicker" class="uk-form-label">Select Date</label>
    <div class="uk-form-controls">
      <div class="uk-inline relative w-full">
        <input
          id="datepicker"
          x-ref="datePickerInput"
          type="text"
          @click="datePickerOpen=!datePickerOpen"
          x-model="datePickerValue"
          x-on:keydown.escape="datePickerOpen=false"
          class="uk-input"
          placeholder="Select date"
          readonly
        />
        <a
          @click="datePickerOpen=!datePickerOpen; if(datePickerOpen){ $refs.datePickerInput.focus() }"
          class="uk-form-icon uk-form-icon-flip text-muted-foreground cursor-pointer"
          uk-icon="icon: calendar"
        >
          <span class="sr-only">Open datepicker</span>
        </a>

        <div
          x-show="datePickerOpen"
          x-transition
          @click.away="datePickerOpen = false"
          class="uk-card uk-card-default absolute left-0 top-0 mt-10 w-full p-3"
        >
          <div class="relative flex items-center justify-center pt-1">
            <button
              @click="datePickerPreviousMonth()"
              type="button"
              class="uk-icon-button h-7 w-7 flex-none"
            >
              <span uk-icon="icon: chevron-left; ratio: 0.8"></span>
            </button>
            <div class="flex-1 text-center text-sm font-medium">
              <span
                x-text="datePickerMonthNames[datePickerMonth]"
                class=""
              ></span>
              <span x-text="datePickerYear" class=""></span>
            </div>
            <button
              @click="datePickerNextMonth()"
              type="button"
              class="uk-icon-button h-7 w-7 flex-none"
            >
              <span uk-icon="icon: chevron-right; ratio: 0.8"></span>
            </button>
          </div>

          <div class="mt-4 grid grid-cols-7">
            <template x-for="(day, index) in datePickerDays" :key="index">
              <div class="px-0.5">
                <div
                  x-text="day"
                  class="text-center text-xs text-muted-foreground"
                ></div>
              </div>
            </template>
          </div>

          <div class="mt-2 grid grid-cols-7">
            <template x-for="blankDay in datePickerBlankDaysInMonth">
              <div
                class="border border-transparent p-1 text-center text-sm"
              ></div>
            </template>
            <template
              x-for="(day, dayIndex) in datePickerDaysInMonth"
              :key="dayIndex"
            >
              <div class="mb-1 aspect-square px-0.5">
                <button
                  x-text="day"
                  @click="datePickerDayClicked(day)"
                  :class="{
                      'bg-accent text-accent-foreground': datePickerIsToday(day) == true,
                      'hover:bg-accent hover:text-accent-foreground': datePickerIsToday(day) == false && datePickerIsSelectedDate(day) == false,
                      'bg-primary text-primary-foreground': datePickerIsSelectedDate(day) == true
                  }"
                  class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-center text-sm leading-none ring-ring focus:outline-none focus:ring-1"
                ></button>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Data

Below you will find the data properties available in the `x-data` attribute of this element.

| Property and Description        | Description                                                                                                                 |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `datePickerOpen`                | If the date picker is open (true or false)                                                                                  |
| `datePickerValue`               | The default date value. If left empty the current date will be used                                                         |
| `datePickerFormat`              | You can choose a few different formats to display the date. See all available formats in the datePickerFormatDate() method. |
| `datePickerMonth`               | Numerical value of the current month (0-11)                                                                                 |
| `datePickerYear`                | Numerical value of the current year                                                                                         |
| `datePickerDay`                 | Numerical value of the current day                                                                                          |
| `datePickerDaysInMonth`         | Array containing the number of days in the selected month                                                                   |
| `datePickerBlankDaysInMonth`    | Array containing the number of blank days before the first day of the month                                                 |
| `datePickerMonthNames`          | Array containing the names of the months                                                                                    |
| `datePickerDays`                | Array containing the names of the days                                                                                      |
| `datePickerDayClicked(day)`     | When a day is clicked on the datepicker set the new date value                                                              |
| `datePickerPreviousMonth()`     | Go to the previous month                                                                                                    |
| `datePickerNextMonth()`         | Go to the next month                                                                                                        |
| `datePickerIsSelectedDate(day)` | Check if the day is the selected date                                                                                       |
| `datePickerIsToday(day)`        | Check if the day is today                                                                                                   |
| `datePickerCalculateDays()`     | Calculate the number of days in the month                                                                                   |
| `datePickerFormatDate(date)`    | Format the date to the selected format                                                                                      |
