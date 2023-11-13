import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type ExperienceData = {
  heading: string;
  sections: Array<ExperienceSectionData>
};

type ExperienceSectionData = {
  fromDate: Date;
  toDate: Date;
  currentlyWorking: boolean;
  description: string;
  company: string;
  key: number;
};

export default function Experience(data: ExperienceData) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const { heading, sections } = data;

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div id="experience">
      <div className="mt-20">
        <div className="w-1/2	m-auto">
          {heading && <p className="font-mono text-3xl mb-6">{heading}</p>}
          {sections &&
            sections?.length &&
            sections.map(
              ({
                fromDate,
                toDate,
                currentlyWorking,
                description,
                company,
                key,
              }: ExperienceSectionData) => {
                let panelId = "panel" + key;
                return (
                  <Accordion
                    expanded={expanded === panelId}
                    onChange={handleChange(panelId)}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`${panelId}bh-content`}
                      id={`${panelId}bh-header`}
                    >
                      {company && <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        {company}
                      </Typography>}
                      {fromDate && <Typography sx={{ color: "text.secondary" }}>
                        {fromDate} - {currentlyWorking ? "Present" : toDate}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {description && <Typography>{description}</Typography>}
                    </AccordionDetails>
                  </Accordion>
                );
              }
            )}
        </div>
      </div>
    </div>
  );
}