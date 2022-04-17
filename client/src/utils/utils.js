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

export { capitalize };
