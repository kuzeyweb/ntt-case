import {
  Button,
  InputAdornment,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../styles/general.styled";
import { LayoutHeaderStyled } from "./header.styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import { useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "antd";
import { v4 as uuid } from "uuid";

const Header = () => {
  const [selectedCategory, setSelectedCategory] = useState("Categories");

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value as string);
  };

  const [drawer, setDrawer] = useState(false);

  const isMobile = useMediaQuery("(max-width:480px)");
  const isAdornment = useMediaQuery("(max-width:550px)");

  return (
    <LayoutHeaderStyled>
      <Container>
        <Link className="logo" to="/">
          <img src="/assets/images/logo/logo-dark.svg" alt="NTT Data Logo" />
          {isMobile && (
            <>
              <MenuIcon
                onClick={() => setDrawer(true)}
                style={{ color: "#000" }}
              />
              <Drawer
                title="Menu"
                placement="right"
                onClose={() => setDrawer(false)}
                open={drawer}
                width={"100%"}
              >
                <ul>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((_, i) => (
                    <li key={uuid()} className="menu-item">
                      Menu Item
                    </li>
                  ))}
                </ul>
              </Drawer>
            </>
          )}
        </Link>
        <div className="search-field">
          <TextField
            className="search"
            InputProps={{
              endAdornment: !isAdornment ? (
                <InputAdornment position="end" className="adornment">
                  <Select
                    id="categorySelect"
                    value={selectedCategory}
                    onChange={handleChange}
                    placeholder="Categories"
                    label="Categories"
                    IconComponent={ExpandMoreIcon}
                  >
                    <MenuItem
                      hidden={true}
                      style={{ display: "none" }}
                      disabled
                      value={"Categories"}
                    >
                      Categories
                    </MenuItem>
                    <MenuItem value={"1"}>Data</MenuItem>
                    <MenuItem value={"2"}>Category Name</MenuItem>
                    <MenuItem value={"3"}>Category Name</MenuItem>
                    <MenuItem value={"4"}>Category Name</MenuItem>
                    <MenuItem value={"5"}>Category Name</MenuItem>
                  </Select>
                </InputAdornment>
              ) : null,
            }}
            variant="outlined"
            placeholder="Search..."
          />
          <Button variant="outlined">
            <SearchIcon />
          </Button>
        </div>
      </Container>
    </LayoutHeaderStyled>
  );
};

export default Header;
