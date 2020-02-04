import React from 'react';
import Select,  { Props } from 'react-select';
import styled from "styled-components";

const SelectStyled = styled(Select)`
  &.react-select-container{
    .react-select__control{
      .react-select__value-container{
        .react-select__indicators{
        
        }
      }
    }
    .react-select__menu{
      .react-select__menu-list{
        .react-select__option{
        
        }
      }
    }
  }
`;

const SelectStyle: React.FC<Props> = (props) => {
  return <Select {...props}/>;
};

export default SelectStyle;