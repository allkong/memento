import '@emotion/react';
import { AppTheme } from '@/shared/styles/theme';

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}
