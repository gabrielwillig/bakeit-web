import { DM_Serif_Text, Poppins } from 'next/font/google';

const serif = DM_Serif_Text({ weight: ['400'], preload: true, subsets: ['latin'] });
const poppins = Poppins({ weight: ['400','600','700','800'], preload: true, subsets: ['latin'] });

export const fonts = {
  serif: serif.style.fontFamily,
  poppins: poppins.style.fontFamily,
};