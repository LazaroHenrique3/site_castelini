import { IBannerSwipperImagesType } from '@/types/IBannerSwipperImagesType';

import mission from '../../public/images/others/mission.jpg';
import purpose from '../../public/images/others/purpose.jpg';
import values from '../../public/images/others/values.jpg';
import vision from '../../public/images/others/vision.jpg';

export const aboutBannerImagesData: IBannerSwipperImagesType[] = [
  { urlImage: mission, description: 'Nossa missão' },
  { urlImage: purpose, description: 'Nossa proposta' },
  { urlImage: values, description: 'Nossos Valores' },
  { urlImage: vision, description: 'Nossa visão' },
]