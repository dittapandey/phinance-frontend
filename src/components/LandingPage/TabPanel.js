import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const StyledTabs = styled((props)=>(
    <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan"/>}} />
))({
    '& .MuiTabs-indicator' : {
        display:'flex',
        justifyContent:"center",
        backgroundColor:"transparent",
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: "100%",
        backgroundColor:"transparent"
    }
});

const StyledTab = styled((props)=> <Tab disableRipple {...props}/>)(
    ({theme}) => ({
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        color: '#9B9B9C',
        '& .Mui-selected': {
            fontSize: theme.typography.pxToRem(25),
            color: "blue",
        },
        '& .Mui-focusVisisble' : {
            backgroundColor: '#040305'
        },
    }),
);

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <StyledTab label="Recent Fillings" {...a11yProps(0)} />
          <StyledTab label="Bookmarked" {...a11yProps(1)} />
          <StyledTab label="All companies" {...a11yProps(2)} />
        </StyledTabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}