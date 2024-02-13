import { AuthContext } from '../context/authContext';
import { useContextHook } from 'use-context-hook';
import { LangConverter } from './common';

export const useTranslation = () => {
  const { lang } = useContextHook(AuthContext, {
    lang: 1,
  });
  const t = text => LangConverter(text, lang?.value);
  return { t };
};
