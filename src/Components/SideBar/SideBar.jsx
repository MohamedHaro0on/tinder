import { useState } from "react";

// meterial ui imports;
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import IconButton from "@material-ui/core/IconButton";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from "@material-ui/core/Avatar";
// end

import ClassNames from "./SideBar.module.css";
import ProfileImage from "../../Images/profile photo.jpg";



// this is the side bar exactly like the one in tinder app ;
// it display's the user's profile image and Linkds him to his profile panel;
// its only rendered in larg screen sizes ;

const SideBar = () => {

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <aside className={ClassNames.SideBar}>

            {
                // the side bar header
                <header className={ClassNames.SideBarHeader}>
                    <div>
                        <Avatar src={ProfileImage} alt="Mohamed Ahmed Ali" title="Mohamed Ahmed Ali" />
                        <h2> My Profile </h2>
                    </div>
                    <IconButton aria-label="Work Mode"> <BusinessCenterIcon /></IconButton>
                </header>
            }

            {
                // the side bar tabs ;
                // inside the tabPanel component there Should be the Matches or Message Component ;
                <main className={ClassNames.Main}>
                    <Paper>

                        <Tabs onChange={handleChange} centered value={value}>
                            <Tab label="Matches" />
                            <Tab label="Messages" />
                        </Tabs>

                        <TabPanel value={value} index={0} aria-label="Matches">
                            Matches
                        </TabPanel>

                        <TabPanel value={value} index={1} aria-label="Messages">
                            Messages
                        </TabPanel>
                    </Paper>
                </main>
            }

        </aside>
    )
}

export default SideBar


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
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};