import mongoose from 'mongoose';

//an interface that describes the properties
//that are required to create a new User
interface UserAttr {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

const buildUser = (attrs: UserAttr) => {
  return new User(attrs);
};

export { User, buildUser };
