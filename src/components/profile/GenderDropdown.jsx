import { useMediaQuery, Select, MenuItem } from "@mui/material";

const GenderDropdown = ({ data }) => {
  const matchesSm = useMediaQuery("(max-width:600px)");

  return (
    <Select
      size={matchesSm ? "small" : "medium"}
      fullWidth
      id={data.id}
      name={data.field}
      value={data.value}
      // disabled={!editProfile}
      //edit={editProfile}
      // onChange={
      //   (formik.handleChange,
      //   (e) => {
      //     let newArr = [...userData];
      //     newArr[data.id - 1].value = e.target.value;
      //     setUserData(newArr);
      //   })
      // }
    >
      {data.options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  );
};

export default GenderDropdown;
