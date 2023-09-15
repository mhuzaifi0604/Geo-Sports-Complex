import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  user: Yup.string().min(4, 'Username must be at least 4 characters long').required('Username is required'),
  pass: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /^(?:(?!([a-zA-Z])\1{7,}).)*$/,
        "Password cannot have 8 consecutive identical characters"
      ),
  cpass: Yup.string()
    .oneOf([Yup.ref('pass'), null], 'Passwords do not match')
    .required('Confirm password is required'),
  vendor: Yup.string().notOneOf(['Select Here...'], 'Please select a valid vendor').required('Vendor is required'),
});

export default validationSchema;
