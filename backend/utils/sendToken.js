export const sendToken = async (res, user, message, statusCode = 200) => {
  const token = await user.generateToken();
  const options = {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 15),
    httpOnly: true,
    // secure: true,
    _sameSite: "none",
    get sameSite() {
      return this._sameSite;
    },
    set sameSite(value) {
      this._sameSite = value;
    },
  };
  res.cookie("token", token, options).status(statusCode).json({
    message: message,
    user: user,
    token,
  });
};
