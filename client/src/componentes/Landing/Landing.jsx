import { Link } from "react-router-dom";

export default function LandingPage() {
	return (
		<div class='background'>
			<div class='title'>
				<Link to='/home'>
					<button class='title' type='submit'>
						ENTER
					</button>
				</Link>
			</div>
		</div>
	);
} 