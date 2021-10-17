import * as React from "react";
import Radio from "@mui/material/Radio";
const RadioButton = (props) => {
  const handleChange = (event) => {
    props.setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: props.selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <div>
      <Radio
        {...controlProps("a")}
        sx={{
          color: "#E28383",
          "&.Mui-checked": {
            color: "#E28383",
          },
        }}
      />
      <Radio
        {...controlProps("b")}
        sx={{
          color: "#D9D572",
          "&.Mui-checked": {
            color: "#D9D572",
          },
        }}
      />
      <Radio
        {...controlProps("c")}
        sx={{
          color: "#8699DD",
          "&.Mui-checked": {
            color: "#8699DD",
          },
        }}
      />
      <Radio
        {...controlProps("d")}
        sx={{
          color: "#8ACF7F",
          "&.Mui-checked": {
            color: "#8ACF7F",
          },
        }}
      />
      <Radio
        {...controlProps("e")}
        sx={{
          color: "#C48EBE",
          "&.Mui-checked": {
            color: "#C48EBE",
          },
        }}
      />
    </div>
  );
};

export default RadioButton;
