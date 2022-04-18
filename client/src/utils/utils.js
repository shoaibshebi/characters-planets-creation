import { Tooltip } from "@mui/material";

const stringCheck = (input) => {
  return input !== null &&
    input !== "" &&
    input !== undefined &&
    typeof input === "string"
    ? true
    : false;
};
const allWordsCapitalize = (input) => {
  if (
    input !== null &&
    input !== "" &&
    input !== undefined &&
    typeof input === "string"
  ) {
    var words = input?.split(" ");
    var CapitalizedWords = [];
    words.forEach((element) => {
      CapitalizedWords.push(
        element[0]?.toUpperCase() + element?.slice(1, element?.length)
      );
    });
    return CapitalizedWords?.join(" ");
  }
  input = "";
  return input;
};

const tooltipTrim = (input, len) => {
  if (stringCheck(input)) {
    input = allWordsCapitalize(input);
    return input.length > len ? (
      <Tooltip title={input} placement="top">
        <span>{input.substring(0, len) + "..."}</span>
      </Tooltip>
    ) : (
      input
    );
  }
  return input;
};
const capitalize = (input) => {
  if (
    input !== null &&
    input !== "" &&
    input !== undefined &&
    typeof input === "string"
  ) {
    var words = input?.split("_");
    var CapitalizedWords = [];
    words.forEach((element) => {
      CapitalizedWords.push(
        element[0]?.toUpperCase() + element?.slice(1, element?.length)
      );
    });
    return CapitalizedWords?.join(" ");
  }
  input = "";
  return input;
};

export { capitalize, stringCheck, tooltipTrim, allWordsCapitalize };
