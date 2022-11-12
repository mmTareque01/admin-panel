import { useMediaQuery, Select, MenuItem } from "@mui/material";

const CountryDropdown = ({ data }) => {
  const matchesSm = useMediaQuery("(max-width:600px)");

  const match = (array, target) => {
    for (let i = 0; i < array.length; i++) {
      if (target === array[i].label) {
        return `${array[i].code}-${array[i].label}`;
      }
    }
    return target;
  };

  return (
    <Select
      size={matchesSm ? "small" : "medium"}
      fullWidth
      id={data.id}
      name={data.field}
      value={match(data.options, data.value)}
      //    disabled={!editProfile}
      // edit={editProfile}
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
        <MenuItem
          key={option.label ? option.code : option.value}
          value={option.label ? `${option.code}-${option.label}` : option.value}
        >
          {option.code && (
            <>
              <img
                loading="lazy"
                width="25"
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                alt={`Flag of ${option.label}`}
              />
              &nbsp; &nbsp;
            </>
          )}

          {option.label ? option.label : option.name}
        </MenuItem>
      ))}
    </Select>
  );
};

export default CountryDropdown;
