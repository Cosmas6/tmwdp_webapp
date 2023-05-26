import React, { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useForm, Controller } from "react-hook-form";
import "../../stylesheets/InstSections/create.scss";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const CMFormCreate = (props) => {
  console.log(props.readingLink);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitted },
  } = useForm();

  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState("");
  const [loading, setLoading] = useState(false);
  const [prevData, setPrevData] = useState([]);
  console.log(prevData);

  useEffect(() => {
    const token = cookies.get("TOKEN");
    const configuration = {
      method: "get",
      url: "https://nodejs.tmwdp.co.ke/login/currentUser",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(configuration)
      .then((result) => {
        const userResult =
          `${result.data.userFirstName}` + ` ` + `${result.data.userLastName}`;
        setUserInfo(userResult);
      })
      .catch((error) => {
        //initialize error
        error = new Error();
      });

    const configuration1 = {
      method: "get",
      url: props.readingLink,
    };

    axios(configuration1)
      .then((result) => {
        setPrevData(result.data);
      })
      .catch((error) => {
        //initialize error
        error = new Error();
      });
  }, []);

  // This function will handle the submission.
  const onSubmit = async (data, e) => {
    setLoading(true);
    e.preventDefault();
    const output = {
      ...data,
      User: userInfo,
    };
    // When a post request is sent to the create url, we'll add a new record to the database.

    await fetch(props.fetchLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(output),
    })
      .then((result) => {
        setLoading(false);
        if (result.status == 200) {
          document.getElementById(
            "Status_Div"
          ).innerHTML = `<span style="color:green;">Data Submitted successfully</span>`;
        } else {
          document.getElementById(
            "Status_Div"
          ).innerHTML = `<span style="color:red;">Data not Submitted</span>`;
        }
      })
      .catch((error) => {
        setLoading(false);
        window.alert(error);
        return;
      });

    // navigate(props.dataLink);
  };

  return (
    <div className="CM_Create_Container container-fluid">
      <div className="row">
        <div className="col-12">
          <form
            className="form-container card"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1>{props.cmName}</h1>
            <div className="Crack_Meter_Input daily-report-form-flex">
              <TextField
                id="crack-meter"
                label="Crack Meter"
                type="number"
                defaultValue={props.defaultValue}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{ readOnly: true }}
                className="crack-meter"
                {...register("CrackMeter", { required: true })}
              />
            </div>
            <div className="Date_Input daily-report-form-flex">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Controller
                  control={control}
                  name="DateOfReading"
                  defaultValue={new Date()}
                  render={({ field: { onChange, value } }) => (
                    <DesktopDatePicker
                      label="Date Of Reading"
                      inputFormat="dd/MMM/yyyy"
                      disableMaskedInput
                      value={value}
                      onChange={onChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  )}
                />
              </LocalizationProvider>
            </div>

            <div className="X-group">
              <table className="table table-bordered daily-report-form-flex">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>X1</th>
                    <th>X2</th>
                  </tr>
                </thead>
                <tbody>
                  {prevData.map((item, index) => {
                    const dateString = new Date(String(item.DateOfReading));
                    const enUSFormatter = new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    });
                    return (
                      <tr>
                        <td>{[enUSFormatter.format(dateString)]}</td>
                        <td>{item.X1}</td>
                        <td>{item.X2}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <TextField
                id="X1"
                label="X1"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                className="X1 daily-report-form-flex"
                {...register("X1", { required: true })}
              />
              <TextField
                id="X2"
                label="X2"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                className="X2 daily-report-form-flex"
                {...register("X2", { required: true })}
              />
            </div>

            <div className="Y-group">
              <table className="table table-bordered daily-report-form-flex">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Y1</th>
                    <th>Y2</th>
                  </tr>
                </thead>
                <tbody>
                  {prevData.map((item, index) => {
                    const dateString = new Date(String(item.DateOfReading));
                    const enUSFormatter = new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    });
                    return (
                      <tr>
                        <td>{[enUSFormatter.format(dateString)]}</td>
                        <td>{item.Y1}</td>
                        <td>{item.Y2}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <TextField
                id="Y1"
                label="Y1"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                className="Y1 daily-report-form-flex"
                {...register("Y1", { required: true })}
              />
              <TextField
                id="Y2"
                label="Y2"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                className="Y2 daily-report-form-flex"
                {...register("Y2", { required: true })}
              />
            </div>

            <div className="Z-group">
              <table className="table table-bordered daily-report-form-flex">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Z1</th>
                    <th>Z2</th>
                  </tr>
                </thead>
                <tbody>
                  {prevData.map((item, index) => {
                    const dateString = new Date(String(item.DateOfReading));
                    const enUSFormatter = new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    });
                    return (
                      <tr>
                        <td>{[enUSFormatter.format(dateString)]}</td>
                        <td>{item.Z1}</td>
                        <td>{item.Z2}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <TextField
                id="Z1"
                label="Z1"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                className="Z1 daily-report-form-flex"
                {...register("Z1", { required: true })}
              />
              <TextField
                id="Z2"
                label="Z2"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                className="Z2 daily-report-form-flex"
                {...register("Z2", { required: true })}
              />
            </div>
            <div className="form-group daily-report-form-flex">
              <div id="Status_Div"></div>
              <button
                className="submit-button daily-report-form-block"
                type="submit"
              >
                {loading ? (
                  <div className="Loading_Div_Buttons">
                    <TailSpin
                      height="30"
                      width="40"
                      color="#ffffff"
                      ariaLabel="tail-spin-loading"
                      radius="1"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    />
                  </div>
                ) : (
                  <span className="submit-span">Submit</span>
                )}
              </button>
            </div>
            {/* <div className="view-data daily-report-form-flex">
              <Link className="submit-button" to={props.dataLink}>
                View Data
              </Link>
            </div>
            <div className="view-graph daily-report-form-flex">
              <Link className="submit-button" to={props.graphLink}>
                View Graph
              </Link>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CMFormCreate;
