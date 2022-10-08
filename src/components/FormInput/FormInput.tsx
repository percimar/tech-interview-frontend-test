import "./FormInput.scss";

type FormInputParams<T> = {
  value: T;
  setValue: React.Dispatch<React.SetStateAction<T>>;
  label: string;
  error?: string;
  type?: React.HTMLInputTypeAttribute;
  disabled?: boolean;
};

const FormInput = ({
  value,
  setValue,
  label,
  error = "",
  type = "text",
  disabled = false,
}: FormInputParams<any>) => {
  return (
    <>
      <label className="FormLabel" htmlFor={label}>
        {label}
      </label>
      <input
        className="FormInput"
        type={type}
        name={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
      />
      <div className="FormError">{error}</div>
    </>
  );
};

export default FormInput;
