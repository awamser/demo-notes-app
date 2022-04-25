import React, {useState} from 'react';
import {API} from 'aws-amplify';
import {useHistory} from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import {onError} from '../lib/errorLib';
import config from '../config';

export default function Settings() {
  
  return (
    <div className="Settings">
      <h2> Setting Go Here!</h2>
    </div>
  );
}
