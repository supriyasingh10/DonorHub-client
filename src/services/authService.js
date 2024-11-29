import { toast } from "react-toastify";
import { userLogin, userRegister } from "../redux/features/auth/authActions";
import store from "../redux/store";

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return toast.warning("Fill all the fields");
    }
    store.dispatch(userLogin({ email, password, role }));
  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (
  e,
  email,
  password,
  confirmpassword,
  role,
  name,
  organisationName,
  hospitalName,
  address,
  website,
  phone
) => {
  e.preventDefault();
  try {
    if (
      !role ||
      !email ||
      !password ||
      !address ||
      !phone ||
      (role === "donar" && !name) ||
      (role === "hospital" &&
        !hospitalName &&
        role === "organisation" &&
        !organisationName)
    ) {
      return toast.warning("Fill all the fields");
    }
    if (password !== confirmpassword) {
      return toast.error("Password and Confirm Password mismatch");
    }
    store.dispatch(
      userRegister({
        email,
        password,
        role,
        name,
        organisationName,
        hospitalName,
        address,
        website,
        phone,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
