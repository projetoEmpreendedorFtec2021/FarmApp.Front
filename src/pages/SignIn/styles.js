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
  img {
    width: 100px;
    margin: 10px 0 40px;
  }
  h1 {
    color: #52a2d1;
    margin-bottom: 15px;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  p2 {
    color: #52a2d1;
    margin-bottom: 15px;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    display: flex;
    height: 46px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
    }
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