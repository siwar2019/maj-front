import { useEffect } from 'react';
import { Box, Button, Tooltip, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useTranslation } from 'react-i18next';
import { useStyles } from '../../styles/category';
import { useState } from 'react';
import { commonStyles } from '../../styles/commonStyle';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAllCategories } from '../../_redux/actions/categories';
import { ICategories } from '../../types/categories';
import CreateCategory from './createCategory';
import EditCategory from './editCategory';
import DeleteCategories from './deleteCategory';
import { Grid } from '@material-ui/core';
import '../../app.css';
import FilterCategory from './filterCategory';
const ListCategories = () => {
  const [open, setOpen] = useState(false);

  const [editOpen, setEditOpen] = useState(false);
  const [editedCategory, setEditedCategory] = useState({
    id: 0,
    name: '',
    description: '',
  });
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deletedState, setDeletedState] = useState({
    deletedCategory: 0,
    deletedNameCategory: '',
  });
  const [createdState, setCreatedState] = useState({
    idCategory: 0,
    namCategory: '',
  });
  const [searchCategory, setSearchCategory] = useState('');
  const [idFiltered, setIdFiltered] = useState(0);
  const { categories } = useAppSelector((state) => state.categories);
  // State variable to hold the ID of the currently expanded accordion
  const [currentExpandedAccordionId, setCurrentExpandedAccordionId] = useState<
    number | null
  >(null);
  const [expandedAccordionId, setExpandedAccordionId] = useState<number[]>([]);
  // keep track of the selected accordion
  const selectedAccordionId = useAppSelector(
    (state) => state.globalStore.selectedAccordionId
  );
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const commonClasses = commonStyles();
  const { t } = useTranslation();
