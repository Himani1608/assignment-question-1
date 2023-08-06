const Dropdown = ({ options, onChange, selectedItem } , props) => {
  const {variant = 'one' , children , ...rest} = props;
  return (
    <select
      name="currency"
      id="currency"
      value={selectedItem}
      onChange={onChange}
      className= {`dropdown ${variant}`} {...rest}
    >
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default Dropdown