import { Typography } from "@mui/material";

interface FormTitleProps {
  text: string;
}

const FormTitle: React.FC<FormTitleProps> = ({ text }) => {
  return (
    <Typography variant="h5" align="center" fontWeight={600}>
      {text}
    </Typography>
  );
};

export default FormTitle;
