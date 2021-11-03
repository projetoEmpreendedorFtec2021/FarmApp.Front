import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  width: 400px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: #52a2d1;
    margin-bottom: 15px;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  p {
    color: #000000;
    padding: 10px;
    margin-bottom: 50px;
    width: 100%;
    text-align: center;
  }
  button {
    color: #fff;
    font-size: 16px;
    background: #52a2d1;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
  }
  btn_click {
    background: #ADD8E6;
  }
  btn_unclick {
    background: #52a2d1;
  }
`;