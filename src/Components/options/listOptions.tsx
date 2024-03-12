import { Box, Tooltip, Typography } from '@mui/material';
import { useStyles } from '../../styles/settings';
import Table from '@mui/material/Table';
import { useNavigate } from 'react-router-dom';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { t } from 'i18next';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAllOption } from '../../_redux/actions/option';
import { IOptions } from '../../types/settings';
import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const ListOptions = () => {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  const { option } = useAppSelector((state) => state.option);
  console.log('%clistOptions.tsx line:25 option', 'color: #007acc;', option);
  //open setting color
  const onOpenColorSettings = (id: number) => {
    navigate(`/Settings/${id}`);
    
  };
  const onOpenSizeSettings = (id: number) => {
    navigate(`/Settings/${id}`);
  };
  useEffect(() => {
    dispatch(getAllOption());
  }, [dispatch]);

  return (
    <React.Fragment>
      <>
        <Box className={classes.header}>
          <Typography
            className={classes.settingsTitle}
            sx={{ fontWeight: '700' }}
            variant="h4"
          >
            {t('admin.settings.options')}
          </Typography>
        </Box>
        <Box className={classes.tableMarg}>
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="center"
                    sx={{ fontWeight: '700' }}
                    className={classes.tableHeader}
                  >
                    {t('admin.settings.optionNames')}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontWeight: '700' }}
                    className={classes.tableHeader}
                  >
                    {t('admin.settings.details')}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {option&&
                  option.length > 0 &&
                  option.map((item: IOptions) => (
                    <TableRow>
                      <TableCell
                        align="center"
                        component="th"
                        scope="row"
                        className={classes.tableCell}
                      >
                        {item.name}
                      </TableCell>

                      <TableCell align="center" className={classes.iconsAction}>
                        <Tooltip title="Option Details">
                          <MoreHorizIcon
                            className={classes.moreBtn}
                            onClick={() => {
                              if (item.name.toLowerCase() === 'Color') {
                                onOpenColorSettings(item.uuid);
                              } else {
                                onOpenSizeSettings(item.uuid);
                              }
                            }}
                          />
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </>
    </React.Fragment>
  );
};
export default ListOptions;
