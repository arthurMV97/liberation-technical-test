import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import { Dialog } from "@mui/material";

type FormDialogProps = {
  isOpen: boolean;
  title: string;
  form: React.JSX.Element;
  handleCloseDialog: () => void;
};
export const FormDialog = ({
  isOpen,
  title,
  form,
  handleCloseDialog,
}: FormDialogProps) => {
  return (
    <Dialog open={isOpen} onClose={handleCloseDialog}>
      <DialogTitle>{title}</DialogTitle>
      {form}
    </Dialog>
  );
};
