const UserModel = require("../models/UserModel");
const { BadRequestError, UnauthorizedError } = require("../errors/");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
  const { firstName, email, password } = req.body;

  if (!firstName || !email || !password) {
    throw new BadRequestError("Must provide all values");
  }

  //check if user already exists
  const duplicateUser = UserModel.findOne({ email });
  if (duplicateUser) {
    throw new BadRequestError(
      "Email address already exists, Please provide a different email address"
    );
  }
  const user = await UserModel.create(req.body);

  const token = await user.createJWT();

  res
    .status(StatusCodes.CREATED)
    .json({ user: { firstName: user.firstName, email: user.email }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Must Provide all values");
  }
  const user = user.findOne({ email });
  const isPasswordCorrect = user.await comparePassword(password);

  if(!isPasswordCorrect){
    throw new UnauthorizedError('Unauthorized User, please try again')
  }

  const token = await user.createJWT();

  res
    .status(StatusCodes.CREATED)
    .json({ user: { firstName: user.firstName, email: user.email }, token });
};

module.exports = { register, login };
