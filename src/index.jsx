import React from 'react';
import { render } from 'react-dom';
import ContactUsForm from './ContactUsForm';

const onSubmit = ({ name, email, comment }) => alert(`name: ${name}\remail: ${email}\rcomment:\r${comment}`);

render(<ContactUsForm onSubmit={onSubmit} />, document.getElementById('container'));
