import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import Modal from '@mui/material/Modal';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useStyles } from '../../styles/discount';
import { Form, Formik } from 'formik';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';

import * as Yup from 'yup';
import { ETranslateFR } from '../../utils/enums';
import { t } from 'i18next';
import { IPropsFormDiscount } from '../../types/props/discount';

export const DiscountForm = (props: IPropsFormDiscount) => {
  const { open, handleClose, title } = props;
  const validationSchema = Yup.object({
    name: Yup.string().required(ETranslateFR.REQUIRED),
    discount: Yup.string().required(ETranslateFR.REQUIRED),
    startDate: Yup.date().required(ETranslateFR.REQUIRED),
    endDate: Yup.date()
      .required(ETranslateFR.REQUIRED)
      .test(ETranslateFR.IS_AFTER, ETranslateFR.END_DATE, function (value) {
        const { startDate } = this.parent;
        return !startDate || !value || startDate < value;
      }),
    description: Yup.string().required(ETranslateFR.REQUIRED),
  });
  const classes = useStyles() ;
  const initialValues= {
    name: '',
    discount: '',
    startDate: null,
    endDate: null,
    description: '',
  }
const onSubmitDiscount=() => {}
  return (
    <Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.box}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            className={classes.close}
            sx={{
              position: 'absolute',
              color: 'black',
            }}
          >
            <CloseIcon />
          </IconButton>

          <Typography
            id="modal-modal-title"
            className={classes.Add}
            sx={{ fontWeight: '700' }}
          >
            {title}
          </Typography>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmitDiscount}
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
                <Grid
                  container
                  rowSpacing={4}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={12} md={6}>
                    <TextField
                      className={classes.inputFile}
                      fullWidth
                      name="name"
                      label={t('admin.products.Name')}
                      variant="standard"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.name && Boolean(errors.name)}
                      helperText={touched.name && errors.name}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      className={classes.inputFile}
                      fullWidth
                      name="discount"
                      label={t('admin.discount.discount')}
                      variant="standard"
                      value={values.discount}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.discount && Boolean(errors.discount)}
                      helperText={touched.discount && errors.discount}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DesktopDateTimePicker']}>
                        <DesktopDateTimePicker
                          views={['year', 'month', 'day', 'hours', 'minutes']}
                          value={values.startDate}
                          onChange={(newValue) => {
                            setFieldValue('startDate', newValue);
                          }}
                          label={t('admin.discount.statDate')}
                          className={classes.DateTime}
                          sx={{
                            '& .MuiInputLabel-root.Mui-focused ': {
                              color: 'black !important',
                            },
                          }}
                        />
                        {touched.startDate && errors.startDate && (
                          <Typography
                            className={classes.errorMsg}
                            color="error"
                          >
                            {errors.startDate}
                          </Typography>
                        )}
                      </DemoContainer>
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DesktopDateTimePicker']}>
                        <DesktopDateTimePicker
                          label={t('admin.discount.endDate')}
                          views={['year', 'month', 'day', 'hours', 'minutes']}
                          value={values.endDate}
                          onChange={(newValue) => {
                            setFieldValue('endDate', newValue);
                          }}
                          className={classes.DateTime}
                        />
                        {touched.endDate && errors.endDate && (
                          <Typography
                            className={classes.errorMsg}
                            color="error"
                          >
                            {errors.endDate}
                          </Typography>
                        )}
                      </DemoContainer>
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      className={classes.inputFile}
                      fullWidth
                      name="description"
                      label={t('admin.discount.description')}
                      variant="standard"
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.description && Boolean(errors.description)}
                      helperText={touched.description && errors.description}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box className={classes.bnt}>
                      <Button
                        variant="outlined"
                        sx={{ fontWeight: 'bold' }}
                        onClick={handleClose}
                        className={classes.btnCancel}
                      >
                        {t('admin.deleteProduct.cancel')}
                      </Button>
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{ fontWeight: 'bold' }}
                        className={classes.btnEdit}
                      >
                        {t('admin.products.save')}
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </Grid>
  );
};
export default DiscountForm;
