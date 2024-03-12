import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import * as yup from 'yup';
import { useStyles } from '../styles/login';
import BarMaj from '../Components/BarMaj';
import { useAppDispatch } from '../hooks';
import { userLogin } from '../_redux/actions/auth';
import { useTranslation } from 'react-i18next';
import { ETranslateFR } from '../utils/enums';
import { emailRules } from '../common';
import { ToastContainer } from 'react-toastify';
const SingInPage = () => {
  const [showPassword, setShowPassword] = React.useState(true);
  const classes = useStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const dispatch = useAppDispatch();
  const [checked , isChecked]= useState(false)
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const SchemaBasicForm = yup.object().shape({
    email: yup
      .string()
      .matches(emailRules, { message: ETranslateFR.ERROR_REGEX_EMAIL })
      .required(ETranslateFR.REQUIRED_EMAIL),
    password: yup.string().required(ETranslateFR.REQUIRED_PASSWORD),
  });
  const initialValues={
    email: '',
    password: '',
  }

  const handleRemember= ()=>{
    isChecked(!checked)
  }
  const handleLogin = async (values:any, checked:any) => {
    try {
      const resData = await dispatch(userLogin({ value: { ...values, rememberMe: checked } }));
      // Check if login was successful 
      if (resData.payload) {
      navigate("/")      }
    } catch (error) {
      // Handle login error
      console.log('error', 'color: #007acc;', error);
    }
  };
  return (
    <>
      <BarMaj />
      <Container className={classes.boxLog}>
        <Box className={classes.boxTitle}>
          <Typography
            className={classes.title}
            align="center"
            m={2}
            sx={{ fontWeight: 'bold' }}
          >
            {t('admin.login.login')}
          </Typography>
          <Typography align="center" p={2} className={classes.boxParag}>
            {t('admin.login.titleLogin')}
          </Typography>
        </Box>
        <Formik
          initialValues={initialValues}
          validationSchema={SchemaBasicForm}
          onSubmit={(values) => handleLogin(values, checked)}
        >
          {({ errors, touched, handleChange, handleSubmit, values }) => (
            <Form onSubmit={handleSubmit}>
              <Stack spacing={8}>
                <TextField
                  className={classes.inputFile}
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
                <FormControl
                  variant="standard"
                  className={classes.formPassword}
                >
                  <InputLabel htmlFor="standard-adornment-password">
                    {t('admin.login.password')}
                  </InputLabel>
                  <Input
                    name="password"
                    type={showPassword ? 'password' : 'text'}
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
                {errors.password && touched.password && (
                  <Typography className={classes.error}>
                    {errors.password}
                  </Typography>
                )}
              </Stack>
              <Box className={classes.boxforgot}>
                <Link
                  className={classes.link}
                  to='/forgot'
                 
                >
                  {t('admin.login.forgotPwd')}
                </Link>

                <FormControlLabel
                  control={<Checkbox  checked={checked}/>}
                  label={t('admin.login.rememberPwd')}
                  className={classes.formControl}
                  onClick={handleRemember}
                />
                </Box>
              <Box>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.BtnLog}
                  sx={{ fontWeight: 'bold' }}
                >
                  {t('admin.login.login')}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Container>
      <ToastContainer />
    </>
  );
};

export default SingInPage;
