import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Formik } from "formik";
import AutoComplete from "./common/autocomplete";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center"
  },
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    display: "flex",
    flexDirection: "column"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function CustomerForm(props) {
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  return (
    <div style={{ paddingLeft: 20, paddingTop: 10, paddingBottom: "50px" }}>
      <Typography variant="h6">{"New Post"}</Typography>
      <Formik
        enableReinitialize
        initialValues={{
          fullName: "",
          mobileNumber: "",
          title: "",
          tags: "",
          longitude: "",
          latitude: "",
          description: "",
          address: ""
        }}
        onSubmit={async values => {
          if (!loading) {
            setLoading(true);
          }

          const reqData = {
            data: values
          };
          const res = await axios.post("/api/postEvent", values);
          console.log(res);
        }}
        render={({ values, handleReset, handleChange, handleSubmit }) => (
          <div className={classes.paper}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <TextField
                    name={"fullName"}
                    label={"Full Name"}
                    value={values.fullName}
                    type="text"
                    fullWidth
                    required={true}
                    onChange={handleChange}
                    variant={"outlined"}
                    margin={"normal"}
                  />
                </Grid>
                {/* <Grid item xs={3}>
                  <TextField
                    name={"email"}
                    label={"Email ID"}
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    variant={"outlined"}
                    fullWidth
                    required={true}
                    margin={"normal"}
                  />
                </Grid> */}
                <Grid item xs={3}>
                  <TextField
                    name={"mobileNumber"}
                    label={"Contact Number"}
                    value={values.mobileNumber}
                    onChange={handleChange}
                    id="formatted-numberformat-input"
                    fullWidth
                    variant={"outlined"}
                    margin={"normal"}
                    placeholder={"Enter 10 digit mobile number"}
                    // InputProps={{
                    //     inputComponent: NumberFormatCustom,
                    // }}
                  />
                </Grid>
              </Grid>
              <Grid container direction={"column"}>
                <Grid item xs={6}>
                  <TextField
                    name="address"
                    label={"Address"}
                    value={values.address}
                    onChange={handleChange}
                    rows={4}
                    multiline
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <TextField
                    name={"title"}
                    label={"Title"}
                    value={values.title}
                    type="text"
                    fullWidth
                    required={true}
                    onChange={handleChange}
                    variant={"outlined"}
                    margin={"normal"}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    name={"tags"}
                    label={"Tags"}
                    value={values.tags}
                    type="text"
                    fullWidth
                    required={true}
                    onChange={handleChange}
                    variant={"outlined"}
                    margin={"normal"}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <TextField
                    name={"latitude"}
                    label={"latitude"}
                    value={values.latitude}
                    type="text"
                    fullWidth
                    required={true}
                    onChange={handleChange}
                    variant={"outlined"}
                    margin={"normal"}
                  />
                </Grid>{" "}
                <Grid item xs={3}>
                  <TextField
                    name={"longitude"}
                    label={"longitude"}
                    value={values.longitude}
                    type="text"
                    fullWidth
                    required={true}
                    onChange={handleChange}
                    variant={"outlined"}
                    margin={"normal"}
                  />
                </Grid>
              </Grid>
              <Grid container direction={"column"}>
                <Grid item xs={6}>
                  <TextField
                    name="description"
                    label={"Description"}
                    value={values.description}
                    onChange={handleChange}
                    rows={4}
                    multiline
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    {"Save"}
                  </Button>
                </Grid>
                <Grid item xs={2} className={classes.root}>
                  <Button
                    variant="contained"
                    type="reset"
                    onClick={handleReset}
                  >
                    {"Reset"}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        )}
      />
    </div>
  );
}
