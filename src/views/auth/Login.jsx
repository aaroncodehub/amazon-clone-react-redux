import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Spinner,Alert } from "react-bootstrap";
import RouterLink from "../../components/link/RouterLink";
import { Formik } from "formik";
import * as Yup from "yup";
import { auth } from "../../firebase.utils";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false)
  const [error, setError] = useState('')

  return (
    <div className="login">
       
       <Alert
        show={show}
        variant="danger"
        onClose={() => setShow(false)}
        dismissible
      >
        <Alert.Heading>Oops! You got an error!</Alert.Heading>
        <p>{error}</p>
      </Alert>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Must be a valid email address")
            .max(255, "Must be shorter than 255 characters")
            .required("Email is required"),
          password: Yup.string()
            .min(6, "At least 6 characters")
            .max(255)
            .required("Password is required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setLoading(true);
          setSubmitting(true);
          auth
            .signInWithEmailAndPassword(values.email, values.password)
            .then(() => {
              setLoading(false);
              navigate("/shop");
            })
            .catch((error) => {
              setError(error.message);
              setLoading(false);
              setShow(true);
            });

          // resetForm();
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form className="login__form" onSubmit={handleSubmit}>
              <p className="login__form--title">Sign-In</p>
             
            <Form.Group>
              <Form.Label className="login__form--lable">Email</Form.Label>
              <Form.Control
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && (
                <Form.Text className="text-danger">{errors.email}</Form.Text>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label className="login__form--lable">Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}
                autoComplete="on"
              />
              {touched.password && errors.password && (
                <Form.Text className="text-danger">{errors.password}</Form.Text>
              )}
            </Form.Group>
            <Button
              type="submit"
              className="login__form--button"
              block
              disabled={isSubmitting}
            >
              {loading ? (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              ) : (
                <span>Sign In</span>
              )}
            </Button>
            <div className="login__form--footer">
              <p>
                By continuing, you agree to Amazon's Conditions of Use and
                Privacy Notice.
              </p>
              <p>
                <span>New to Amazon ?</span>
              </p>
            </div>
            <RouterLink to="/auth/register">
              <Button className="login__form--button login__form--link" block>
                Create your Amazon account
              </Button>
            </RouterLink>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
