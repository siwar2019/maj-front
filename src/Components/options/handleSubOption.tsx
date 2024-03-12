import { Box, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import ColorSettings from './colorSettings';
import SizeSettings from './sizeSettings';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { IOption } from '../../types/option';
import { useEffect } from 'react';
import { getAllSubOption } from '../../_redux/actions/subOption';
import { getAllOption } from '../../_redux/actions/option';
import { useStyles } from '../../styles/category';
import { t } from 'i18next';

const HandleSubOption = () => {
  const { option } = useAppSelector((state) => state.option);
  const { itemId } = useParams();
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const idSubOption = itemId ? itemId : undefined;
  const sizeName = option.filter(
    (optionName: IOption) => optionName.name === 'Size'
  );
  const colorName = option.filter(
    (optionName: IOption) => optionName.name === 'Color'
  );
  useEffect(() => {
    if (itemId) {
      dispatch(getAllSubOption({ id: itemId }));
    }
  }, [dispatch, itemId]);
  useEffect(() => {
    //in order to make filter when refresh
    dispatch(getAllOption());
  }, [dispatch]);
  const idSubOptionSize = sizeName.map((subOption: IOption) => subOption.uuid);
  const idSubOptionColor = colorName.map(
    (subOption: IOption) => subOption.uuid
  );
  const idSize = idSubOptionSize.map((id: string) => id);
  const idColor = idSubOptionColor.map((id: string) => id);
  return (
    <Box>
      {idSubOption == idSize && <SizeSettings />}
      {idSubOption == idColor && <ColorSettings />}
      {idSubOption != idColor && idSubOption != idSize && (
        <>
          <Grid className={classes.extraOption}>
            {t('admin.notFound.extraOption')}
          </Grid>
        </>
      )}
    </Box>
  );
};
export default HandleSubOption;
