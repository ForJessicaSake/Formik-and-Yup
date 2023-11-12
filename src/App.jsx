import { useFormik } from 'formik'
import * as Yup from 'yup'

function App() {

  // form validation schema
  const formObject = Yup.object().shape({
    email: Yup.string()
      .required('Email is Required')
      .email('Invalid Email Address'),
    password: Yup.string()
      .required('Password is Required')
  })

  //initializing formik and the properties
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => console.log(values),

    //validation with formik no 3rd party library
    // validate: (values) => {
    //   const errors = {}
    //   if (!values.email) {
    //     errors.email = 'Email is required'
    //   }
    //   if (!values.password) {
    //     errors.password = 'Password is required'
    //   }
    //   return errors
    // },

    //validation with yup
    validationSchema: formObject,
  })

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: 20,
        }}
      >
        <div>
          {formik.errors.email && formik.touched.email && formik.errors.email}
        </div>
        <input
          placeholder="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{ marginBottom: 10, padding: 14 }}
        />

        <div>
          {formik.errors.password &&
            formik.touched.password &&
            formik.errors.password}
        </div>

        <input
          placeholder="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{ marginBottom: 10, padding: 14 }}
        />
        <button style={{ marginBottom: 10, padding: 14 }} type="submit">
          Submit
        </button>
      </form>
    </>
  )
}

export default App
