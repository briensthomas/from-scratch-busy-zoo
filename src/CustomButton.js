import * as React from 'react';
import Button from '@mui/material/Button';

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
