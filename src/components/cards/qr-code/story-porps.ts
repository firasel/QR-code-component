import { IQrCodeCard } from './interface';
import QrCodeImage from '/public/assets/images/image-qr-code.png';

export const qrCodeCardProps: IQrCodeCard = {
  image: {
    src: QrCodeImage.src,
    alt: 'Qr code',
    lqip: QrCodeImage.blurDataURL,
    width: QrCodeImage.width,
    height: QrCodeImage.height,
  },
  title: 'Improve your front-end skills by building projects',
  subTitle:
    'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level',
};
