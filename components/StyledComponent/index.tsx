import styled from 'styled-components/native';

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  position: absolute;
  left: 20px;
  top: -30px;
  border-radius: 50px;
`;

export const DiskCenter = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  position: absolute;
  left: 60px;
  top: 10px;
  z-index: 10;
  background: #ffffff;
`;

export const Playing = styled.View`
  background: rgba(255, 255, 255, 0.7);
  width: 300px;
  height: 85px;
  border-radius: 14px;
  z-index: -1;
  align-items: center;
  padding-top: 10px;
`;

export const Column = styled.View`
  flex-direction: column;
  height: 100%;
  padding-left: 60px;
`;

export const Container = styled.View`
width: 326px;
height: 99.5px;
background: #ffffff;
border-radius: 14px;
box-shadow: 0 50px 57px #6f535b;
justify-content: center;
align-items: center;
`;

export const Row = styled.View`
flex-direction: row;
align-items: center;
height: 80px;
width: 150px;
justify-content: space-between;
position: absolute;
right: 30px;
`;

export const Artist = styled.Text`
font-size: 15px;
font-family: "roboto-bold";
color: rgba(0, 0, 0, 0.7);
`;

export const Title = styled.Text`
font-size: 12px;
font-family: "roboto-light";
color: rgba(0, 0, 0, 0.7);
`;