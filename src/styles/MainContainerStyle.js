import { title } from "./masterStyles";

const classifiedCardStyle = {
  section: {
    padding: "40px 0",
    textAlign: "center",
    border:"2px",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    fontFamily: '"Roboto", "Helvetica", "Arial" , "sans-serif"',
  },
  description: {
    color: "#999",
  },
};

export default classifiedCardStyle;
