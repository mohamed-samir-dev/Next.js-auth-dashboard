import { Bell, ShoppingBag } from 'lucide-react';
import { IconHeartCheck } from '@tabler/icons-react';

export default function ActionButtons() {
  return (
    <>
      <button className=" text-black cursor-pointer">
        <ShoppingBag className="w-5 h-5" />
      </button>
      <button className=" text-black cursor-pointer">
        <Bell className="w-5 h-5" />
      </button>
      <button className=" text-black cursor-pointer">
        <IconHeartCheck stroke={2} className="w-5 h-5" />
      </button>
    </>
  );
}