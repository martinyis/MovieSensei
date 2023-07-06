import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { TabContext } from "../../../Contexts/TabContext";
export default function ScrollableTabsButtonPrevent() {
  const { setOption } = React.useContext(TabContext);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    setOption(value);
  }, [value]);

  return (
    <Box sx={{ maxWidth: 732, bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: "#867070",
          },
          //when hover grey
          "& .MuiTab-root:hover": {
            backgroundColor: "#ffffff",
          },
          //when selcted grey
          "& .Mui-selected": {
            backgroundColor: "#ffffff",
          },
        }}
        aria-label="scrollable prevent tabs example"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#867070",
            height: "2px",
          },
        }}
      >
        <Tab
          label="Mood"
          className="w-[33.333%]"
          sx={{
            color: "#867070", // Set the default text color
            "&.Mui-selected": {
              color: "#867070", // Set the color when the tab is selected
            },
            "&.Mui-focusVisible": {
              color: "#867070", // Set the color when the tab is focused
            },
            "&:hover": {
              color: "#867070", // Set the color when the tab is hovered
            },
          }}
        />
        <Tab
          label="Memory"
          className="w-[33.333%]"
          sx={{
            color: "#867070",
            "&.Mui-selected": {
              color: "#867070",
            },
            "&.Mui-focusVisible": {
              color: "#867070",
            },
            "&:hover": {
              color: "#867070",
            },
          }}
        />
        <Tab
          label="Filters"
          className="w-[33.333%]"
          sx={{
            color: "#867070",
            "&.Mui-selected": {
              color: "#867070",
            },
            "&.Mui-focusVisible": {
              color: "#867070",
            },
            "&:hover": {
              color: "#867070",
            },
          }}
        />
      </Tabs>
    </Box>
  );
}
