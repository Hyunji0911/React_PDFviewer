import './App.css';
import styled from 'styled-components';
import { MenuBar } from './components/MenuBar';
import { PdfPreview } from './components/PdfPreview';

function App() {
	return (
		<>
			<Container>
				<MenuBar />
				<PdfPreview />
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
