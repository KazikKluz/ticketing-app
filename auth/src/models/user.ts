import mongoose from 'mongoose';

//an interface that describes the properties
//that are required to create a new User
interface UserAttr {
  email: string;
  password: string;
}

//and interface that describes the properties
//that a User Model has
interface UserModel extends mongoose.Model<any> {
  build(attrs: UserAttr): any;
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

userSchema.statics.build = (attrs: UserAttr) => {
  return new User(attrs);
};

const User = mongoose.model<any, UserModel>('User', userSchema);

export { User };
