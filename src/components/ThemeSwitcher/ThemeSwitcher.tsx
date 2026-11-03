import { useDispatch, useSelector } from "react-redux";
import { themeVariants } from "src/GlobalStyle";
import { selectTheme } from "src/redux/theme/selectors";
import { setTheme } from "src/redux/theme/themeSlice";
import { List, ListItem, StyledBtn } from "./ThemeSwitcher.styled";

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();

  const currentTheme = useSelector(selectTheme);

  const handleChangeTheme = (newTheme: string) => {
    dispatch(setTheme(newTheme));
  };

  return (
    <List>
      {Object.entries(themeVariants).map(([name, theme]) => (
        <ListItem>
          <StyledBtn
            type="button"
            key={name}
            active={currentTheme === name}
            onClick={() => handleChangeTheme(name)}
            aria-label={`select ${name} theme`}
            aria-pressed={currentTheme === name}
            style={{
              backgroundColor: theme.primary,
              // border: currentTheme === name ? "2px solid #121417B3" : "none",
            }}
          ></StyledBtn>
        </ListItem>
      ))}
    </List>
  );
};
