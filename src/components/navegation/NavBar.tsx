import * as React from "react";
import Box from "@mui/material/Box";
import { Avatar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

export default function MenuAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Toolbar>
                <Avatar sx={{ marginLeft: "auto" }}>H</Avatar>
            </Toolbar>
        </Box>
    );
}
