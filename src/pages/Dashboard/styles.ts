import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Container = styled.div`
  padding-top: 120px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

    // ESTILIZAÇÃO PARA DISPOSITIVOS MOBILE 
  @media only screen and (max-width: 600px) {
    width: 100%;
    padding: 120px 20px 20px 20px;
  }
`;

export const Error = styled.span`
  margin-bottom: 10px;
  color: #c53030;
  display: block;
  font-size: 14px;
  text-align: left;
`;

export const Form = styled.form<FormProps>`
  width: 516px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
  padding: 20px;

  display: flex;
  flex-direction: column;

  margin-bottom: 40px;

  input {
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #494949;
    padding: 0px 20px;
    background-color: #494949;
    color: #a8a8b3;

    ${(props) =>
    props.hasError &&
    css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  textarea {
    width: 100%;
    height: 80px;
    border-radius: 8px;
    border: 1px solid #494949;
    padding: 20px;
    background-color: #494949;
    color: #a8a8b3;
    
    margin-top: 10px;

    ${(props) =>
    props.hasError &&
    css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 98px;
    height: 41px;
    border-radius: 8px;
    background-color: #5f5f5f;
    border: none;
    color: #333;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#71bb00')};
    }
  }

  // ESTILIZAÇÃO PARA DISPOSITIVOS MOBILE 
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const AvatarContainer = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AvatarUploaded = styled.div`
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  transition: all 0.3s ease-out;

  img {
    width: 88px;
    height: 88px;
    border-radius: 36px;
  }

  svg {
    color: #c53030;
    cursor: pointer;
    margin-left: 15px;
    transition: all 0.3s ease-out;

    &:hover {
      color: ${shade(0.2, '#c53030')};
    }
  }
`;

export const AvatarGroup = styled.div`
  position: relative;

  width: 88px;
  height: 88px;
  object-fit: contain;
  border-radius: 36px;
  border: solid 1px #4b4b4b;
  background-color: rgba(75, 75, 75, 0);
  margin-bottom: 20px;
  transition: all 0.3s ease-out;

  label {
    position: absolute;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    input {
      display: none;
    }
  }
`;

export const ButtonsGroup = styled.div`
  width: 200px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-left: auto;
  margin-top: 35px;

  span {
    color: #666;
    cursor: pointer;
    text-decoration: underline;
    transition: all 0.3s ease-out;

    &:hover {
      color: ${shade(0.2, '#c53030')};
    }
  }
`;

export const FeedsTitle = styled.div`
  width: 516px;
  margin-bottom: 10px;

  h5 {
    margin-right: auto;
    color: #7a7a7a;
  }

    // ESTILIZAÇÃO PARA DISPOSITIVOS MOBILE 
    @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Feeds = styled.div`
  width: 516px;
  padding: 10px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;

  display: flex;
  flex-direction:column;

  margin-bottom: 20px;
  transition: transform 0.2s;

  div {
    margin-left: auto;

    svg {
      color: #71bb00;
      cursor: pointer;
      margin-left: 20px;
      transition: all 0.3s ease-out;

      &:hover {
        color: ${shade(0.2, '#71bb00')};
      }
    }

    svg + svg {
      color: #c53030;
      &:hover {
        color: ${shade(0.2, '#c53030')};
      }
    }
  }

  &:hover {
    transform: translateX(10px);
  }

  // ESTILIZAÇÃO PARA DISPOSITIVOS MOBILE 
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const FeedsBody = styled.div`
  width: 100%;
  margin-top: 20px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  img{
    margin-right: 20px;
    width: 88px;
    height: 88px;
    border-radius: 36px;
  }
`;

export const FeedsContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction:column;
  box-sizing: border-box;

  p {
    margin-bottom: 20px;
    color: #9f9f9f;
  }

  span{
    font-size: 13px;
    color: #5f5f5f;
  }

  strong{
    font-size: 14px;
    font-weight: 300;
    color: #7a7a7a;
  }
`;
