import { t } from 'i18next';
import DiscountForm from './discountForm';
import { IPropsAddDiscount } from '../../types/props/discount';

export const AddDiscount = (props: IPropsAddDiscount) => {
  const { openAdd, handleCloseAdd } = props;
  const addDiscount = `${t('admin.discount.addDiscount')}`;
  return (
    <DiscountForm
      open={openAdd}
      handleClose={handleCloseAdd}
      title={addDiscount}
    />
  );
};
