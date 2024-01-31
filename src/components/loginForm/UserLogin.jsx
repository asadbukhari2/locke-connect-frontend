import React, { useState } from "react";
import { StyledFormUser } from "./Form.styles";
import Input from "../TextField";
import Button from "../Button";
import Link from "next/link";
import { useContextHook } from "use-context-hook";
import { AuthContext } from "@/context/authContext";
import { useRouter } from "next/router";
import Toast from "../Toast";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { onLogin, loading_user } = useContextHook(AuthContext, [
    "onLogin",
    "loading_user",
  ]);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isDisabled =
    password.length === 0 || email.length === 0 || !emailRegex.test(email);

  const signInHandler = async (event) => {
    event.preventDefault();

    await onLogin({ email, password, redirect: () => router.push("/") });
  };

  return (
    <StyledFormUser>
      <form className="formWrapper">
        <div className="title">Login</div>
        <Input
          placeholder="Enter Email"
          label="Email"
          Field_Name="user-mail"
          type="email"
          className="input-group"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={
            email.length > 0 && !emailRegex.test(email)
              ? "Email not correct"
              : null
          }
        />
        <Input
          placeholder="Password"
          label="Password"
          Field_Name="user-password"
          type="password"
          // className="input-group"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link href="/forgot-password" className="forget-password">
          Forget password?
        </Link>
        <div className="buttonWrapper">
          <Button
            variant="primary"
            onClick={signInHandler}
            disabled={isDisabled}
            loader={loading_user}
          >
            Login
          </Button>
        </div>
        <div className="span">
          Don&apos;t have an account? <Link href="/sign-up"> Sign up</Link>
        </div>
      </form>
    </StyledFormUser>
  );
};

export default UserLogin;
