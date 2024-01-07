import { notifyWarning } from "./Notifications";

export const validateForm = (form) => {
    // email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let emailData = {
      name: form.querySelector('input[name="to_name"]').value ?? "",
      email: form.querySelector('input[name="from_name"]').value ?? "",
      msg: form.querySelector('textarea[name="message"]').value ?? "",
    };

    // NAME VALIDATION
    if (emailData.name === "") {
      notifyWarning("El nombre no puede ir vacio.");
      return false;
    }
    // EMAIL VALIDATION
    if (emailData.email === "" || !emailRegex.test(emailData.email)) {
      notifyWarning("Verifica tu correo.");
      return false;
    }
    // MSG VALIDATION
    if (emailData.msg === "") {
      notifyWarning("Debes escribir un mensaje.");
      return false;
    }

    return true;
  };