import React, { Fragment, useState } from "react";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import { NavLink } from "react-router-dom";
import { SxProps, Theme } from "@mui/material";
import OpenCloseIcon from "../common/openCloseIcon";
import { itemsSideBar } from "../../constants";

interface SimpleItemProps {
  label: React.ReactNode;
  path?: string;
  onClick?: () => void;
  open?: boolean;
  sx?: SxProps<Theme>;
}

const SimpleItem = ({
  label,
  path,
  open = undefined,
  sx,
  ...rest
}: SimpleItemProps) => (
  <Box
    sx={{
      p: 0,
      height: "35px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
      "& .active-link:before": {
        position: "absolute",
        content: '""',
        width: "8px",
        height: "8px",
        backgroundColor: "secondary.main",
        left: "-17px",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
      },
      ...sx,
    }}
    {...rest}
  >
    {path ? (
      <NavLink
        to={path}
        style={{ textDecoration: "none", color: "black", position: "relative" }}
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        {label}
      </NavLink>
    ) : (
      <>
        {label}
        {open !== undefined ? <OpenCloseIcon open={open} /> : null}
      </>
    )}
  </Box>
);
interface ItemWithChildrenProps {
  label: React.ReactNode;
  items: { label: React.ReactNode; path: string }[];
}
const ItemWithChildren = ({ items, label }: ItemWithChildrenProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <SimpleItem
        onClick={() => setOpen((open) => !open)}
        label={label}
        open={open}
      />

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items.map((item) => (
            <SimpleItem
              key={item.path}
              label={item.label}
              sx={{ pl: 3 }}
              path={item.path}
            />
          ))}
        </List>
      </Collapse>
    </>
  );
};
const ListItemsSidebar = () => {
  return (
    <List
      sx={{ pl: "44px", pr: "16px" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {itemsSideBar.map((item) => (
        <Fragment key={item.label}>
          {item.children ? (
            <ItemWithChildren label={item.label} items={item.children} />
          ) : (
            <SimpleItem label={item.label} path={item.path} />
          )}
        </Fragment>
      ))}
    </List>
  );
};

export default ListItemsSidebar;
