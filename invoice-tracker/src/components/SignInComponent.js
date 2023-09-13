import React from 'react';
import styled from 'styled-components';
import {
  Formik,
  Field,
  Form,
  ErrorMessage,
} from 'formik';

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

class SignInComponent extends React.Component {
  constructor ( props ) {
    super( props );
    this.handleSubmit = this.handleSubmit.bind( this );
    this.handleValidation = this.handleValidation.bind( this );
  }

  handleSubmit ( values, actions ) {
    return new Promise( ( resolve, reject ) => {
      setTimeout( () => {
        resolve();
        alert(JSON.stringify(values));
      }, 5000 );
    } );
  }

  handleValidation ( values ) {
    const errors = {};

    if ( !values.email ) {
      errors.email = 'Required';
    } else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test( values.email ) ) {
      errors.email = 'Invalid email address';
    }

    if ( !values.password ) {
      errors.password = 'Required'; // Use 'Required' for consistency
    } else if ( values.password.length < 8 ) {
      errors.password = 'Password should be at least 8 characters long';
    }

    return errors;
  }

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
            }}
            validate={this.handleValidation}
            onSubmit={this.handleSubmit}
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
                />
                <ErrorMessage name="password">
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

export default SignInComponent;
