import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { t } from 'i18next';
import { useStyles } from '../../styles/profile';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { ETranslateFR } from '../../utils/enums';
import { updatePersonalInfo } from '../../_redux/actions/profile';
import { IUpdateInfo } from '../../types/profile';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { emailRules, formatDateToCustomFormat } from '../../common';
import { ToastContainer } from 'react-toastify';
import { setConnectedUser } from '../../_redux/reducer/store';
import { useEffect, useState } from 'react';
import { getAllUserInformation } from '../../_redux/actions/auth';
const InfoPersonel = () => {
  const classes = useStyles();
  const validationSchema = Yup.object({
    firstName: Yup.string().required(ETranslateFR.REQUIRED_FIRSTNAME),
    lastName: Yup.string().required(ETranslateFR.REQUIRED_LASTNAME),
    dateOfBirth: Yup.string().required(ETranslateFR.REQUIRED_DATE),
    email: Yup.string()
      .matches(emailRules, { message: ETranslateFR.ERROR_REGEX_EMAIL })
      .required(ETranslateFR.REQUIRED_EMAIL),
    gender: Yup.string().required(ETranslateFR.REQUIRED_GENDER),
    phone: Yup.string()
      .matches(/^\d{8}$/, ETranslateFR.DIGIT_NUMBER)
      .required(ETranslateFR.REQUIRED_PHONE),
  });
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const connected = useAppSelector((state: any) => state.globalStore.connected);
  const { connectedUser } = useAppSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getAllUserInformation()).then(() => {
      setIsLoading(true); // Set isLoading to false when data is available
    });
  }, [dispatch]);
  let initialValues = {
    firstName: connectedUser?.firstName || '',
    lastName: connectedUser?.lastName || '',
    email: connectedUser?.email || '',
    phone: connectedUser?.phone || '',
    dateOfBirth: connectedUser?.dateOfBirth || '',
    gender: connectedUser?.gender || '',
  };

  const handelSubmitInfo = async (values: IUpdateInfo) => {
    await dispatch(
      updatePersonalInfo({
        value: values,
      })
    );
    //when data is updated change global state in order to use it as a dependency in navbar
    dispatch(setConnectedUser(!connected));
  };
  const listGender = ['Men', 'Women'];
  return (
    <Grid>
      {connectedUser && (
        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              className={classes.titleAccord}
              sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}
            >
              <Typography className={classes.roundedSpan}>1</Typography>
              {t('admin.profile.title1')}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box className={classes.gridAcrrord}>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handelSubmitInfo}
              >
                {({
                  errors,
                  touched,
                  values,
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  setFieldValue,
                }) => (
                  <Form onSubmit={handleSubmit}>
                    <Grid container className={classes.gridContainer}>
                      <Grid xs={12} md={6}>
                        <TextField
                          fullWidth
                          className={classes.inputFile}
                          id="standard-basic"
                          label={t('admin.profile.name')}
                          variant="standard"
                          name="firstName"
                          value={values.firstName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.firstName && Boolean(errors.firstName)}
                          helperText={touched.firstName && errors.firstName}
                        />
                      </Grid>
                      <Grid xs={12} md={5}>
                        <TextField
                          fullWidth
                          className={classes.inputFile}
                          id="standard-basic"
                          label={t('admin.profile.lastName')}
                          variant="standard"
                          name="lastName"
                          value={values.lastName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.lastName && Boolean(errors.lastName)}
                          helperText={touched.lastName && errors.lastName}
                        />
                      </Grid>

                      <Grid xs={12} md={6}>
                        <TextField
                          fullWidth
                          className={classes.inputFile}
                          id="standard-basic"
                          label={t('admin.profile.email')}
                          variant="standard"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.email && Boolean(errors.email)}
                          helperText={touched.email && errors.email}
                        />
                      </Grid>
                      <Grid xs={12} md={5}>
                        <TextField
                          fullWidth
                          className={classes.inputFile}
                          id="standard-basic"
                          label={t('admin.profile.phone')}
                          variant="standard"
                          name="phone"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                {'+216'}
                              </InputAdornment>
                            ),
                          }}
                          value={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.phone && Boolean(errors.phone)}
                          helperText={touched.phone && errors.phone}
                        />
                      </Grid>
                      <Grid xs={12} md={6} className={classes.margin}>
                        <TextField
                          fullWidth
                          className={classes.inputFile}
                          id="standard-basic"
                          variant="standard"
                          name="dateOfBirth"
                          type="date"
                          value={formatDateToCustomFormat(values.dateOfBirth)}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.dateOfBirth && Boolean(errors.dateOfBirth)
                          }
                          helperText={
                            touched.dateOfBirth && (errors.dateOfBirth as any)
                          }
                        />
                      </Grid>

                      <Grid xs={12} md={5}>
                        <FormControl
                          variant="standard"
                          className={classes.formControl}
                        >
                          <InputLabel id="demo-simple-select-standard-label">
                            {t('admin.profile.gender')}
                          </InputLabel>
                          <Select
                            name="gender"
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={values.gender}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            label={t('admin.profile.gender')}
                            error={touched.gender && Boolean(errors.gender)}
                          >
                            {listGender.map((gender) => (
                              <MenuItem value={gender} key={gender}>
                                {gender}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                        {errors.gender && touched.gender && (
                          <Typography className={classes.error}>
                            {errors.gender}
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
            <ToastContainer />
          </AccordionDetails>
        </Accordion>
      )}
    </Grid>
  );
};

export default InfoPersonel;
