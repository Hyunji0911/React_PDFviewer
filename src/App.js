import './App.css';
import styled from 'styled-components';
import { useState } from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const [selectFile, setSelectFile] = useState();
	const defaultLayoutPluginInstance = defaultLayoutPlugin();
	const [selectPdfFile, setSelectPdfFile] = useState(null);
	const [pdfFileError, setPdfFileError] = useState('');
	const [viewPdf, setViewPdf] = useState(null);

	const fileObj = ['application/pdf'];
	const handleFileChange = (e) => {
		let selectedFile = e.target.files[0];
		if (selectedFile) {
			if (selectedFile && fileObj.includes(selectedFile.type)) {
				let reader = new FileReader();
				reader.readAsDataURL(selectedFile);
				reader.onloadend = (e) => {
					setSelectPdfFile(e.target.result);
					setPdfFileError('');
				};
			} else {
				setSelectPdfFile(null);
				setPdfFileError('Please select valid pdf file');
			}
		} else {
			alert('select pdf file');
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsOpen(!isOpen);
		if (selectPdfFile !== null) {
			setViewPdf(selectPdfFile);
		} else {
			setViewPdf(null);
		}
	};

	const openModalHandler = () => {
		isOpen ? setIsOpen(false) : setIsOpen(true);
	};

	const handleSign = () => {
		console.log('sign');
	};

	const handleDownload = () => {
		console.log('download');
	};

	const handleUpload = () => {
		isOpen ? setIsOpen(false) : setIsOpen(true);
	};

	return (
		<>
			<Container>
				<MenuContainer>
					<Sign onClick={handleSign}>
						<p>Sign PDF</p>
					</Sign>
					<Download onClick={handleDownload}>
						<p>Download PDF</p>
					</Download>
					<Upload onClick={handleUpload}>
						<p>Upload PDF</p>
					</Upload>
					{isOpen ? (
						<ModalBackdrop onClick={openModalHandler}>
							<ModalView onClick={(e) => e.stopPropagation()}>
								{/* <p>Please upload a PDF file</p>
							<input
								type="file"
								onChange={handleChange}></input>

							<ButtonContainer>
								<CancelBtn onClick={openModalHandler}>Cancel</CancelBtn>
								<SubmitBtn>Upload</SubmitBtn>
							</ButtonContainer> */}

								<div className="container">
									<form
										className="form-group"
										onSubmit={handleSubmit}>
										<input
											type="file"
											className="form-control"
											required
											onChange={handleFileChange}
										/>
										{pdfFileError && (
											<div className="error-msg">{pdfFileError}</div>
										)}

										<button
											type="submit"
											className="btn btn-success btn-lg">
											UPLOAD
										</button>
									</form>
								</div>
							</ModalView>
						</ModalBackdrop>
					) : null}
				</MenuContainer>
				<PdfPreviewContainer>
					<div className="pdf-container">
						{viewPdf && (
							<>
								<Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js"></Worker>
								<Viewer fileUrl={viewPdf} />
							</>
						)}
					</div>
				</PdfPreviewContainer>
			</Container>
		</>
	);
}

export default App;

const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

//menubar --start--
const MenuContainer = styled.div`
	width: 80%;
	margin-top: 2rem;
	border: 1px solid lightgray;
	border-radius: 0.3rem;
	display: flex;
	align-items: center;
	justify-content: space-around;

	div {
		display: flex;
		justify-content: center;
		font-size: 0.8rem;
	}
`;

const Sign = styled.div`
	height: auto;
	flex: 1;
	border-right: 1px solid lightgray;

	&:hover {
		background-color: lightgray;
	}
`;

const Download = styled.div`
	height: auto;
	flex: 1;
	border-right: 1px solid lightgray;

	&:hover {
		background-color: lightgray;
	}
`;

const Upload = styled.div`
	height: auto;
	flex: 1;

	&:hover {
		background-color: lightgray;
	}
`;

export const ModalBackdrop = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.4);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 2;
`;

export const ModalView = styled.div.attrs((props) => ({
	role: 'dialog',
}))`
	width: 50%;
	min-height: 200px;
	background-color: white;
	padding: 25px;
	border-radius: 25px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	p {
		margin: 0;
		margin-bottom: 1.2rem;
		width: 253px;
		text-align: center;
		font-size: 1rem;
		font-weight: bold;
	}

	img {
		margin-top: 1.3rem;
		width: 50%;
	}
`;

const ButtonContainer = styled.div`
	margin-top: 2rem;
	display: flex;
	justify-content: space-around;
`;

const CancelBtn = styled.button`
	background-color: lightgray;
	margin-right: 3rem;
`;

const SubmitBtn = styled.button`
	background-color: #7699e6;
	color: white;
`;
//menubar --end--

//PDF preview --start--
const PdfPreviewContainer = styled.div`
	width: 80%;
	flex: 1;
	margin: 2rem 0;
	border: 1px solid lightgray;
	border-radius: 0.3rem;
	display: flex;
	align-items: center;
	overflow-y: scroll;

	p {
		font-size: 1.5rem;
		color: gray;
	}

	div {
		margin-top: 5.5rem;
		width: 100%;
	}
`;
//PDF preview --end--
