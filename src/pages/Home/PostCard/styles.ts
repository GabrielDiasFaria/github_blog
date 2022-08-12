import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const PostCardContainer = styled(NavLink)`
  width: 100%;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;

  background: ${(props) => props.theme["base-post"]};
  border-radius: 10px;
  border: 2px solid transparent;

  height: 260px;
  overflow: hidden;

  transition: border 0.2s;

  cursor: pointer;
  header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* gap: 0.7rem; */
    h1 {
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 160%;
      color: ${(props) => props.theme["base-title"]};
      text-align: justify;
    }

    span {
      font-size: 0.875rem;
      line-height: 160%;
      color: ${(props) => props.theme["base-span"]};
    }

    div {
      margin-top: 1rem;
    }
  }

  main {
    height: 112px;
    overflow: hidden;
    p {
      height: 100%;
      text-align: justify;
      color: ${(props) => props.theme["base-text"]};
    }
  }

  &:hover {
    border: 2px solid ${(props) => props.theme["base-label"]};
  }
`;

interface LabelProps {
  color: string;
}
export const Label = styled.span<LabelProps>`
  color: ${(props) => props.color} !important;
  border: 2px solid ${(props) => props.color};
  padding: 5px;
  border-radius: 1rem;
  margin-right: 5px;
  font-size: 0.7rem;
`;
