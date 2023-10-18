import { useMemo } from "react";
import useCountry from "../../hooks/useCountry";

interface Props {
  handleSelected: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  country: string;
}

const SelectCountry = ({ handleSelected, country }: Props) => {
  const { data: countries } = useCountry(); 
  const options = useMemo(
    () =>
      countries?.map((country) => (
        <option key={country.country_id} value={country.country_id}>
          {country.label}
        </option>
      )),
    [countries],
  );
  return (
    <div className="container-row">
      <div className="form-group">
        <label>Country</label>
        <select onChange={(event) => handleSelected(event)} value={country}>
          {options}
        </select>
      </div>
    </div>
  );
};

export default SelectCountry;
