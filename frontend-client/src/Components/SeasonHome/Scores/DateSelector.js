import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export default function DateSelector(props) {
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    if (selectedDate) {
      const formattedDate = dayjs(selectedDate).format('YYYYMMDD');
      console.log(formattedDate);
      props.setDate(formattedDate.toString());
    }
  }, [selectedDate, props]);

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
        value={selectedDate}
        onChange={(newDate) => setSelectedDate(newDate)}
        slotProps={{ textField: { size: "small" } }}
      />
    </LocalizationProvider>
  );
}
