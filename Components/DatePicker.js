import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import Input from "./Input";

export default function DatePicker({ onDateChange }) {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [dateString, setDateString] = useState("");

  // Define an array of month names
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  function onPressInHandler() {
    setShow(true);
  }

  // Function to get the day name from the day index
  function getDayName(dayOfWeek) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[dayOfWeek];
  }

  function convertDateToString(selectedDate) {
    // Get the day of the week as a number
    const dayOfWeek = selectedDate.getDay();
    // Get the day of the month
    const dayOfMonth = selectedDate.getDate();
    // Get the month
    const monthName = months[selectedDate.getMonth()];
    // Get the year
    const year = selectedDate.getFullYear();
    const formattedDateString = `${getDayName(
      dayOfWeek
    )} ${monthName} ${dayOfMonth} ${year}`;

    setDateString(formattedDateString);
  }

  const onChange = (e, selectedDate) => {
    setShow(false);
    setDate(selectedDate);
    convertDateToString(selectedDate);
    onDateChange(selectedDate);
  };

  return (
    <View>
      <Input label="Date *" value={dateString} onPressIn={onPressInHandler} />
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="inline"
          onChange={onChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
