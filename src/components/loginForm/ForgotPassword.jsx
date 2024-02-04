import React, { useState } from 'react';
import { StyledFormUser } from './Form.styles';
import Input from '../TextField';
import Button from '../Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Toast from '../Toast';
import userService from '@/services/auth';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isDisabled = email.length === 0 || !emailRegex.test(email);

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      setLoading(true);
      await userService.forgotPassword(email);
      Toast({ type: 'success', message: 'Password reset email sent' });
      router.push('/sign-in');
    } catch (err) {
      Toast({ type: 'error', message: err?.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledFormUser>
      <form className="formWrapper" onSubmit={handleSubmit}>
        <div className="title-reset">Forgot Password</div>
        <Input
          placeholder="Enter Email"
          label="Email"
          Field_Name="user-mail"
          type="email"
          className="input-group"
          value={email}
          onChange={e => setEmail(e.target.value)}
          error={email.length > 0 && !emailRegex.test(email) ? 'Email not correct' : null}
        />
        <div className="buttonWrapper">
          <Button variant="primary" type="submit" disabled={loading || isDisabled} loader={loading}>
            Send email
          </Button>
        </div>
        <div className="span">
          Already have an account?
          <Link href="/sign-in"> Sign In</Link>
        </div>
      </form>
    </StyledFormUser>
  );
};

export default ForgotPassword;
