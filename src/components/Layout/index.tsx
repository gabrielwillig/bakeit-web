import { Box, createStyles, Stack, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { PropsWithChildren, ReactNode } from 'react';
import { CornerButton } from '../CornerButton';
import { Footer } from '../Footer';
import { DesktopMenu } from '../Menu/DesktopMenu';

const useStyles = createStyles((theme) => ({
  container: {
    width: '100%',
    height: 'auto',
    position: 'relative',
    gap: 0,
  },
  wrapper: {
    width: '100%',
    height: '100%',
    marginTop: '120px',
  },
}));

export function Layout({ children }: PropsWithChildren) {
  const { classes } = useStyles();

  const matches = useMediaQuery('(max-width: 768px)');

  return (
    <Stack className={classes.container}>
      <DesktopMenu/>
      <Box className={classes.wrapper}>
        {children}
      </Box>
      <CornerButton/>
      <Footer/>
    </Stack>
  );
}
