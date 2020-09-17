import React, { FC, useContext } from 'react';
import Switch from 'react-switch';
import {ThemeContext} from 'styled-components'
import {lighten} from 'polished'

import {Container, Title} from './styles';

interface HeaderProps {
  toggleTheme(): void;
}

const Header: FC<HeaderProps> = ({ toggleTheme }) => {
  const { colors, title }  = useContext(ThemeContext)
  return (
    <Container>
      <Title>
        {title === 'dark' ? 'Dark Night' : 'Bright Day'}
      </Title>

      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={lighten(0.30, colors.primary)}
        onColor={colors.secondary}
      />
    </Container>
  )
}

export default Header;
