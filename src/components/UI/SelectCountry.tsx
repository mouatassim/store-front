import { useMemo } from "react";
import useCountry from "../../hooks/useCountry";

interface Props {
  handleSelected: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  val: string;
  label:string;
}

const SelectCountry = ({ handleSelected, val:country,label }: Props) => {
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
        <label>{label}</label>
        <select onChange={(event) => handleSelected(event)} value={country}>
          {options}
        </select>
      </div>
    </div>
  );
};

export default SelectCountry;
