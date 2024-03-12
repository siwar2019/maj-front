import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
} from '@mui/material';
import { useStyles } from '../../styles/settings';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { t } from 'i18next';
import { commonStyles } from '../../styles/commonStyle';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';
import AddNewSize from './addNewSize';
import EditIcon from '@mui/icons-material/Edit';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAllSubOption } from '../../_redux/actions/subOption';
import { IOptions } from '../../types/settings';
import ConfirmDelete from './confirmDelete';
import {  useParams } from 'react-router-dom';
import EditSize from './editSize';
import { getAllOption } from '../../_redux/actions/option';
const SizeSettings = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const { subOption } = useAppSelector((state) => state.subOption);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [nameSubOption, setNameSubOption] = useState('');
  const [descriptSubOption, setDescription] = useState('');
  const [idSubOption, setIdSubOption] = useState(0);
  const [editModal, setEditModal] = useState(false);
  const { itemId } = useParams();
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const commonClasses = commonStyles();
  //edit subOption
  const openEditModal = (
    name: string,
    id: number,
    descript: string | undefined
  ) => {
    setEditModal(true);
    setNameSubOption(name);
    setIdSubOption(id);
    if (descript) {
      setDescription(descript);
    }
  };
  const closeEditModal = () => {
    setEditModal(false);
  };
  const addNewSize = () => {
    setAddModalOpen(true);
  };
  const addClose = () => {
    setAddModalOpen(false);
  };

  const openModal = (name: string, id: number) => {
    setConfirmDelete(true);
    setNameSubOption(name);
    setIdSubOption(id);
  };
  const closeModal = () => {
    setConfirmDelete(false);
  };
  useEffect(() => {
    dispatch(getAllSubOption({ id: itemId }));
  }, [dispatch, itemId]);
  return (
    <Grid>
      <Box className={classes.optionHeader}>
        <Typography
          className={classes.optionTitle}
          variant="h4"
          sx={{ fontWeight: '700' }}
        >
          {t('admin.settings.size')}
        </Typography>
        <Button
          startIcon={<AddCircleOutlineIcon />}
          sx={{ fontWeight: '700' }}
          variant="contained"
          className={commonClasses.btn}
          onClick={() => addNewSize()}
        >
          {t('admin.settings.addNewSize')}
        </Button>
      </Box>
      <Box>
        <Box className={classes.cardBox}>
          <Box className={classes.listCard}>
            {subOption.length > 0 ? subOption.map((subOption: IOptions) => (
              <Card className={classes.cardStyle} key={subOption.uuid}>
                <CardContent>
                  <Box className={classes.card}>
                    <Typography
                      gutterBottom
                      component="div"
                      sx={{
                        fontWeight: '700',
                        fontSize: '15px',
                        textAlign: 'center',
                      }}
                      className={classes.size}
                    >
                      {subOption.name}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      fontSize: '15px',
                      marginTop: '10px',
                    }}
                  >
                    {' '}
                    {subOption.code}{' '}
                  </Box>
                  <Box className={classes.deleteSize}>
                    <EditIcon
                      className={classes.editIcon}
                      sx={{ fontSize: '19px !important' }}
                      onClick={() =>
                        openEditModal(
                          subOption.name,
                          subOption.uuid,
                          subOption.code
                        )
                      }
                    />
                    <DeleteIcon
                      onClick={() => openModal(subOption.name, subOption.uuid)}
                      sx={{ fontSize: '19px !important' }}
                      className={classes.iconStyle}
                    />
                  </Box>
                </CardContent>
              </Card>
            )) :
            <Typography variant="h6" 
            sx= {{marginLeft:"21px"}} >
            {t('admin.returns.noData')}
          </Typography>
            }
          </Box>
        </Box>
      </Box>
      {/* modal add new size */}
      <AddNewSize open={addModalOpen} close={addClose} sizeId={itemId} />
      {/* delete subOption */}
      <ConfirmDelete
        open={confirmDelete}
        close={closeModal}
        nameSubOption={nameSubOption}
        idSubOption={idSubOption}
      />
      {/* edit subOption */}
      <EditSize
        open={editModal}
        close={closeEditModal}
        nameSubOption={nameSubOption}
        descriptSubOption={descriptSubOption}
        idSubOption={idSubOption}
      />
    </Grid>
  );
};
export default SizeSettings;
