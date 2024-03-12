import { t } from 'i18next';
import DiscountForm from './discountForm';
import { IPropsEditDiscount } from '../../types/props/discount';

export const EditDiscount = (props: IPropsEditDiscount) => {
  const { openEdit, handelCloseEdit } = props;
  const editDiscount = `${t('admin.discount.editDiscount')}`;

  return (
    <DiscountForm
      open={openEdit}
      handleClose={handelCloseEdit}
      title={editDiscount}
    />
  );
};
