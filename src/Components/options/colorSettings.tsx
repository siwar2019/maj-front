/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
  Grid,
} from '@mui/material';
import { useStyles } from '../../styles/settings';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { t } from 'i18next';
import { commonStyles } from '../../styles/commonStyle';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect, useState } from 'react';
import AddNewColor from './addNewColor';
import { IOptions } from '../../types/settings';
import { getAllSubOption } from '../../_redux/actions/subOption';
import ConfirmDelete from './confirmDelete';
import EditColor from './editColor';
import { useParams } from 'react-router-dom';
const ColorSettings = () => {
  const [addColor, setAddColor] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [nameSubOption, setNameSubOption] = useState('');
  const [idSubOption, setIdSubOption] = useState(0);
  const [editModal, setEditModal] = useState(false);
  const classes = useStyles();

  const { subOption } = useAppSelector((state) => state.subOption);
  const { itemId } = useParams();
  const commonClasses = commonStyles();
  const dispatch = useAppDispatch();
  const addNewColor = () => {
    setAddColor(true);
  };
  const addClose = () => {
    setAddColor(false);
  };
  //delete subCategory modal
  const openModal = (name: string, id: number) => {
    setConfirmDelete(true);
    setNameSubOption(name);
    setIdSubOption(id);
  };
  //edit subOption
  const openEditModal = (name: string, id: number) => {
    setEditModal(true);
    setNameSubOption(name);
    setIdSubOption(id);
  };
  const closeEditModal = () => {
    setEditModal(false);
  };
  const closeModal = () => {
    setConfirmDelete(false);
  };
  useEffect(() => {
    dispatch(getAllSubOption({ id: itemId }));
  }, [dispatch]);
  return (
    <Grid>
      <Box className={classes.optionHeader}>
        <Typography
          className={classes.optionTitle}
          variant="h4"
          sx={{ fontWeight: '700' }}
        >
          {t('admin.settings.colors')}
        </Typography>
        <Button
          startIcon={<AddCircleOutlineIcon />}
          variant="contained"
          className={commonClasses.btn}
          onClick={() => addNewColor()}
          sx={{ fontWeight: '700' }}
        >
          {t('admin.settings.addNewColor')}
        </Button>
      </Box>
      <Box>
        <Box className={classes.cardBox}>
          <Box className={classes.listCard}>
            {subOption.map((subOptionList: IOptions) => (
              <Card className={classes.cardStyle}>
                <CardContent>
                  <Box className={classes.card}>
                    <Grid
                      className={classes.color}
                      sx={{ backgroundColor: subOptionList.code }}
                    ></Grid>
                  </Box>

                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      fontWeight: '700',
                      fontSize: '16px',
                      marginTop: '10px',
                    }}
                  >
                    {subOptionList.name}
                  </Typography>
                  <Box className={classes.actions}>
                    <Typography className={classes.colorCode}>
                      {subOptionList.code}
                    </Typography>
                    <CardActions className={classes.actionButtons}>
                      <EditIcon
                        className={classes.editIcon}
                        sx={{ fontSize: '15px !important' }}
                        onClick={() =>
                          openEditModal(subOptionList.name, subOptionList.uuid)
                        }
                      />
                      <DeleteIcon
                        className={classes.deleteIcon}
                        sx={{ fontSize: '15px !important' }}
                        onClick={() =>
                          openModal(subOptionList.name, subOptionList.uuid)
                        }
                      />
                    </CardActions>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
      <AddNewColor open={addColor} close={addClose} colorId={itemId} />
      <ConfirmDelete
        open={confirmDelete}
        close={closeModal}
        nameSubOption={nameSubOption}
        idSubOption={idSubOption}
      />
      <EditColor
        open={editModal}
        close={closeEditModal}
        nameSubOption={nameSubOption}
        idSubOption={idSubOption}
      />
    </Grid>
  );
};
export default ColorSettings;
