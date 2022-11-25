import { ColorModeContex, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import TopBar from "./scenes/global/top-bar";
import Sidebar from "./scenes/global/sidebar";
import Dashboard from "./scenes/dashboard";
// import Team from "./scenes/team";
// import Contacts from "./scenes/contacts";
// import Invoices from "./scenes/invoices";
// import Form from "./scenes/form";
// import Bar from "./scenes/bar";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContex.Provider value={colorMode}>
      <ProSidebarProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar />
            <main className="content">
              <TopBar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                {/* <Route path="/team" element={<Team />} /> */}
                {/* <Route path="/contacts" element={<Contacts />} /> */}
                {/* <Route path="/invoices" element={<Invoices />} /> */}
                {/* <Route path="/form" element={<Form />} /> */}
                {/* <Route path="/bar" element={<Bar />} /> */}
                {/* <Route path="/line" element={<Line />} /> */}
                {/* <Route path="/pie" element={<Pie />} /> */}
                {/* <Route path="/faq" element={<FAQ />} /> */}
                {/* <Route path="/geography" element={<Geography />} /> */}
                {/* <Route path="/calendar" element={<Calendar />} /> */}
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ProSidebarProvider>
    </ColorModeContex.Provider>
  );
}

export default App;
