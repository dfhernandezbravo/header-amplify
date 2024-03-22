import { ProductImage } from '@entities/search/searches.entity';
import Image from 'next/image';
import React from 'react';
import { SuggestionImageContainer } from './styles';

interface Props {
  images: ProductImage[];
}

const SuggestionImage: React.FC<Props> = ({ images }) => {
  const [image, setImage] = React.useState<ProductImage>(images[0]);

  const onMouseUp = () => {
    if (images.length > 1) {
      setImage(images[1]);
    }
  };

  const onMouseOut = () => {
    setImage(images[0]);
  };

  return (
    <SuggestionImageContainer
      onMouseEnter={onMouseUp}
      onMouseLeave={onMouseOut}
    >
      <Image
        data-id="product-image-suggestion"
        src={image.imageUrl}
        alt={image.imageTag}
        aria-label={image.imageLabel}
        width={140}
        height={140}
      />
    </SuggestionImageContainer>
  );
};

export default SuggestionImage;
