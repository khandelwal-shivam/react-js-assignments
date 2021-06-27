import "./songform.css";
import { useFormik } from "formik";
import Axios from "axios";
import { v4 as uuid } from "uuid";
import { useHistory } from "react-router-dom";

const SongForm = () => {
  const addedSong = false;
  const history = useHistory();
  const validate = (values) => {
    const errors = {};

    if (!values.movie) {
      errors.movie = "Required";
    }

    if (!values.title) {
      errors.title = "Required";
    }

    if (!values.length) {
      errors.length = "Required";
    }

    if (!values.singer) {
      errors.singer = "Required";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      id: null,
      movie: "",
      title: "",
      length: "",
      singer: "",
    },
    validate,
    onSubmit: (values) => {
      values["id"] = uuid();
      Axios.post("http://localhost:4000/songlist", values)
        .then((resp) => {
          console.log("Successfully Added Song");
          history.push("/songs");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  return (
    <section className="song-form">
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="input-group">
          <label htmlFor="movie">Movie</label>
          <input
            id="movie"
            name="movie"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.movie}
          />
          {formik.errors.movie ? (
            <div className="validation-error">{formik.errors.movie}</div>
          ) : null}
        </div>
        <div className="input-group">
          <label htmlFor="title">Song Title</label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          {formik.errors.title ? (
            <div className="validation-error">{formik.errors.title}</div>
          ) : null}
        </div>
        <div className="input-group">
          <label htmlFor="length">Song length</label>
          <input
            id="length"
            name="length"
            type="time"
            onChange={formik.handleChange}
            value={formik.values.length}
          />
          {formik.errors.length ? (
            <div className="validation-error">{formik.errors.length}</div>
          ) : null}
        </div>
        <div className="input-group">
          <label htmlFor="singe">Singer</label>
          <input
            id="singer"
            name="singer"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.singer}
          />
          {formik.errors.singer ? (
            <div className="validation-error">{formik.errors.singer}</div>
          ) : null}
        </div>

        <button className="btn submit-btn" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default SongForm;
