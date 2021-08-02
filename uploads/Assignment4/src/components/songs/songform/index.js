import "./songform.css";
import { useFormik } from "formik";
import Axios from "axios";
import { v4 as uuid } from "uuid";
import { useHistory } from "react-router-dom";
import { Grid } from '@material-ui/core';
import * as Yup from 'yup';
const SongForm = () => {
  const history = useHistory();
  
  const validationSchema = Yup.object({
    movie: Yup.string().required("Required!!!"),
    title: Yup.string().required("Required!!!"),
    length: Yup.string().required("Required!!!"),
    singer: Yup.string().required("Required!!!")
  });

  const initialValues = {
    movie: "",
    title: "",
    length: "",
    singer: "",
  }
  const onSubmit =  (values) => {
    console.log("values from formik ",values);
    values["id"] = uuid();
    Axios.post("http://localhost:30001/songs", values)
      .then((resp) => {
        history.push("/songs");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });
  console.log("touched",formik.touched);
  console.log("errors",formik.errors);
  return (
    <section className="song-form">
      <form className="form" onSubmit={formik.handleSubmit}>
        <Grid container className="input-group" >
          <Grid item xs = {3}><label htmlFor="movie">Movie</label></Grid>
          <Grid item xs = {5}>
            <input
            id="movie"
            name="movie"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.movie}
            onBlur = {formik.handleBlur}
          /></Grid>
          <Grid item xs = {4}>
          {formik.errors.movie && formik.touched.movie ? (
            <div className="validation-error flex">{formik.errors.movie}</div>
          ) : null}
          </Grid>
        </Grid>
        <Grid container className="input-group" >
          <Grid item xs = {3}><label htmlFor="title">Song Title</label></Grid>
          <Grid item xs = {5}>
            <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
            onBlur = {formik.handleBlur}
          /></Grid>
          <Grid item xs = {4}>
          {formik.errors.title && formik.touched.title ? (
            <div className="validation-error flex">{formik.errors.title}</div>
          ) : null}
          </Grid>
        </Grid>
        <Grid container  className="input-group">
          <Grid item xs = {3}><label htmlFor="length">Song length</label></Grid>
          <Grid item xs = {5}>
            <input
            id="length"
            name="length"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.length}
            onBlur = {formik.handleBlur}
          /></Grid>
          <Grid item xs = {4}>
          {formik.errors.length && formik.touched.length ? (
            <div className="validation-error flex">{formik.errors.length}</div>
          ) : null}
          </Grid>
        </Grid>
        <Grid container  className="input-group">
          <Grid item xs = {3}><label htmlFor="singe">Singer</label></Grid>
          <Grid item xs = {5}>
            <input
            id="singer"
            name="singer"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.singer}
            onBlur = {formik.handleBlur}
          /></Grid>
          <Grid item xs = {4}>
          {formik.errors.singer && formik.touched.singer ? (
            <div className="validation-error flex">{formik.errors.singer}</div>
          ) : null}
          </Grid>
        </Grid>

        <button className="btn submit-btn" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default SongForm;
