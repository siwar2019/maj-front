
import {  toast } from 'react-toastify';
export const formatDateToCustomFormat = (dateString: any) => {
  const date = new Date(dateString); // Convert the date string to a Date object

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};
export const formatDate = (dbDate: string) => {
  const date = new Date(dbDate);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  return `${formattedDay}/${formattedMonth}/${year}`;
};
export const resetFilter = (setState: any) => {
  setState('');
};
export const getConnectedUser = () => {
  return localStorage.getItem('username');
};
export const showSuccessToast = (successMsg:string) => {
  toast.success(successMsg, {
      position: toast.POSITION.TOP_RIGHT
  });
};
export const showErrorToast = (errorMsg:string) => {
  toast.error(errorMsg, {
      position: toast.POSITION.TOP_RIGHT
  });
};
export const sessionExpired=() => {
  window.location.href='/'  ;
  localStorage.clear();
};
 export const getAuthorizationHeader = () => {
  const token = localStorage.getItem('access_token');
  return {
    Authorization: `${token}`,
  };
};
export const  passwordRules =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
export const emailRules = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

