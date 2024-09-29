import { AppBar, IconButton, Typography } from '@mui/material';
import { Container } from '@mui/system';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';


export default function NavBar({ currentPage }: { currentPage: string }) {
  return (<AppBar position='static'>
    <Container maxWidth="xl" className="flex justify-between">
      <Typography variant="h3" className="justify-center py-1">{currentPage}</Typography>
      {currentPage != "Home" ? <div className='place-self-end'>
        <Link href="/">
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"

            color="inherit"
          >
            <HomeIcon fontSize='large' />
          </IconButton>
        </Link>
      </div> : null}
    </Container>
  </AppBar>);
}