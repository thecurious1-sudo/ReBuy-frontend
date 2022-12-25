// user ={id: user._id, token: await generateAccessToken(data)} }

module.exports.saveUserInfoLocal = function (user) {
  const { data, token } = user;
  const { id } = data;
  const userInfo = { id, token };
  localStorage.setItem(`user`, JSON.stringify(userInfo));
};

module.exports.deleteUserInfoLocal = function () {
  localStorage.removeItem(`user`);
};
