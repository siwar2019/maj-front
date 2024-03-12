import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { t } from 'i18next';
import { useStyles } from '../../styles/profile';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { ETranslateFR } from '../../utils/enums';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useAppDispatch } from '../../hooks';
import { ChangePassword } from '../../_redux/actions/auth';
import { IChangePwd } from '../../types/auth';
import { passwordRules } from '../../common';

const ChangePwd = () => {
  const [showPassword, setShowPassword] = React.useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(true);
  const [showNewPassword, setShowNewPassword] = React.useState(true);
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const validationSchema = Yup.object({
    password: Yup.string().required(ETranslateFR.REQUIRED),
    newPassword: Yup.string()
      .min(5)
      .matches(passwordRules, { message: ETranslateFR.ERROR_REGEX_PASSWORD })
      .required(ETranslateFR.REQUIRED),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref(ETranslateFR.NEW_PASSWORD)], ETranslateFR.MATCH_PASSWORD)
      .required(ETranslateFR.REQUIRED),
  });

  const handelSubmit = (values: IChangePwd, { resetForm }: any) => {
    dispatch(
      ChangePassword({
        value: { password: values.password, newPassword: values.newPassword },
      })
    );
    resetForm();
  };
  const initialValues={
    password: '',
    newPassword: '',
    confirmPassword: '',
  }
  return (
    <Grid>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            className={classes.titleAccord}
            sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}
          >
            <Typography className={classes.roundedSpan}>2</Typography>
            {t('admin.profile.title2')}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box className={classes.gridAcrrord}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handelSubmit}
            >
              {({ errors, touched, values, handleSubmit, handleChange }) => (
                <Form onSubmit={handleSubmit}>
                  <Grid container className={classes.gridContainer2}>
                    <Grid xs={12} md={6}>
                      <FormControl
                        variant="standard"
                        className={classes.formControl}
                      >
                        <InputLabel htmlFor="standard-adornment-password">
                          {t('admin.profile.Pwd')}
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
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
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
                    </Grid>

                    <Grid xs={12} md={6}>
                      <FormControl
                        variant="standard"
                        className={classes.formControl}
                      >
                        <InputLabel htmlFor="standard-adornment-password">
                          {t('admin.profile.NewPwd')}
                        </InputLabel>
                        <Input
                          name="newPassword"
                          type={showNewPassword ? 'password' : 'text'}
                          onChange={handleChange}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                className={classes.IconButton}
                                aria-label="toggle password visibility"
                                onClick={handleClickShowNewPassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {showNewPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
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
                    </Grid>
                    <Grid xs={12} md={6}>
                      <FormControl
                        variant="standard"
                        className={classes.formControl}
                      >
                        <InputLabel htmlFor="standard-adornment-password">
                          {t('admin.profile.confirm')}
                        </InputLabel>
                        <Input
                          name="confirmPassword"
                          type={showConfirmPassword ? 'password' : 'text'}
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
                    </Grid>
                  </Grid>
                  <Box className={classes.boxSave}>
                    <Grid item xs={6}>
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{ fontWeight: 'bold' }}
                        className={classes.btnEdit}
                      >
                        {t('admin.products.save')}
                      </Button>
                    </Grid>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
};

export default ChangePwd;
