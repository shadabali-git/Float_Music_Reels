import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Collapse,
  IconButton,
  Box,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const departmentData = [
  {
    department: 'customer_service',
    sub_departments: ['support', 'customer_success'],
  },
  {
    department: 'design',
    sub_departments: ['graphic_design', 'product_design', 'web_design'],
  },
];

const DepartmentList: React.FC = () => {
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});
  const [selected, setSelected] = useState<{ [key: string]: boolean }>({});

  const handleToggle = (dept: string) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [dept]: !prevOpen[dept],
    }));
  };

  const handleSelectDepartment = (dept: string, subDepts: string[]) => {
    const isSelected = selected[dept];
    setSelected((prevSelected) => {
      const newSelected = { ...prevSelected, [dept]: !isSelected };
      subDepts.forEach((subDept) => {
        newSelected[subDept] = !isSelected;
      });
      return newSelected;
    });
  };

  const handleSelectSubDepartment = (dept: string, subDept: string) => {
    const isSelected = selected[subDept];
    setSelected((prevSelected) => {
      const newSelected = { ...prevSelected, [subDept]: !isSelected };

      const allSelected = departmentData
        .find((d) => d.department === dept)
        ?.sub_departments.every((sub) => newSelected[sub]);

      newSelected[dept] = allSelected ?? false;

      return newSelected;
    });
  };

  return (
    <List>
      {departmentData.map((dept) => (
        <Box key={dept.department}>
          <ListItem
            button
            onClick={() => handleToggle(dept.department)}
            secondaryAction={
              <IconButton
                edge="end"
                onClick={() => handleToggle(dept.department)}
              >
                {open[dept.department] ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            }
          >
            <Checkbox
              checked={selected[dept.department] || false}
              onChange={() => handleSelectDepartment(dept.department, dept.sub_departments)}
            />
            <ListItemText primary={dept.department} />
          </ListItem>
          <Collapse in={open[dept.department]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {dept.sub_departments.map((subDept) => (
                <ListItem key={subDept} sx={{ pl: 4 }}>
                  <Checkbox
                    checked={selected[subDept] || false}
                    onChange={() => handleSelectSubDepartment(dept.department, subDept)}
                  />
                  <ListItemText primary={subDept} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </Box>
      ))}
    </List>
  );
};

export default DepartmentList;