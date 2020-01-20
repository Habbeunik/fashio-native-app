import React from 'react';
import {Text} from 'react-native';
import {Header1, CaptionText} from '../typography';
import TextInput from '../text-input';
import theme from '../../styles/theme';
import Button from '../button';

const SignupForm = () => (
  <>
    <Header1 align="center">Sign up</Header1>
    <TextInput placeholder='Fullname' icon='user' />
    <TextInput placeholder='Email'icon='mail' />
    <TextInput placeholder='Password' secureTextEntry icon='briefcase' />
    <CaptionText style={{width: 220, marginBottom: 40, marginTop: 20}}>
      By Signing up, you are agreeing to fashio{' '}
      <Text style={{color: theme.colors.black}}>Terms</Text> and{' '}
      <Text style={{color: theme.colors.black}}>Conditions</Text>
    </CaptionText>
    <Button content='Sign up' />
    <CaptionText align='center' style={{ marginTop: 40}}>
     Already a Member ?{' '}
      <Text style={{color: theme.colors.black}}>Sign up</Text>
    </CaptionText>
  </>
);

export default SignupForm;
