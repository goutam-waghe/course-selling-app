export const sendToken = async (res, user, message, statusCode = 200) => {
  const token = await user.generateToken();
  const options = {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 15),
    httpOnly: true,
  };
  res.cookie("token", token, options).status(statusCode).json({
    message: message,
    user: user,
    token,
  });
};
