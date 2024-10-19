import { useCallback, useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { TabPanelProps } from "./types";
import { skillsData } from "../../../pages/homepage/mock";

import styles from "./styles.module.css";

export const SkillsTab = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const labels = Object.keys(skillsData);
  const skillsArray = Object.values(skillsData);

  const handleChange = useCallback(
    (event: React.SyntheticEvent, newValue: number) => {
      setSelectedTab(newValue);
    },
    []
  );
  return (
    <Box>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="skills tabs"
      >
        {labels.map((label, index) => (
          <Tab className={styles.label} key={index} label={label} />
        ))}
      </Tabs>
      {skillsArray.map((skills, index) => (
        <TabPanel key={index} value={selectedTab} index={index}>
          <Box className={styles.skillBlock}>
            <Box className={styles.skillBox}>
              {skills.map((skill, i) => (
                <div key={i} className={styles.skill}>
                  {skill.name}
                  <img
                    width={50}
                    height={50}
                    src={skill.logo}
                    alt={skill.name}
                  />
                </div>
              ))}
            </Box>
          </Box>
        </TabPanel>
      ))}
    </Box>
  );
};

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};
