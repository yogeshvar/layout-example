import React from "react"; 
import Link from "next/link";
import { Box, Button } from "@mui/material";

export default function Home() {
  return (
    <>
    <h1>Layout Example</h1>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh", padding: "10px" }}>
      <div style={{ display: "flex", flexDirection: "row", padding: "10px" }}>
      <Box className="container" style={{ padding: "10px" }}>
        <Button variant="contained" color="primary">
          <Link href="/indent-management">Indent Management</Link>
        </Button>
        <Button variant="contained" color="primary">
          <Link href="/receive-indent">Receive Indent</Link>
        </Button>
        <Button variant="contained" color="primary">
          <Link href="/department-indent">Department Indent</Link>
        </Button>
      </Box>
      </div>
    </div>
    </>
  );
}
