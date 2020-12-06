import { useState } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100%; */
  .input {
    width: 60%;
    border-radius: 0.1rem;
    border: 0.02rem solid #c4c7ce;
    padding: 0.05rem 0.16rem;
    font-size: 0.16rem;
    height: 0.4rem;
    &:focus {
      border: 0.02rem solid #4e6ef3;
    }
  }
`;
export default function Search() {
  const [input, setInput] = useState('');
  const handleInput = (evt) => {
    setInput(evt.target.value);
  };
  return (
    <StyledWrapper>
      <input placeholder="搜索" value={input} onChange={handleInput} className="input" />
    </StyledWrapper>
  );
}
