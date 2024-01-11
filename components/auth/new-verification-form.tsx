'use client';

import { newVerification } from '@/actions/new-verification';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';
import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';
import { CardWrapper } from './card-wrapper';

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  console.log(token);

  const onSubmit = useCallback(() => {
    if (success || error) {
      return;
    }

    if (!token) {
      setError('Missing token!');
      return;
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data?.success);
        setError(data?.error);
      })
      .catch(() => {
        setError('Something went wrong');
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel='Confirming your verification'
      backButtonLabel='Back to sign in'
      backButtonHref='/auth/login'
    >
      <div className='flex items-center justify-center w-full'>
        {!success && !error && <HashLoader color='#38bdf8' />}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
};
