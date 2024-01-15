'use client';

import { UserInfo } from '@/components/user-info';
import { currentUser } from '@/hooks/use-current-user';

const ClientPage = () => {
  const user = currentUser();

  return (
    <div>
      <UserInfo user={user} label='📱 Server Component' />
    </div>
  );
};

export default ClientPage;
