import app from './app';
const port = 8000;

app.listen(port, (): void => {
  console.log(`Flight Booking app listening on port ${port}`);
});