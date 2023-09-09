export interface IQrCodeCard {
  image: IImage;
  title: string;
  subTitle: string;
}

interface IImage {
  src: string;
  alt: string;
  lqip?: string;
  width?: number;
  height?: number;
}
