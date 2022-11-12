import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

const Phone_Input = ({ data }) => {
  return (
    <PhoneInput
      value={
        JSON.parse(data.value).dialCode + JSON.parse(data.value).phoneNumber
      }
      inputStyle={{
        //  backgroundColor: editProfile ? "#FFF" : "#ededed",
        width: "100%",
      }}
      style={{
        color: "black",
      }}
      //   disabled={!editProfile}
      onChange={(e, country) => {
        let data = JSON.stringify({
          countryCode: country.countryCode,
          dialCode: "+" + country.dialCode,
          phoneNumber: e.slice(country.dialCode.length),
        });
        //   formik.setFieldValue("phone", data);
      }}
    />
  );
};

export default Phone_Input;
