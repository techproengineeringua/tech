import React from 'react';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import { useRecoilValue } from 'recoil';
import { languageState } from '../data/recoil';
import { Formik, Form, Field } from 'formik';
import { feedbackFormData } from '../data/feedback';
import AppearOnScrollWrapper from './animation/AppearOnScrollWrapper';

export const EMAIL_CONFIG = {
  REACT_APP_PUBLIC_KEY: 'fHYoWtApHtV9w8Upq',
  REACT_APP_SERVICE_ID: 'service_1099hky',
  REACT_APP_TEMPLATE_ID: 'template_bnxpn1g',
};

const FeedbackForm = () => {
  const lang = useRecoilValue(languageState);
  const { feedback } = lang;
  const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } =
    EMAIL_CONFIG;

  return (
    <Formik
      initialValues={feedbackFormData.initialValues}
      validationSchema={yup.object({
        name: yup.string().required(),
        email: yup.string().email().required(),
        phone: yup.string().required(),
        town: yup.string().required(),
        service: yup.array().required().min(1),
        comment: yup.string().required(),
      })}
      onSubmit={async (values, formikContext) => {
        emailjs
          .sendForm(
            REACT_APP_SERVICE_ID,
            REACT_APP_TEMPLATE_ID,
            '#feedback-form',
            REACT_APP_PUBLIC_KEY
          )
          .then(
            () => alert('Your email was sent successfully!'),
            (error) => alert(error.text)
          );
        formikContext.setSubmitting(false);
      }}
    >
      {(formikContext) => (
        <Form className="feedback-form" id="feedback-form">
          {feedback?.inputs?.map((input) => (
            <AppearOnScrollWrapper
              key={input.name}
              element={
                <div>
                  {input.type !== 'checkbox' ? (
                    <Field
                      component={input.type === 'textarea' && 'textarea'}
                      type={input.type}
                      name={input.name}
                      className={`feedback-form_input inner-border fs-12
                            ${
                              !formikContext.errors[input.name] &&
                              formikContext.touched[input.name] &&
                              'validated'
                            }`}
                      placeholder={input.placeholder}
                      onChange={(event) => {
                        if (
                          input.name === 'phone' &&
                          !event.target.value.match(/^[0-9+]*$/)
                        ) {
                          return;
                        }
                        formikContext.handleChange(event);
                      }}
                    />
                  ) : (
                    <div
                      className={`feedback-form_input inner-border fs-12 checkbox
                          ${
                            !formikContext.errors[input.name] &&
                            formikContext.touched[input.name] &&
                            'validated'
                          }`}
                    >
                      <label className="checkbox_title">
                        {input.placeholder}
                      </label>
                      <div className="checkbox_options">
                        {input.options.map((option) => (
                          <div key={option} className="checkbox_options_option">
                            <Field
                              type="checkbox"
                              className="checkbox_options_input"
                              name={input.name}
                              value={option}
                              id={option}
                            />
                            <label
                              htmlFor={option}
                              key={option}
                              className="checkbox_options_label"
                            >
                              {option}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              }
            />
          ))}
          <button
            type="submit"
            className="button-primary green-shadow-hover"
            disabled={formikContext.isSubmitting}
          >
            <div className="button-primary_container">
              <span>
                <span className="button-primary_container_text">
                  {feedback.btnText}
                </span>
              </span>
            </div>
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FeedbackForm;
