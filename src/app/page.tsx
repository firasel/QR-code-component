import { QrCodeCard } from '@src/components/cards/qr-code';
import { IQrCodeCard } from '@src/components/cards/qr-code/interface';
import QrCodeImage from '/public/assets/images/image-qr-code.png';

const qrCodeCardProps: IQrCodeCard = {
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

export default function Home() {
  return (
    <section className="bg-gray-light">
      <div className="container">
        <div className="flex min-h-screen w-full items-center justify-center">
          <QrCodeCard {...qrCodeCardProps} />
        </div>
      </div>
    </section>
  );
}
