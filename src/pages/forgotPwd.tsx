import React from 'react';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import * as yup from 'yup';
import { useStyles } from '../styles/login';
import BarMaj from '../Components/BarMaj';
import { useAppDispatch } from '../hooks';
import { useTranslation } from 'react-i18next';
import { forgotPassword } from '../_redux/actions/auth';
import { ETranslateFR } from '../utils/enums';
import { emailRules, showErrorToast, showSuccessToast } from '../common';
import { ToastContainer } from 'react-toastify';
import { IForgotPwd } from '../types/auth';

const ForgotPwd = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const SchemaBasicForm = yup.object().shape({
    email: yup
      .string()
      .matches(emailRules, { message: ETranslateFR.ERROR_REGEX_EMAIL })
      .required(ETranslateFR.REQUIRED_EMAIL),
  });
  const initialValues: { email: string; }={
    email: '',
  }
  const handleSubmit=async (values:IForgotPwd,{ resetForm }: any) => {
    await dispatch(
       forgotPassword({ 
        value: values, navigate })

        )
        resetForm()
    }  
  return (
    <>
      <BarMaj />
        <ToastContainer />

      <Container className={classes.box}>
        <Box className={classes.boxTitle}>
          <Typography
            className={classes.title}
            align="center"
            m={2}
            sx={{ fontWeight: 'bold' }}
          >
            {t('admin.forgot.forgotPassword')}
          </Typography>
          <Typography align="center" p={2} className={classes.boxParag}>
            {t('admin.forgot.titleForgot')}
          </Typography>
        </Box>
        <Formik
          initialValues={initialValues}
          validationSchema={SchemaBasicForm}
          onSubmit={handleSubmit
        }
        >
          {({ errors, touched, handleChange, handleSubmit, values }) => (
            <Form onSubmit={handleSubmit}>
              <Stack spacing={8}>
                <TextField
                  id="standard-basic"
                  variant="standard"
                  name="email"
                  label={t('admin.login.email')}
                  onChange={handleChange}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <Typography className={classes.error}>
                    {errors.email}
                  </Typography>
                )}

                <Link
                  className={classes.link}
                  component="button"
                  variant="body1"
                  onClick={() => {
                    navigate('/login');
                  }}
                >
                  {t('admin.login.log')}
                </Link>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.BtnLog}
                  sx={{ fontWeight: 'bold' }}
                >
                  {t('admin.forgot.btnForgot')}
                </Button>
              </Stack>
            </Form>
            
          )}
        </Formik>
      </Container>
    </>
  );
};

export default ForgotPwd;
