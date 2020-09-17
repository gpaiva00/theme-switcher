import React, { FC, useContext } from 'react';
import Switch from 'react-switch';
import {ThemeContext} from 'styled-components'
import {shade, lighten} from 'polished'

import {Container} from './styles';

interface HeaderProps {
  toggleTheme(): void;
}

const Header: FC<HeaderProps> = ({ toggleTheme }) => {
  const { colors, title }  = useContext(ThemeContext)
  return (
    <Container>
      INÍCIO

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
