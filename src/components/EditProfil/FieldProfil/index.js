import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { deleteUser } from '../../../actions/auth';

function FieldProfil({
  type,
  name,
  placeholder,
  inputValue,
  setInputValue,
  deleteUser,
}) {
  useEffect(() => () => {
    deleteUser();
  }, [deleteUser]);
  return (
    <input
      className="field__input px-4 mb-2 h-12"
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      defaultValue={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
}

FieldProfil.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

FieldProfil.defaultProps = {
  type: 'text',
};
export default FieldProfil;
