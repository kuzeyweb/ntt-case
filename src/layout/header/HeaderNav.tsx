import { ConfigProvider, Menu, MenuProps } from "antd";
import { Container } from "../../styles/general.styled";
import { HeaderNavStyled } from "./headernav.styled";

const HeaderNav = () => {
  const items: MenuProps["items"] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
    (_, index) => {
      if (index === 0)
        return {
          label: "Menu Item",
          key: index,
          children: [
            {
              type: "group",
              label: "Header",
              children: [
                {
                  label: "Subheader",
                  key: "setting:1",
                },
                {
                  label: "Subheader",
                  key: "setting:2",
                },
                {
                  label: "Subheader",
                  key: "setting:3",
                },
                {
                  label: "Subheader",
                  key: "setting:4",
                },
                {
                  label: "Subheader",
                  key: "setting:5",
                },
                {
                  label: "Subheader",
                  key: "setting:6",
                },
                {
                  label: "Subheader",
                  key: "setting:7",
                },
                {
                  label: "Subheader",
                  key: "setting:8",
                },
              ],
            },
            {
              type: "group",
              label: "Header",
              children: [
                {
                  label: "Subheader",
                  key: "setting:9",
                },
                {
                  label: "Subheader",
                  key: "setting:10",
                },
                {
                  label: "Subheader",
                  key: "setting:11",
                },
                {
                  label: "Subheader",
                  key: "setting:12",
                },
                {
                  label: "Subheader",
                  key: "setting:13",
                },
                {
                  label: "Subheader",
                  key: "setting:14",
                },
                {
                  label: "Subheader",
                  key: "setting:15",
                },
                {
                  label: "Subheader",
                  key: "setting:16",
                },
              ],
            },
            {
              type: "group",
              label: (
                <div className="dd-image-container">
                  <img
                    className="menu-dropdown-image"
                    src="/assets/images/menu-dropdown.svg"
                    alt="Menu Dropdown"
                  />
                </div>
              ),
            },
          ],
        };
      else
        return {
          label: "Menu Item",
          key: index,
        };
    }
  );

  return (
    <Container>
      <HeaderNavStyled>
        <ConfigProvider
          theme={{
            components: {
              Menu: {
                groupTitleColor: "#000",
                groupTitleFontSize: 14,
                itemPaddingInline: 17.8,
                fontFamily: "Roboto, sans-serif",
              },
            },
          }}
        >
          <Menu
            style={{ border: "none", marginBottom: "12px" }}
            mode="horizontal"
            items={items}
          />
        </ConfigProvider>
      </HeaderNavStyled>
    </Container>
  );
};

export default HeaderNav;
