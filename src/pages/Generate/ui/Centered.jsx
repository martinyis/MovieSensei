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
    <Box sx={{ maxWidth: 732, bgcolor: "#000000" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: "#000000",
          },
          //when hover grey
          "& .MuiTab-root:hover": {
            backgroundColor: "#000000",
          },
          //when selcted grey
          "& .Mui-selected": {
            backgroundColor: "#000000",
          },
        }}
        aria-label="scrollable prevent tabs example"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#610094",
            height: "2px",
          },
        }}
      >
        <Tab
          label="Mood"
          className="w-[33.333%]"
          sx={{
            color: "#ffffff", // Set the default text color
            "&.Mui-selected": {
              color: "#ffffff", // Set the color when the tab is selected
            },
            "&.Mui-focusVisible": {
              color: "#ffffff", // Set the color when the tab is focused
            },
            "&:hover": {
              color: "#ffffff", // Set the color when the tab is hovered
            },
          }}
        />
        <Tab
          label="Memory"
          className="w-[33.333%]"
          sx={{
            color: "#ffffff",
            "&.Mui-selected": {
              color: "#ffffff",
            },
            "&.Mui-focusVisible": {
              color: "#ffffff",
            },
            "&:hover": {
              color: "#ffffff",
            },
          }}
        />
        <Tab
          label="Filters"
          className="w-[33.333%]"
          sx={{
            color: "#ffffff",
            "&.Mui-selected": {
              color: "#ffffff",
            },
            "&.Mui-focusVisible": {
              color: "#ffffff",
            },
            "&:hover": {
              color: "#ffffff",
            },
          }}
        />
      </Tabs>
    </Box>
  );
}
