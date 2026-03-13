import styled from "styled-components";
import { cores } from "../../styles";

type InputGroupProps = {
  $maxWidth?: string

}

type RowProps = {
  $marginTop?: string

}

type TagButtonProps = {
  $isActive: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;
  margin-top: ${props => props.$marginTop || '0'};
  align-items: flex-end;
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${props => props.$maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;

  }

  input, select {
    background-color: ${cores.text};
    border: 1px solid ${cores.text};
    height: 32px;
    padding: 0 8px;
    width: 100%;
  }
`

export const TagButton = styled.button<TagButtonProps>`
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${cores.text};
  background-color: ${props => props.$isActive ? cores.tag : cores.background};
  height: 32px;
  border: none;
  margin-right: 16px;
  padding: 0 8px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }
`
