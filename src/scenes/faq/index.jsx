import { Box, Accordion, AccordionSummary, AccordionDetails, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/header";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="All your questions answered" />
      {/* Question 1 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, natus eos molestiae sint harum, magnam
            quibusdam aperiam fuga consectetur reiciendis ab vero nisi necessitatibus! Iste veniam unde recusandae
            tempora illum.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Question 2 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, natus eos molestiae sint harum, magnam
            quibusdam aperiam fuga consectetur reiciendis ab vero nisi necessitatibus! Iste veniam unde recusandae
            tempora illum.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Question 3 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your Favourite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, natus eos molestiae sint harum, magnam
            quibusdam aperiam fuga consectetur reiciendis ab vero nisi necessitatibus! Iste veniam unde recusandae
            tempora illum.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Question 4 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            A Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, natus eos molestiae sint harum, magnam
            quibusdam aperiam fuga consectetur reiciendis ab vero nisi necessitatibus! Iste veniam unde recusandae
            tempora illum.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
