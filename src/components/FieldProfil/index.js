import { useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Field({

  nickname,
  placeholder,
  inputValue,
  setInputValue,
  clearUserInput,
}) {
  useEffect(() => () => {
    clearUserInput();
  }, [clearUserInput]);
  return (
    <input
      className="field__input px-4 mb-2 h-12"
      id={nickname}
      name={nickname}
      placeholder={placeholder}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
}

Field.propTypes = {
  placeholder: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
  clearUserInput: PropTypes.func.isRequired,
};
export default Field;
