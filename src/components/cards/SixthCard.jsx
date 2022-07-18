import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import clubCard from './ClubCardFull.jpg';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, DialogContentText } from '@mui/material';

function SixthCard() {

  const [open, setOpen] = React.useState(false)
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="190"
          image={clubCard}
          alt="Card"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Полный абонемент на 3 месяца
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Время посещения: 06:00-00:00<br/>
            Стоимость: 10000
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={handleClickOpen} size="small" color="primary">
          Купить
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Купить абонемент</DialogTitle>
          <DialogContent>
            <DialogContentText>Напишите свои данные и мы с вами свяжемся</DialogContentText>
            <TextField autoFocus margin="dense" id='name' label='ФИО' type='ФИО' fullWidth/>
            <TextField margin="dense" id='pass' label='Почта' type='' fullWidth/>
            <TextField margin="dense" id='pass' label='Номер телефона' type='' fullWidth/>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color='primary'>Отправить</Button>
          </DialogActions>
        </Dialog>
      </CardActions>
    </Card>
  );
}

export default SixthCard