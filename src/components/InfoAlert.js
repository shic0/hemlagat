import * as React from 'react';
import {IconButton, Collapse, Box, Container } from "@material-ui/core"
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
export default function InfoAlerts() {
  const [open, setOpen] = React.useState(true);

  return (
  <Container>
    <Box mt="100px" sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
         Detta är en demobutik
        </Alert>
      </Collapse>
    </Box>
  </Container>
  );
}
