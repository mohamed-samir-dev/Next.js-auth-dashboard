import { Bell, ShoppingBag } from 'lucide-react';
import { IconHeartCheck } from '@tabler/icons-react';

interface ActionButtonsProps {
  cartCount?: number;
  wishlistCount?: number;
}

export default function ActionButtons({ cartCount = 0, wishlistCount = 0 }: ActionButtonsProps) {
  return (
    <>
      <button className="text-black cursor-pointer relative">
        <ShoppingBag className="w-5 h-5" />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </button>
      <button className="text-black cursor-pointer">
        <Bell className="w-5 h-5" />
      </button>
      <button className="text-black cursor-pointer relative">
        <IconHeartCheck stroke={2} className="w-5 h-5" />
        {wishlistCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            {wishlistCount}
          </span>
        )}
      </button>
    </>
  );
}