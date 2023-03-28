import React, { useState } from "react"
import {
  Button,
  ButtonProps,
  ButtonPropsVariantOverrides,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { Close } from "@mui/icons-material";
import { CallIcon } from "../images/call";
import { CallBlueIcon } from "../images/callBlue";
import { graphql, useStaticQuery } from "gatsby";

function RequestCallButton({ isWhite }: { isWhite?: boolean }) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const { allStrapiArticle } = useStaticQuery(graphql`
    query {
      allStrapiArticle {
        nodes {
          ServiceName
          slug
          id
        }
      }
    }
  `);
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      contact: "",
      question: "",
      email: "",
    },
    onSubmit: (values) => {
      fetch(process.env.STRAPI_API_URL + "/api/user-requests", {
        method: "POST",
        body: JSON.stringify({
          data: values,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res?.data) {
            setOpen(false);
          }
        })
        .catch((err) => alert(err?.toString()));
    },
  });
  return (
    <>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle
          flexDirection={"row"}
          display="flex"
          justifyContent="space-between"
        >
          <Typography variant="h6">Request a Call</Typography>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              name="name"
              placeholder="Name"
              variant="outlined"
              fullWidth
              margin="dense"
              onChange={handleChange}
              value={values.name}
            />
            <TextField
              name="email"
              placeholder="Email Address"
              type={"email"}
              margin="dense"
              fullWidth
              variant="outlined"
              onChange={handleChange}
              value={values.email}
            />
            <TextField
              name="contact"
              placeholder="Contact"
              margin="dense"
              type="number"
              fullWidth
              variant="outlined"
              onChange={handleChange}
              value={values.contact}
            />
            <TextField
              select
              value={values.question}
              onChange={handleChange}
              name="question"
              margin="dense"
              fullWidth
              label="Regarding "
            >
              {allStrapiArticle?.nodes?.map((item) => (
                <MenuItem value={item.ServiceName}>{item.ServiceName}</MenuItem>
              ))}
            </TextField>
            <Button type="submit" variant="contained" fullWidth sx={{ my: 5 }}>
              Submit Details
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      <Button
        variant={isWhite ? "outlined" : "contained"}
        onClick={() => setOpen(true)}
        sx={{
          px: 3,
          py: 1,
          ':hover': {
            bgcolor: '#FBB03B', // theme.palette.primary.main
            color: 'white',
          },
          bgcolor: isWhite ? "white" : "",
        }}
        startIcon={isWhite ? <CallBlueIcon /> : <CallIcon />}
      >
        {" "}
        Request a call
      </Button>
    </>
  );
}

export default RequestCallButton
