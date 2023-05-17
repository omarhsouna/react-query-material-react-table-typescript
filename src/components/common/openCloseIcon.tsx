import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";

interface OpenCloseIconProps {
  open: boolean;
}
const OpenCloseIcon = ({ open }: OpenCloseIconProps) => {
  return <>{open ? <ExpandLess /> : <ExpandMore />}</>;
};

export default OpenCloseIcon;
