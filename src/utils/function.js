import './styles.scss';

const utils = {
  checkPassword: (newpassword, passwordcheck) => {
    if (newpassword || passwordcheck) {
      if (newpassword === passwordcheck) {
        return true;
      }
      return false;
    }
    return true;
  },

  errorMessage: (errors) => {
    let showErrors = '';

    if (errors) {
      switch (errors.status) {
        case 422:
          showErrors = Object.keys(errors.data).map((key) => <div className="login-form-right-title-error">{`${key} : ${errors.data[key]}`}</div>);
          break;
        case 204:
          showErrors = <div className="login-form-right-title-congrat">Bravo ! Vos modifications sont bien prises en compte !</div>;
          break;
        case 201:
          showErrors = <div className="login-form-right-title-congrat">Vous êtes bien inscrits ! Veuillez vous connecter pour jouer !</div>;
          break;
        default:
          showErrors = <div> </div>;
          break;
      }
    }

    return (
      <div>
        {showErrors}
      </div>
    );
  },
};

export default utils;
