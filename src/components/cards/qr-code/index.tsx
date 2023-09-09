import Image from 'next/image';
import { IQrCodeCard } from './interface';

export const QrCodeCard = ({ title, subTitle, image }: IQrCodeCard) => {
  return (
    <div className="flex h-auto w-full max-w-[20rem] flex-col gap-6 overflow-hidden rounded-20 bg-white p-4 shadow-1">
      <Image
        className="rounded-10 bg-gray"
        src={image.src}
        alt={image.alt}
        blurDataURL={image.lqip}
        width={image.width}
        height={image.height}
      />
      <div className="mb-6 flex flex-col gap-4">
        <h3 className="text-center text-md font-bold text-navy-dark">
          {title}
        </h3>
        <p className="px-4 text-center text-base font-normal tracking-[0.01175rem] text-gray">
          {subTitle}
        </p>
      </div>
    </div>
  );
};
