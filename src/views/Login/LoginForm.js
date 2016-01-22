import React, {Component, PropTypes} from 'react'
import {reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import FormMessages from 'redux-form-validation'
import {generateValidation} from 'redux-form-validation'

var validations = {
  email: {
    validateOnBlur: true,
    email: true,
    required: true
  },
  password: {
    required: true
  }
};

@connect()
@reduxForm({
  form: 'admin',
  ...generateValidation(validations)
})

