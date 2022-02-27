import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Typography, TextField, Button } from "@material-ui/core";
import { useStyles } from "./Modal.elements";
import { firebaseInit } from "../../firebase";
import { getUUID } from "../../utils";
import { setModalBaoGia } from "../../app/slice/fetchApi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ModalContainer = () => {
  const [open, setOpen] = React.useState(true);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [comment, setComment] = React.useState("");
  const [disabled, setDisabled] = useState(true);
  const [errors, setErrors] = useState([]);
  const [errorString, setErrorString] = useState("");
  const [success, setSuccess] = useState(false);
  const modalBaoGia = useSelector((state) => state.api.modalBaoGia);
  const dispatch = useDispatch();

  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const handleOpen = () => {
    setOpen(true);
  };
  useEffect(() => {
    if (modalBaoGia === true) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [modalBaoGia]);

  const handleClose = () => {
    setOpen(false);
    setSuccess(false);
    const action = setModalBaoGia(false);
    dispatch(action);
    setName("");
    setEmail("");
    setPhoneNumber("");
    setComment("");
    setDisabled(true);
    setErrors([]);
  };
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  useEffect(() => {
    if (errors) {
      const newErrorsString = errors.toString();
      setErrorString(newErrorsString);
    }
  }, [errors]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = [...errors];
    if (name === "") {
      newErrors.push("Họ và tên");
    }
    if (phoneNumber === "") {
      newErrors.push("Số điện thoại");
    }
    setErrors(newErrors);

    firebaseInit
      .firestore()
      .collection("tuvan")
      .add({
        id: getUUID(),
        dateCreate: new Date(),
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        comment: comment,
      })
      .then(() => {
        setSuccess(true);
        setName("");
        setEmail("");
        setPhoneNumber("");
        setComment("");
        setDisabled(true);
        setErrors([]);
      })
      .catch(function (error) {
        setErrorString("Error: ", error);
        console.error("Error writing document: ", error);
      });
  };

  useEffect(() => {
    if (name !== "" && phoneNumber !== "") {
      setDisabled(false);
    }
  }, [name, phoneNumber]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.modal}>
        <div className={classes.closeButton} onClick={handleClose}>
          <AiOutlineCloseCircle />
        </div>
        <Typography variant="h3">ĐĂNG KÝ NHẬN BÁO GIÁ</Typography>
        <div className={classes.form}>
          <p id="category" className={classes.label}>
            Họ và tên: (*)
          </p>
          <TextField
            id="outlined-basic1"
            variant="outlined"
            placeholder={name}
            onChange={(event) => setName(event.target.value)}
            fullWidth
          />
          <p id="category" className={classes.label}>
            Số điện thoại: (*)
          </p>
          <TextField
            id="outlined-basic4"
            variant="outlined"
            placeholder={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            fullWidth
          />
          <p id="category" className={classes.label}>
            Email:
          </p>
          <TextField
            id="outlined-basic3"
            variant="outlined"
            placeholder={email}
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            fullWidth
          />
          <p id="comment" className={classes.label}>
            Nội dung:
          </p>
          <TextField
            aria-label="minimum height"
            rows={4}
            multiline
            value={comment}
            onChange={handleCommentChange}
            className={classes.textarea}
            variant="outlined"
            placeholder="Nội dung...."
            fullWidth
          />
          <Button
            variant="contained"
            className={classes.button}
            onClick={handleSubmit}
            disabled={disabled}
          >
            Gửi yêu cầu
          </Button>
          {errorString !== "" && (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p className={`${classes.label} ${classes.error}`}>
                Lỗi: Vui lòng nhập nội dung ở mục: {errorString}
              </p>
            </div>
          )}
          {success && (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Typography
                variant="h4"
                color="primary"
                className={`${classes.label} `}
              >
                Đăng ký nhận báo giá thành công. Nhân viên sẽ liên hệ bạn trong
                vòng 24 giờ.
              </Typography>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ModalContainer;
