import PropTypes from 'prop-types';

function FieldProfil({
  type,
  name,
  placeholder,
  onChange,
  value,
}) {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };
  return (
    <input
      className="field__input px-4 mb-2 h-12"
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
}

FieldProfil.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

FieldProfil.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
};
export default FieldProfil;
