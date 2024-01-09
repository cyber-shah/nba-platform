import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

export default function DateSelector(props) {

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
        onChange={(newDate) => props.setSelectedDate(dayjs(newDate).format('YYYYMMDD').toString())}
        slotProps={{ textField: { size: "small" } }}
      />
    </LocalizationProvider>
  );
}
