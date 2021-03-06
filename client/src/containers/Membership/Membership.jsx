import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
	Container,
	Typography,
	TextField,
	Select,
	MenuItem,
	Button,
	Modal,
} from "@material-ui/core";
import { useStyles } from "./Membership.elements";
import { IoCloseCircleOutline } from "react-icons/io5";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { firebaseInit } from "../../firebase";
import { getUUID } from "../../utils";

import membershipImg from "../../assets/img/membership.svg";
import { SpinnerBook } from "../../components";

const Membership = () => {
	const classes = useStyles();
	const [spinner, setSpinner] = useState(true);
	const [name, setName] = useState("");
	const [dob, setDob] = useState("");
	const [sex, setSex] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	// eslint-disable-next-line
	const [error, setError] = useState("");
	const [disabledButton, setDisabledButton] = useState(true);
	const [modal, setModal] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setSpinner(false);
		}, 2300);
	}, []);

	useEffect(() => {
		if ((name !== "") & (dob !== "") & (sex !== "") & (phoneNumber !== "")) {
			setDisabledButton(false);
		}
	}, [name, dob, sex, phoneNumber, disabledButton]);

	const handleSubmit = (event) => {
		event.preventDefault();
		setTimeout(() => {
			setModal(true);
		}, 500);

		firebaseInit
			.firestore()
			.collection("members")
			.add({
				id: getUUID(),
				dateCreate: new Date(),
				phoneNumber: phoneNumber,
				name: name,
				emailAddress: email,
				dob: dob,
				sex: sex,
			})
			.then()
			.catch(function (error) {
				console.error("Error writing document: ", error);
			});
	};

	const handleFeedbackContinueButton = () => {
		setModal(false);
		setDisabledButton(true);
		setName("");
		setDob("");
		setSex("");
		setPhoneNumber("");
		setEmail("");
	};

	return (
		<div className={classes.membership}>
			{spinner ? (
				<SpinnerBook />
			) : (
				<>
					<Modal
						open={modal}
						onClose={() => {
							setModal(false);
							setDisabledButton(true);
							setName("");
							setDob("");
							setSex("");
							setPhoneNumber("");
							setEmail("");
						}}
						aria-labelledby="simple-modal-title"
						aria-describedby="simple-modal-description"
						className={classes.modal}
					>
						<Container maxWidth="lg" className={classes.modalComponent}>
							<span className={classes.icon} onClick={() => setModal(false)}>
								<IoCloseCircleOutline />
							</span>
							<Typography
								variant="h4"
								className={`${classes.headerText} ${classes.headerTextModal}`}
							>
								NOOR Coffee & Tea
							</Typography>
							<p className={classes.description}>
								????ng k?? th??nh vi??n th??nh c??ng. C???m ??n b???n!
							</p>
							<div className={classes.buttonGroup}>
								<Link to="/">
									<Button variant="contained" className={classes.button}>
										?????n trang ch???
									</Button>
								</Link>
								<Button
									variant="contained"
									className={`${classes.button} ${classes.secondButtonModal}`}
									onClick={handleFeedbackContinueButton}
								>
									Ti???p t???c ????ng k??
								</Button>
							</div>
						</Container>
					</Modal>
					<Container maxWidth="lg" className={classes.container}>
						<div className={classes.row}>
							<div className={classes.column}>
								<div className={classes.textWrapper}>
									<Typography variant="h4" className={classes.headerText}>
										????ng k?? th??nh vi??n
									</Typography>
									<p className={classes.description}>
										H??y chia s??? th??ng tin v???i ch??ng t??i, nhi???u ??u ????i h???p d???n
										??ang ch??? ????n b???n.
									</p>
									<p id="category" className={classes.label}>
										H??? v?? t??n: (*)
									</p>
									<TextField
										id="outlined-basic1"
										variant="outlined"
										placeholder={name}
										onChange={(event) => setName(event.target.value)}
									/>
									<p id="category" className={classes.label}>
										Ng??y sinh: (*)
									</p>
									<TextField
										id="outlined-basic2"
										variant="outlined"
										placeholder={dob}
										type="date"
										onChange={(event) => setDob(event.target.value)}
									/>
									<p id="category" className={classes.label}>
										Gi???i t??nh: (*)
									</p>
									<Select
										labelId="demo-simple-select-helper-label"
										id="demo-simple-select-helper3"
										value={sex}
										onChange={(event) => setSex(event.target.value)}
										className={classes.selectCategory}
										variant="outlined"
									>
										<MenuItem value="Nam">Nam</MenuItem>
										<MenuItem value="N???">N???</MenuItem>
										<MenuItem value="Gi???i t??nh kh??c">Gi???i t??nh kh??c</MenuItem>
									</Select>
									<p id="category" className={classes.label}>
										Email: (*)
									</p>
									<TextField
										id="outlined-basic3"
										variant="outlined"
										placeholder={email}
										type="email"
										onChange={(event) => setEmail(event.target.value)}
									/>
									<p id="category" className={classes.label}>
										S??? ??i???n tho???i: (*)
									</p>
									<TextField
										id="outlined-basic4"
										variant="outlined"
										placeholder={phoneNumber}
										onChange={(event) => setPhoneNumber(event.target.value)}
									/>
									<Button
										variant="contained"
										className={classes.button}
										onClick={handleSubmit}
										disabled={disabledButton ? true : false}
									>
										????ng k??
									</Button>
									{error && (
										<p className={`${classes.label} ${classes.error}`}>
											L???i: Vui l??ng nh???p n???i dung ??? m???c: {error}
										</p>
									)}
								</div>
							</div>
							<div className={classes.column}>
								<div className={classes.imgWrapper}>
									<LazyLoadImage
										src={membershipImg}
										alt="img"
										className={classes.img}
										effect="blur"
									/>
								</div>
							</div>
						</div>
					</Container>
				</>
			)}
		</div>
	);
};

export default Membership;
