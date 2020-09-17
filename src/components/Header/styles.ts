import styled from 'styled-components'

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

export const Title = styled.h2`
  color: #fff;
  font-family: 'JetBrains Mono'
`;
