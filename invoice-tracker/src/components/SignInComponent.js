import React from 'react';
import styled from 'styled-components';
import {
  Formik,
  Field,
  Form,
  ErrorMessage,
} from 'formik';
import * as Yup from 'yup';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin-top: 50px;
`;

const SignInForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 1px solid #ccc;
`;

const Title = styled.h1`
  white-space: pre-line;
`;

const Label = styled.label`
  margin-top: 20px;
  font-size: 24px;
`;

const EmailField = styled(Field)`
  height: 40px;
  font-size: 24px;
`;

const PasswordField = styled(Field)`
  height: 40px;
  font-size: 24px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
`;

const CheckboxLabel = styled(Label)`
  margin-top: 7px;
  margin-left: 10px;
`;

const RememberMeCheckboxField = styled(Field)`
  margin-top: 10px;
`;

const SubmitButton = styled.input`
  height: 40px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-weight: 800;
  cursor: pointer;
  margin-top: 40px;
`;

const ErrorLabel = styled.label`
  margin-top: 10px;
  color: #ff0000;
  font-size: 24px;
`;

const SignupSchema = Yup.object().shape( {
  email: Yup.string()
    .email( 'Invalid email address' )
    .required( 'Required' ),
} );

const PasswordSchema = Yup.object().shape( {
  password: Yup.string()
    .required( 'Required' )
    .test( 'len', 'Password is weak', ( value ) => value.length >= 8 )
    .test( 'len', 'Password is very weak', ( value ) => value.length > 5 )
    .test( 'password-uppercase', 'Password must contain at least one uppercase letter', ( value ) => /[A-Z]/.test( value ) )
    .test( 'password-lowercase', 'Password must contain at least one lowercase letter', ( value ) => /[a-z]/.test( value ) )
    .test( 'password-number', 'Password must contain at least one number', ( value ) => /[0-9]/.test( value ) )
    .test( 'password-special-character', 'Password must contain at least one special character', ( value ) => /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test( value ) ),
  confirmPassword: Yup.string()
    .oneOf( [ Yup.ref( 'password' ), null ], 'Passwords must match' )
} );

class SignInComponent extends React.Component {
  constructor ( props ) {
    super( props );
    this.handleSubmit = this.handleSubmit.bind( this );
    this.validatePassword = this.validatePassword.bind( this );
  }

  handleSubmit ( values, actions ) {
    return new Promise( ( resolve, reject ) => {
      setTimeout( () => {
        resolve();
        alert(JSON.stringify(values));
      }, 5000 );
    } );
  };

  validatePassword ( value ) {
    let error = undefined;
    try {
      PasswordSchema.validateSync( { password: value } );
    } catch ( err ) {
      error = err.errors[0];
    }
    return error;
  };

  render () {
    return (
      <Container>
        <ContentContainer>
          <Title>{ "Sign In" }</Title>
          <Formik
            initialValues={{
              email: '',
              password: '',
              rememberMe: false,
            } }
            validationSchema={SignupSchema}
            onSubmit={ this.handleSubmit }
          >
            { props => (
              <SignInForm>
                <Label>{ "Email" }</Label>
                <EmailField
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  autoComplete="email"
                />
                <ErrorMessage name="email">
                  {error => <ErrorLabel>{error}</ErrorLabel>}
                </ErrorMessage>
                <Label>{ "Password" }</Label>
                <PasswordField
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  validate={ this.validatePassword }
                />
                <ErrorMessage name="password">
                  {error => <ErrorLabel>{error}</ErrorLabel>}
                </ErrorMessage>
                <Label>{ "Confirm Password" }</Label>
                <PasswordField
                  type="password"
                  name="confirmPassword"
                  placeholder="Enter Password"
                  validate = {this.validatePassword}
                />
                <ErrorMessage name="confirmPassword">
                  {error => <ErrorLabel>{error}</ErrorLabel>}
                </ErrorMessage>
                <CheckboxContainer>
                  <CheckboxLabel>{ "Remember Me" }</CheckboxLabel>
                  <RememberMeCheckboxField
                    type="checkbox"
                    name="rememberMe"
                  />
                </CheckboxContainer>
                <SubmitButton
                  type="submit"
                  value="Submit"
                  disabled={props.isSubmitting}
                />
              </SignInForm>
            )}
          </Formik>
        </ContentContainer>
      </Container>
    );
  }
}

export   default SignInComponent;
