import React, { useState } from 'react';
import { StyledFormRegister } from './Form.styles';
import Input from '../TextField';
import Button from '../Button';
import userService from '@/services/auth';
import { useRouter } from 'next/router';
import Toast from '../Toast';
import Link from 'next/link';
import { formatPhoneNumber } from '@/helpers/common';
// import { formatPhoneNumber } from "@/helpers/common";

const UserRegister = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: '',
    password: '',
    phoneNumber: '',
    role: 'user',
  });

  const router = useRouter();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;

  const isDisabled =
    user.phoneNumber?.length === 0 ||
    !phoneRegex.test(user.phoneNumber) ||
    user.password.length === 0 ||
    !emailRegex.test(user.email) ||
    user.email?.length === 0;

  const handlePhoneNumberChange = event => {
    const rawPhoneNumber = event.target.value;
    const formattedPhoneNumber = formatPhoneNumber(rawPhoneNumber);
    console.log({ formatPhoneNumber });
    handleChange({
      target: { name: 'phoneNumber', value: formattedPhoneNumber },
    });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const registerHandler = async event => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await userService.signup(user);

      if (response.success) {
        setLoading(false);
        Toast({ type: 'success', message: response?.message });
        router.replace('sign-in');
      }
    } catch (error) {
      Toast({ type: 'error', message: error });
      setLoading(false);
    }
  };
  return (
    <StyledFormRegister>
      <form className="formWrapper">
        <div className="title">Register</div>
        <Input
          placeholder="jhon@example.com"
          label="Email"
          Field_Name="user-mail"
          type="email"
          name="email"
          className="input-group"
          value={user.email}
          onChange={handleChange}
          error={user.email.length > 0 && !emailRegex.test(user.email) ? 'Email not correct' : null}
        />
        <Input
          placeholder="Password"
          label="Password"
          Field_Name="user-password"
          type="password"
          name="password"
          className="input-group"
          value={user.password}
          onChange={handleChange}
        />
        <Input
          placeholder="Phone Number"
          label="Phone Number"
          Field_Name="user-PhoneNumber"
          type="text"
          name="phoneNumber"
          className="input-group"
          value={user.phoneNumber}
          onChange={handlePhoneNumberChange}
          error={
            user.phoneNumber?.length > 0 && !phoneRegex.test(user.phoneNumber) ? 'Please enter correct phone' : null
          }
        />

        <div className="buttonWrapper">
          <Button variant="primary" onClick={registerHandler} loader={loading} disabled={isDisabled}>
            Register
          </Button>
        </div>
        <span className="already-account">
          Already have account, <Link href="sign-in">Sign In</Link>
        </span>
      </form>
    </StyledFormRegister>
  );
};

export default UserRegister;
