import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 20px;
  right: 20px;
`;

const Button = styled.button`font-size: 1em;`;

const CheckboxContainer = styled.div``;

const CheckboxLabel = styled.label``;

const Checkbox = styled.input``;

const Actions = ({ onSearch, toggleClearance, withClearance }) =>
  <Container>
    <Button onClick={onSearch}>Find</Button>
    <CheckboxContainer>
      <CheckboxLabel>Toggle clearance</CheckboxLabel>
      <Checkbox
        name="clearance"
        type="checkbox"
        checked={withClearance}
        onChange={toggleClearance}
      />
    </CheckboxContainer>
  </Container>;

Actions.propTypes = {
  onSearch : PropTypes.func.isRequired,
  toggleClearance : PropTypes.func.isRequired,
  withClearance : PropTypes.bool,
};

export default Actions;
