class FormValidator {
  constructor(settings, formEl) {
    this._inputSelector = settings._inputSelector;
    this._submitButtonSelector = settings._submitButtonSelector;
    this._errorClass = settings._errorClass;
    this._inputErrorClass = settings._inputErrorClass;
    this._inactiveButtonClass = settings._inactiveButtonClass;
    this._formEl = formEl;
  }

  enableValidation() {}
}

export default FormValidator;
