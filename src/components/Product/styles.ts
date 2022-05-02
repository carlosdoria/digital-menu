import Link from 'next/link'
import styled from 'styled-components';
import theme from 'styles/theme';

export const Wrapper = styled.a`
  width: min-content;

  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.xxsmall};

  h2 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    font-size: ${theme.font.sizes.large};
  }

  p {
    font-size: 14px;

  }
`;
