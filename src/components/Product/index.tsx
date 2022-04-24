import * as S from './styles';

export type ProductProps = {
  urlImg: string
  title: string
  description: string
  value: number
}

export const Product = ({
  urlImg,
  title,
  description,
  value,
}: ProductProps) => {
  return (
    <S.Wrapper>

        <img src={urlImg} alt={title} />
        <h1>{title}</h1>
        <h2>{description}</h2>
        <p>{value}</p>

    </S.Wrapper>
  );
};
