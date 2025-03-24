import localFont from 'next/font/local';

export const mullerNarrow = localFont({
  src: [
    {
      path: './fonts/mullernarrow-ultralight.woff2',
      weight: '200',
      style: 'normal',
    }
  ],
  variable: '--font-muller'
});

export const bounded = localFont({
  src: './fonts/ofont.ru_Bounded.ttf',
  variable: '--font-bounded'
}); 