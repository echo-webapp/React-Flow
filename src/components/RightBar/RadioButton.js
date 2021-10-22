import * as React from "react";
import Radio from "@material-ui/core/Radio";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SetColorTag } from "../../store/Reducers/message";
const colorList = ["#E28383", "#D9D572", "#8699DD", "#8ACF7F", "#C48EBE"];
const RadioButton = (props) => {
  const activeCardId = useSelector(
    (state) => state.cardState.cardState.activeCardId
  );
  const dispatch = useDispatch();
  const handleChange = (event) => {
    let data = {};
    data.id = activeCardId;
    if (event.target.value === "a") {
      data.tag = colorList[0];
    }
    if (event.target.value === "b") {
      data.tag = colorList[1];
    }
    if (event.target.value === "c") {
      data.tag = colorList[2];
    }
    if (event.target.value === "d") {
      data.tag = colorList[3];
    }
    if (event.target.value === "e") {
      data.tag = colorList[4];
    }
    console.log(event.target.value);
    props.setSelectedValue(event.target.value);
    dispatch(SetColorTag(data));
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
        style={{
          color: "#E28383",
          "&.Mui-checked": {
            color: "#E28383",
          },
        }}
      />
      <Radio
        {...controlProps("b")}
        style={{
          color: "#D9D572",
          "&.Mui-checked": {
            color: "#D9D572",
          },
        }}
      />
      <Radio
        {...controlProps("c")}
        style={{
          color: "#8699DD",
          "&.Mui-checked": {
            color: "#8699DD",
          },
        }}
      />
      <Radio
        {...controlProps("d")}
        style={{
          color: "#8ACF7F",
          "&.Mui-checked": {
            color: "#8ACF7F",
          },
        }}
      />
      <Radio
        {...controlProps("e")}
        style={{
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
