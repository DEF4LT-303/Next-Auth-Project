'use client';

import { logout } from '@/actions/logout';
import { currentUser } from '@/hooks/use-current-user';

const SettingsPage = () => {
  const user = currentUser();

  const onClick = () => {
    logout();
  };

  return (
    <div className='bg-white p-10 rounded-xl'>
      <button type='submit' onClick={onClick}>
        Sign out
      </button>
    </div>
  );
};

export default SettingsPage;
