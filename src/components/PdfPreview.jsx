import React from 'react';
import styled from 'styled-components';

export const PdfPreview = () => {
	return (
		<PdfPreviewContainer>
			<p>PdfPreview</p>
		</PdfPreviewContainer>
	);
};

const PdfPreviewContainer = styled.div`
	width: 80%;
	flex: 1;
	margin: 2rem 0;
	border: 1px solid lightgray;
	border-radius: 0.3rem;
	display: flex;
	align-items: center;
	justify-content: center;

	p {
		font-size: 1.5rem;
		color: gray;
	}
`;
