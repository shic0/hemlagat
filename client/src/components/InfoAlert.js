import * as React from 'react';
import { Collapse, IconButton, Alert, Box, Container } from "@material-ui/core"; 
import CloseIcon from '@mui/icons-material/Close';

export default function InfoAlert() {
  const [open, setOpen] = React.useState(true);

  return (
    <Container sx={{ mt: '1rem', maxWidth: '100vw'}}>
 
   <Box sx={{ width: '100%' }}>
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
          Detta är en demobutik! 
        </Alert>
      </Collapse>
    </Box>
    </Container>
  );
}
