import * as S from 'react-icons/si';
import { useTheme } from '@/hooks/useTheme';

export function FastifyIcon() {
  const { theme } = useTheme();

  return (
    <S.SiFastify 
      color={theme === 'dark' ? "#FFFFFF" : '#ca054d'}
      size={40} 
    />
  );
}