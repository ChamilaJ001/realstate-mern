import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

/* eslint-disable react/prop-types */
const AutocompleteCompt = ({ cities, setCity }) => {
  const onInputChange = (value) => {
    setCity(value);
  };
  return (
    <Autocomplete
      placeholder="Search a district"
      className="max-w-xs"
      variant="bordered"
      color="primary"
      onKeyDown={(e) => e.continuePropagation()}
      onInputChange={onInputChange}
    >
      {cities?.map((val) => (
        <AutocompleteItem key={val} value={val}>
          {val}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
};

export default AutocompleteCompt;
