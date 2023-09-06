import React from 'react';
import styled from 'styled-components';

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

const Form = styled.form`
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

const EmailInput = styled.input`
  height: 40px;
  font-size: 24px;
`;

const PasswordInput = styled.input`
  height: 40px;
  font-size: 24px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
`;

const CheckboxLabel = styled.label`
  margin-top: 7px;
  margin-left: 10px;
`;

const RememberMeCheckbox = styled.input`
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
    this.state = {
      email: '',
      password: '',
      rememberMe: false,
      emailError: '',
      passwordError: '',
    };

    this.handleEmailInputChange = this.handleEmailInputChange.bind( this );
    this.handlePasswordInputChange = this.handlePasswordInputChange.bind( this );
    this.handleRememberMeCheckboxChange = this.handleRememberMeCheckboxChange.bind( this );
    this.handleSubmit = this.handleSubmit.bind( this );
  }

  handleEmailInputChange ( event ) {
    this.setState( { email: event.target.value, emailError: '' } );
  }
  handlePasswordInputChange ( event ) {
    this.setState( { password: event.target.value, passwordError: '' } );
  }
  handleRememberMeCheckboxChange ( event ) {
    this.setState( { rememberMe: event.target.checked } );
  }
  handleSubmit ( event ) {
    let emailError = '';
    let passwordError = '';

    if ( !this.state.email) {
      emailError = 'Email is required.';
    }
    if ( !this.state.password ) {
      passwordError = 'Password is required.';
    } else if ( this.state.password.length < 8 ) {
      passwordError = 'Password must be at least 8 characters.';
    }
    if ( emailError || passwordError ) {
      this.setState( { emailError, passwordError } );
      event.preventDefault();
    } else {
      alert( JSON.stringify( this.state ) );
    }
  }

  render () {
    return (
      <Container>
        <ContentContainer>
          <Title>Sign In</Title>
          <Form onSubmit={ this.handleSubmit }>
            <Label>Email</Label>
            <EmailInput type="email" value={ this.state.email }
              onChange={ this.handleEmailInputChange } />
            {this.state.emailError && <ErrorLabel>{this.state.emailError}</ErrorLabel>}
            <Label>Password</Label>
            <PasswordInput type='password' value={ this.state.password }
              onChange={ this.handlePasswordInputChange } />
            {this.state.passwordError && <ErrorLabel>{this.state.passwordError}</ErrorLabel>}
            <CheckboxContainer>
              <CheckboxLabel>Remember me</CheckboxLabel>
              <RememberMeCheckbox type="checkbox"
                checked={ this.state.rememberMe }
                onChange={ this.handleRememberMeCheckboxChange } />
            </CheckboxContainer>
            <SubmitButton type="submit" value="Submit" />
          </Form>
        </ContentContainer>
      </Container>
    );
  }
}

export default SignInComponent;
