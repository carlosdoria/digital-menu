import { formattedCurrency } from 'utils/formattedCurrency';
import * as S from './styles';

export type ProductProps = {
  urlImg: string
  title: string
  description: string
  price: number
}

export const Product = ({
  urlImg,
  title,
  description,
  price,
}: ProductProps) => {
  return (
    <S.Wrapper>

        <img src={urlImg} alt={title} />
        <h1>{title}</h1>
        <h2>{description}</h2>
        <p>{formattedCurrency(price)}</p>
    </S.Wrapper>
  );
};