const   getLevelCategory=() => {
  return categories.find(category => category.id===editedCategory.id)?.level
}
const getUuid=() => {
  return categories.find(category=>category.id===editedCategory.id)?.uuid
}
const getCategoryId=() => {
  return categories.find(category=>category.id===editedCategory.id)?.categoryId
}
  // maintain a separate data structure that contains the parent categories for each category,
  // so that we can  access it directly without relying on resultSearch
  const parentCategoryList = (categories: ICategories[]) => {
    //store key-value pairs
    let parentCategoryMap = new Map();
    // Iterate through categories and build the map
    categories.forEach((category: ICategories) => {
      if (category.categoryId !== null) {
        const parent = categories.find(
          (item: ICategories) => item.id === category.categoryId
        );
        if (parent) {
          parentCategoryMap.set(category.id, parent);
        }
      }
    });
    return parentCategoryMap;
  };
  //type convertion
  const parentList = parentCategoryList(categories);

  //onClick on search item
  const searchItem = (categoryId: number, name: string) => {
    setSearchCategory(name);
    setExpandedAccordionId([]);

    // Find the parent category of the searched category
    const parentCategory = parentList.get(categoryId);
    if (parentCategory) {
      // Create an array to hold all parent IDs
      const parentIds: number[] = [];

      // Recursively add parent IDs to the array
      const addParentIds = (category: ICategories | undefined) => {
        if (category) {
          parentIds.push(category.id);
          const grandParentCategory = parentList.get(category.id);
          addParentIds(grandParentCategory);
        }
      };

      // Call the recursive function to populate parentIds
      addParentIds(parentCategory);

      // Scroll to the parent accordion using a scrollIntoView function
      const parentAccordion = document.getElementById(
        `accordion-${parentCategory.id}`
      );

      if (parentAccordion) {
        parentAccordion.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        // Set expandedAccordionId to include all parent IDs
        setExpandedAccordionId((prevIds) => {
          const newIds: number[] = [...prevIds];
          parentIds.forEach((categoryId) => {
            if (!newIds.includes(categoryId)) {
              newIds.push(categoryId);
            }
          });
          return newIds;
        });
      }
    }
    setIdFiltered(categoryId);
  };

  //open modal
  const handleOpen = (idCategoryy: number, nameCategory: string) => {
    setCreatedState({ idCategory: idCategoryy, namCategory: nameCategory });
    setOpen(true);
  };
  //close modal
  const handleClose = () => {
    setOpen(false);
  };
  //open delete category modal
  const handleOpenModal = (id: number, name: string) => {
    setOpenDeleteModal(true);
    setDeletedState({ deletedCategory: id, deletedNameCategory: name });
  };
  //close delete modal
  const handleCloseModal = () => {
    setOpenDeleteModal(false);
  };
  //open edit modal
  const handleEditCategory = (
    id: number,
    name: string,
    description: string
  ) => {
    setEditOpen(true);
    setEditedCategory({ id: id, name: name, description: description });
  };
  //close edit modal
  const closeEditModal = () => {
    setEditOpen(false);
  };
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  // Function to toggle accordion expansion
  const handleAccordionToggle = (id: number) => {
    if (currentExpandedAccordionId === id) {
      // If the clicked accordion is already expanded, close it
      setCurrentExpandedAccordionId(null);

      // Collapse the accordion in expandedAccordionId
      setExpandedAccordionId((prevIds) =>
        prevIds.filter((prevId) => prevId !== id)
      );
    } else {
      // Otherwise, expand the clicked accordion
      setCurrentExpandedAccordionId(id);

      // Expand the accordion in expandedAccordionId
      setExpandedAccordionId((prevIds) => [...prevIds, id]);
    }
  };

  // Recursive function to count the levels
  const countLevels = (category: ICategories, level: number): number => {
    if (!category.categoryId) {
      // Reached the root category
      return level;
    }
    const parentCategory = categories.find(
      (item: ICategories) => item.id === category.categoryId
    );
    if (parentCategory) {
      // Continue counting levels recursively
      return countLevels(parentCategory, level + 1);
    }
    return level;
  };
  // Check if the category is the 4th level
  //counting the levels from the given category to the root category

  const isFourthLevelCategory = (category: ICategories): boolean => {
    // counts the number of levels from the given category to the root category.
    const level = countLevels(category, 1);
    return level === 4;
  };
  const checkexpandedAccordionId = (id: number): boolean => {
    return expandedAccordionId.includes(id);
  };

  //**************************recursive function*************************************************
  const renderNestedAccordions = (category: ICategories) => {
    //get all categories where categories.id = given id category
    const nestedCategories = categories.filter(
      (item: ICategories) => item.categoryId === category.id
    );

    if (nestedCategories.length === 0) {
      return null;
    }

    return (
      <>
        <MuiAccordionDetails sx={{ padding: '0px 0px 0px 11px !important' }}>
          {nestedCategories.map((nestedCategory: ICategories) => (
            <Grid key={nestedCategory.id}>
              <MuiAccordion
                disableGutters
                elevation={0}
                square
                className={classes.nestedAccordion}
                key={nestedCategory.id}
                // Attach a unique ID to each parent accordion element
                id={`accordion-${nestedCategory.id}`}
                // Check if this accordion should be expanded based on state
                expanded={checkexpandedAccordionId(nestedCategory.id)}
                // Toggle accordion expansion on click
                onChange={() => handleAccordionToggle(nestedCategory.id)}
              >
                <Grid className={classes.accordionHeader}>
                  <MuiAccordionSummary
                    className={classes.MuiAccordionSummary}
                    expandIcon={
                      <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />
                    }
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <Typography
                      sx={{
                        backgroundColor:
                          selectedAccordionId === nestedCategory.id
                            ? 'yellow'
                            : 'inherit',
                      }}
                    >
                      {nestedCategory.name}
                    </Typography>
                  </MuiAccordionSummary>

                  {/* check if category has no child (last level) DISPLAY ONLY 2 ICONS */}
                  {isFourthLevelCategory(nestedCategory) ? (
                    <Grid className={classes.iconsPosition}>
                      <Tooltip title="edit category">
                        <EditIcon
                          className={classes.iconStyle}
                          onClick={() =>
                            handleEditCategory(
                              nestedCategory.id,
                              nestedCategory.name,
                              nestedCategory.description
                            )
                          }
                        />
                      </Tooltip>
                      <Tooltip title="Delete category">
                        <DeleteIcon
                          className={classes.iconStyle}
                          onClick={() =>
                            handleOpenModal(
                              nestedCategory.uuid,
                              nestedCategory.name
                            )
                          }
                        />
                      </Tooltip>
                    </Grid>
                  ) : (
                    <Grid className={classes.iconsPosition}>
                      <Tooltip title="Add category">
                        <AddCircleOutlineIcon
                          className={classes.iconStyle}
                          onClick={() =>
                            handleOpen(nestedCategory.id, nestedCategory.name)
                          }
                        />
                      </Tooltip>
                      <Tooltip title="Edit category">
                        <EditIcon
                          className={classes.iconStyle}
                          onClick={() =>
                            handleEditCategory(
                              nestedCategory.id,
                              nestedCategory.name,
                              nestedCategory.description
                            )
                          }
                        />
                      </Tooltip>
                      <Tooltip title="delete category">
                        <DeleteIcon
                          className={classes.iconStyle}
                          onClick={() =>
                            handleOpenModal(
                              nestedCategory.uuid,
                              nestedCategory.name
                            )
                          }
                        />
                      </Tooltip>
                    </Grid>
                  )}
                </Grid>
                {renderNestedAccordions(nestedCategory)}
              </MuiAccordion>
            </Grid>
          ))}
        </MuiAccordionDetails>
      </>
    );
  };
  //************************** end recursive function*************************************************

  return (
    <>
          {/* Header List category */}
      <Box className={classes.categoryHeader}>
        <Typography
          className={classes.categoryTitle}
          variant="h4"
          sx={{ fontWeight: 'bold' }}
        >
          {t('admin.categories.categories')}
        </Typography>
        <Box className={classes.boxSearch}>
          {/* import component filter category */}
          <FilterCategory
            searchItem={searchItem}
            idFiltered={idFiltered}
            setExpandedAccordionId={setExpandedAccordionId}
            searchCategory={searchCategory}
            setSearchCategory={setSearchCategory}
            parentList={parentList}
          />
        </Box>
      </Box>
          {/* display list categories */}
      <Box className={commonClasses.container}>
        {categories.map((categories: ICategories) => {
          if (!categories.categoryId) {
            return (
              <MuiAccordion
                disableGutters
                elevation={0}
                square
                key={categories.id}
                // Attach a unique ID to each parent accordion element
                id={`accordion-${categories.id}`}
                // Check if this accordion should be expanded based on state
                expanded={checkexpandedAccordionId(categories.id)}
                // Toggle accordion expansion on click
                onChange={() => handleAccordionToggle(categories.id)}
              >
                <Grid className={classes.accordionHeader}>
                  <MuiAccordionSummary
                    className={classes.MuiAccordionSummary}
                    expandIcon={
                      <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />
                    }
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    {' '}
                    <Typography
                      className={classes.accordionTextParent}
                      sx={{
                        fontWeight: '700',
                        backgroundColor:
                          selectedAccordionId === categories.id
                            ? 'yellow'
                            : 'inherit',
                      }}
                    >
                      {categories.name}
                    </Typography>
                  </MuiAccordionSummary>

                  <Button
                    startIcon={<AddCircleOutlineIcon />}
                    sx={{ fontWeight: '700' }}
                    variant="contained"
                    className={commonClasses.addButton}
                    onClick={() => handleOpen(categories.id, categories.name)}
                  >
                    {' '}
                    {t('admin.categories.addNewCategory')}
                  </Button>
                </Grid>
                {/* display subOptions */}
                {renderNestedAccordions(categories)}
              </MuiAccordion>
            );
          }
        })}

        <CreateCategory
          open={open}
          handleClose={handleClose}
          id={createdState.idCategory}
          nameCategory={createdState.namCategory}
        />
        <EditCategory
          open={editOpen}
          close={closeEditModal}
          editedCategory={editedCategory.id}
          nameCategory={editedCategory.name}
          descriptionCategory={editedCategory.description}
          level={getLevelCategory()}
          uuid={getUuid()}
          categoryId={getCategoryId()}

        />
      </Box>
      {/* delete category component  */}
      <DeleteCategories
        open={openDeleteModal}
        close={handleCloseModal}
        id={deletedState.deletedCategory}
        nameCategory={deletedState.deletedNameCategory}
        
      />
    </>
  );
};
export default ListCategories;
