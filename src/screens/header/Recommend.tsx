import { useState } from "react";
import styled from "styled-components";
import PageTitle from "../../components/PageTitle";
import { IService, ITourTypes, TourTypes } from "../../Tour";
import { Container } from "../Profile";

function Recommend() {
  const [service, setService] = useState<IService[]>([]);
  const [selectCode, setSelectCode] = useState(0);

  const handleSelectType = (item: ITourTypes) => {
    setService(item.service);
    setSelectCode(item.code);
  };

  return (
    <Container>
      <PageTitle title="Recommend"></PageTitle>
      <TypeContainer>
        {TourTypes.map((item) => {
          return (
            <Type
              key={item.code}
              onClick={() => handleSelectType(item)}
              isActive={item.code === selectCode}
            >
              {item.type}
            </Type>
          );
        })}
      </TypeContainer>
      {service.length === 0 ? null : (
        <TypeContainer>
          {service.map((ser) => {
            return <ServiceType key={ser.code}>{ser.name}</ServiceType>;
          })}
        </TypeContainer>
      )}
    </Container>
  );
}

export default Recommend;

const Type = styled.div<{ isActive: boolean }>`
  text-align: center;
  white-space: nowrap;
  border: 1px solid
    ${(props) => (props.isActive ? props.theme.mapHoverColor : "#aaaaaa")};
  padding: 10px;
  border-radius: 10px;
  transition: 0.5s;
  cursor: pointer;
  :hover {
    border: 1px solid ${(props) => props.theme.mapHoverColor};
    color: ${(props) => props.theme.mapHoverColor};
  }
  color: ${(props) =>
    props.isActive ? props.theme.mapHoverColor : props.theme.textColor};
`;

const ServiceType = styled.div`
  color: ${(props) => props.theme.textColor};
  text-align: center;
  white-space: nowrap;
  border: 1px solid #aaaaaa;
  padding: 10px;
  border-radius: 10px;
  transition: 0.5s;
  cursor: pointer;
  :hover {
    border: 1px solid ${(props) => props.theme.mapHoverColor};
    color: ${(props) => props.theme.mapHoverColor};
  }
`;

const TypeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px ${(props) => props.theme.borderColor};
  width: 800px;
  margin: auto;
  margin-bottom: 40px;
`;
