interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  label: string;
  value: string | number;
  min?: number;
  max?: number;
}


const InputText = ({ value, label, type, handleChange, min, max }: Props) => {
  function toChapterCase(str:string){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <div className="form-group">
      <label>{toChapterCase(label)}</label>
      <input
        onChange={(e) => handleChange(e)}
        type={type}
        id={label.toLowerCase()}
        min={min}
        max={max}
        value={value}
      />
    </div>
  );
};

export default InputText;
