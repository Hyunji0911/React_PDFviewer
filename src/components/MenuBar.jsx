import React from 'react';
import styled from 'styled-components';

export const MenuBar = () => {
	const handleSign = () => {
		console.log('sign');
	};

	const handleDownload = () => {
		console.log('download');
	};

	const handleUpload = () => {
		console.log('upload');
	};

	return (
		<>
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
			</MenuContainer>
		</>
	);
};

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
		cursor: pointer;

		&:hover {
			background-color: lightgray;
		}
	}
`;

const Sign = styled.div`
	height: auto;
	flex: 1;
	border-right: 1px solid lightgray;
`;

const Download = styled.div`
	height: auto;
	flex: 1;
	border-right: 1px solid lightgray;
`;

const Upload = styled.div`
	height: auto;
	flex: 1;
`;
