import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export default function DateSelector(props) {

  useEffect(() => {
    const formattedDate = dayjs(props.selectedDate).format('YYYYMMDD');
    props.setSelectedDate(formattedDate.toString());
  }, [props.selectedDate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        sx={{
          "& input": {
            fontStyle: "bold",
            borderColor: "white",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {},
            "&.Mui-focused fieldset": {},
          },
        }}
        label="Select Date"
        onChange={(newDate) => props.setSelectedDate(newDate)}
        slotProps={{ textField: { size: "small" } }}
      />
    </LocalizationProvider>
  );
}
