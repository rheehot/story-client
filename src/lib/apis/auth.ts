import apiClient from './apiClient';

export type SendAuthEmailResponse = { registered: boolean };

export const sendAuthEmail = (email: string) =>
  apiClient.post<SendAuthEmailResponse>('/api/v1.0/auth/sendmail', {
    email,
  });
