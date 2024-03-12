import React from 'react';
import { Form, Formik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Stack,
  Typography,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import * as yup from 'yup';
import { useStyles } from '../styles/login';
import BarMaj from '../Components/BarMaj';
import { useAppDispatch } from '../hooks';
import { useTranslation } from 'react-i18next';
import { ResetPassword } from '../_redux/actions/auth';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { passwordRules } from '../common';
import { ToastContainer } from 'react-toastify';

const ResetPwd = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const classes = useStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const params = useParams();
  const resetToken = params.token;
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);
  const dispatch = useAppDispatch();
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const SchemaBasicForm = yup.object().shape({
    newPassword: yup
      .string()
      .min(5)
      .matches(passwordRules, { message: `${t('admin.login.reEnterPassword')}`
        })
      .required('required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('newPassword')], `${t('admin.login.mustMatch')}`)
      .required('required'),
  });
  const initialValues={
    newPassword: '',
    confirmPassword: '',
    resetLink: resetToken,
  }
  return (
    <>
      <BarMaj />
      <ToastContainer />

      <Box className={classes.bonBack}>
        <Button
          onClick={() => {
            navigate('/login');
          }}
          className={classes.btnBack}
        >
          {' '}
          <ArrowBackIosIcon /> {t('admin.forgot.Back')}
        </Button>
      </Box>
      <Container className={classes.box}>
        <Box className={classes.boxTitle}>
          <Typography
            className={classes.title}
            align="center"
            m={2}
            sx={{ fontWeight: 'bold' }}
          >
            {t('admin.reset.resetPWD')}
          </Typography>
          <Typography align="center" p={2} className={classes.boxParag}>
            {t('admin.reset.resetPWD')}
          </Typography>
        </Box>
        <Formik
          initialValues={initialValues}
          validationSchema={SchemaBasicForm}
          onSubmit={async (values) => {
           await dispatch(
              ResetPassword({ value: values, navigate })
            );
          }}
        >
          {({ errors, touched, handleChange, handleSubmit, values }) => (
            <Form onSubmit={handleSubmit}>
              <Stack spacing={8}>
                <FormControl variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">
                    {t('admin.reset.newPwd')}
                  </InputLabel>
                  <Input
                    name="newPassword"
                    type={showPassword ? 'text' : 'password'}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          className={classes.IconButton}
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>

                {errors.newPassword && touched.newPassword && (
                  <Typography className={classes.error}>
                    {errors.newPassword}
                  </Typography>
                )}

                <FormControl variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">
                    {t('admin.reset.confirPwd')}
                  </InputLabel>
                  <Input
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          className={classes.IconButton}
                          aria-label="toggle password visibility"
                          onClick={handleClickShowConfirmPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>

                {errors.confirmPassword && touched.confirmPassword && (
                  <Typography className={classes.error}>
                    {errors.confirmPassword}
                  </Typography>
                )}
              </Stack>

              <Box>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.BtnLog}
                  sx={{ fontWeight: 'bold' }}
                >
                  {t('admin.reset.btnReset')}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default ResetPwd;
