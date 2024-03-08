import Spinner from '@components/atoms/spinner';
import {
  LoadingContainer,
  HeaderResultSpinnerContainer,
  TextContent,
} from './styles';

type LoadingContentProps = {
  isLoading: boolean;
  showNoContent: boolean;
};

const LoadingContent = (props: LoadingContentProps) => {
  const { isLoading, showNoContent } = props;
  if (isLoading && !showNoContent) {
    return (
      <LoadingContainer>
        <HeaderResultSpinnerContainer>
          <Spinner />
        </HeaderResultSpinnerContainer>
        <TextContent>
          <h4>Buscando artículos</h4>
          <p>Espera un momento...</p>
        </TextContent>
      </LoadingContainer>
    );
  }
  return null;
};

export default LoadingContent;
