import { useDispatch, useSelector } from "react-redux";
import { themeVariants } from "src/GlobalStyle";
import { selectTheme } from "src/redux/theme/selectors";
import { setTheme } from "src/redux/theme/themeSlice";
import { List, ListItem, StyledBtn } from "./ThemeSwitcher.styled";

export const ThemeSwitcher = ({ onClose }: { onClose: () => void }) => {
  const dispatch = useDispatch();

  const currentTheme = useSelector(selectTheme);

  const handleChangeTheme = (newTheme: string) => {
    dispatch(setTheme(newTheme));
    onClose();
  };

  return (
    <List>
      {Object.entries(themeVariants).map(([name, theme]) => (
        <ListItem key={name}>
          <StyledBtn
            type="button"
            key={name}
            $active={currentTheme === name}
            onClick={() => handleChangeTheme(name)}
            aria-label={`select ${name} theme`}
            aria-pressed={currentTheme === name}
            style={{
              backgroundColor: theme.primary,
            }}
          ></StyledBtn>
        </ListItem>
      ))}
    </List>
  );
};
