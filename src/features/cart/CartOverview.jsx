import { useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {

const totalCartQuantity= useSelector(getTotalCartQuantity)
const totalCartPrice= useSelector(getTotalCartPrice)

if (!totalCartQuantity) return null

  return (
    <div className="text-s, bg-stone-800 px-4 py-3 uppercase text-stone-200 sm:px-6 md:text-base flex items-center justify-between">
      <p className="font-semiboldspace-x-4 text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
