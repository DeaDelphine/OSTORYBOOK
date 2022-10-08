import PropTypes from 'prop-types';
import './styles.scss';

function FieldProfil({
  onChange,
  nickname,
  placeholder,
  inputValue,
}) {
  const handleChange = (evt) => {
    onChange(evt.target.value, nickname);
  };

  return (
    <input
      className="field-input"
      id={nickname}
      name={nickname}
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChange}
      nickname={nickname}
    />
  );
}

FieldProfil.propTypes = {
  placeholder: PropTypes.string.isRequired,
  nickname: PropTypes.string,
  inputValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

FieldProfil.defaultProps = {
  inputValue: '',
  nickname: '',
};

export default FieldProfil;
