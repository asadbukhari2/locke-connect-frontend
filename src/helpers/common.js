import spanishVocab from '../utils/translation/spanish.js';
import chineseVocab from '../utils/translation/chinese.js';
export const setCookie = (name, value, days) => {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${value || ''}${expires}; path=/`;

  return true;
};

export const getCookie = name => {
  if (typeof document === 'undefined') {
    // Handle the case where document is not available (e.g., in a Node.js environment)
    console.error('Document is not available in this environment.');
    return false;
  }

  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export const clearCookie = name => {
  document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;

  return true;
};

export const formatPhoneNumber = inputValue => {
  if (!inputValue) return;
  const phoneNumber = inputValue?.replace(/[^\d]/g, '');

  if (phoneNumber?.length <= 3) {
    return phoneNumber;
  } else if (phoneNumber.length <= 6) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  } else {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  }
};

export const formatTime = milliseconds => {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = (minutes % 60).toString().padStart(2, '0');
  const formattedSeconds = (seconds % 60).toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

export const getFileType = type => {
  switch (type) {
    case 'application/pdf':
      return 'PDF';
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      return 'Word Document';
    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      return 'Excel Spreadsheet';
    // Add more cases for other file types if needed
    default:
      return 'Unknown';
  }
};

export const shortenFileName = (fileName, maxLength = 12) => {
  const fileExtension = fileName.slice(fileName.lastIndexOf('.'));
  const fileNameWithoutExtension = fileName.slice(0, fileName.lastIndexOf('.'));

  if (fileName.length <= maxLength) {
    return fileName;
  }

  const shortenedName = fileNameWithoutExtension.slice(0, maxLength - fileExtension.length) + '...';

  return shortenedName + fileExtension;
};

export const formatFileSize = sizeInBytes => {
  if (!document?.size) return;
  if (sizeInBytes === 0) return '0 KB';

  const units = ['KB', 'MB', 'GB'];
  let size = sizeInBytes / 1024; // Start with KB

  for (let i = 0; i < units.length; i++) {
    if (size < 1024) {
      return size.toFixed(2) + ' ' + units[i];
    }
    size /= 1024;
  }

  return size.toFixed(2) + ' ' + units[units.length - 1];
};

export const debounce = (func, delay) => {
  let timeoutId;

  return function (...args) {
    const context = this;

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};

export const LangConverter = (content = '', lang = 'en') => {
  const toLowerCaseKeysObject = obj => {
    const newObj = {};
    for (const key in obj) {
      newObj[key.toLowerCase()] = obj[key];
    }
    return newObj;
  };

  if (lang === 'es' && content) {
    return toLowerCaseKeysObject(spanishVocab)[content.trim().toLowerCase().replace(/-/, ' ')] ?? content;
  }
  if (lang === 'zh-CN' && content) {
    return toLowerCaseKeysObject(chineseVocab)[content.trim().toLowerCase().replace(/-/, ' ')] ?? content;
  }

  return content;
};
