import React, { useEffect, useState } from 'react';
import { StyledFormUser } from './Form.styles';
import Input from '../TextField';
import Button from '../Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Toast from '../Toast';
import { useSearchParams } from 'next/navigation';
import userService from '@/services/auth';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const searchParams = useSearchParams();
  const code = searchParams.get('oobCode');
  const userEmail = searchParams.get('email');
  const router = useRouter();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isDisabled = password.length === 0;

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      setLoading(true);
      await userService.resetPassword(code, password);
      router.push('/sign-in');
      Toast({ type: 'success', message: 'Password reset successfully' });
    } catch (err) {
      Toast({ type: 'error', message: err?.message });
    } finally {
      setLoading(false);
    }
  };
  return (
    <StyledFormUser>
      <form className="formWrapper" onSubmit={handleSubmit}>
        <div className="title-reset">Reset Password</div>
        <Input
          label="Email"
          Field_Name="user-mail"
          type="email"
          disabled
          className="input-group"
          value={userEmail}
          onChange={e => setEmail(e.target.value)}
          error={email.length > 0 && !emailRegex.test(email) ? 'Email not correct' : null}
        />
        <Input
          placeholder="Enter password"
          label="Password"
          Field_Name="password"
          type="password"
          className="input-group"
          value={password}
          onChange={e => setPassword(e.target.value)}
          // error={
          //   email.length > 0 && !emailRegex.test(email)
          //     ? 'Email not correct'
          //     : null
          // }
        />
        {/* <Input
          placeholder='confirm password'
          label='Confirm Password'
          Field_Name='confirm_password'
          type='password'
          className='input-group'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={
            email.length > 0 && !emailRegex.test(email)
              ? 'Email not correct'
              : null
          }
        /> */}
        {/* <Input
          placeholder="Password"
          label="Password"
          Field_Name="user-password"
          type="password"
          // className="input-group"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link href="/reset-password" className="forget-password">
          Forget password?
        </Link> */}
        <div className="buttonWrapper">
          <Button
            variant="primary"
            type="submit"
            // onClick={signInHandler}
            disabled={isDisabled}
            loader={loading}>
            Reset
          </Button>
        </div>
        {/* <div className="span">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up"> ResetPassword</Link>
        </div> */}
      </form>
    </StyledFormUser>
  );
};

export default ResetPassword;
