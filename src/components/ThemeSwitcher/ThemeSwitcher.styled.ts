import styled from "styled-components";

export const StyledBtn = styled.button<{ active: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 16px;
  cursor: "pointer";
  transition:
    transform 200ms ${({ theme }) => theme.transitions.cubic},
    border-color 200ms ${({ theme }) => theme.transitions.cubic},
    box-shadow 200ms ${({ theme }) => theme.transitions.cubic};

  border: ${({ active }) => (active ? "2px solid #121417B3" : "none")};

  transform: ${({ active }) => (active ? "scale(1.2)" : null)};

  &:hover,
  &:focus {
    transform: scale(1.2);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 26px;

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }
`;

export const ListItem = styled.li`
  display: grid;
  justify-content: center;
  align-items: center;
`;
