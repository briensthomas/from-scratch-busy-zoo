import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function CustomButton({
  onClick,
  children,
  margin = '5px',
}) {
  return (
    <Button variant="contained" 
      onClick={onClick}
      sx={{ margin: margin }}>
      {children}
    </Button>

  );
}
