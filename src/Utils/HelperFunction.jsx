const getFriendlyErrorMessage = (errorCode) => {
  const errorMessages = {
    "auth/invalid-email":
      "The email address is not valid. Please check and try again.",
    "auth/user-not-found": "No account found with this email. Please sign up.",
    "auth/wrong-password": "The password is incorrect. Please try again.",
    "auth/email-already-in-use":
      "This email is already registered. Please sign in instead.",
    "auth/weak-password":
      "Password is too weak. Please choose a stronger password.",

    default: "An unexpected error occurred. Please try again later.",
  };

  return errorMessages[errorCode] || errorMessages.default;
};

export default getFriendlyErrorMessage;
