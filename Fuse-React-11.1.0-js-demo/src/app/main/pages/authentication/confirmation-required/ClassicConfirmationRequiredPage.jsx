import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Mail from "/public/assets/animation/Mail.json";
import Lottie from 'lottie-react';
import { useState, useEffect } from 'react';
import axios from 'axios';
/**
 * The classic confirmation required page.
 */
function ClassicConfirmationRequiredPage() {

	const [magicToken, setMagicToken] = useState('');
	useEffect(() => {
		if (typeof sessionStorage !== "undefined") {
			const magic_token = sessionStorage.getItem('magic_token');
			// console.log(magic_token);
			setMagicToken(magic_token);
		}
	}, []);
	const checkLogin = async () => {
		if (magicToken) {
			axios.post('https://bend.logiclane.tech/api/CheckLogin', { magic_token: magicToken })
				.then(response => {
					if (response.data) {
						console.log(response.data)
					}
				}).catch(error => {
					console.error(error.message)
				})
		}
	}
	useEffect(() => {
		checkLogin();

		const intervalId = setInterval(() => {
			checkLogin();
		}, 3000);

		return () => clearInterval(intervalId);
	}, [magicToken]);

	return (
		<div className="flex min-w-0 flex-auto flex-col-reverse items-center sm:justify-center">
			<Paper className="flex items-center justify-center min-h-full w-full rounded-0 px-16 py-32 sm:min-h-auto sm:w-auto sm:rounded-xl sm:p-48 sm:shadow-3 md:w-full md:max-w-md">
				<div className="mx-auto w-full max-w-fit sm:mx-0 sm:w-360">
					<div className="grid grid-cols-1 divide-y ">
						<div>
							<div className="flex items-center justify-center">
								<Lottie animationData={Mail} style={{ height: '150px', width: '150px' }} />
							</div>
							<Typography className="flex items-center justify-center mt-16 text-3xl font-bold leading-tight text-blue-700 mb-28">
								Confirm Email
							</Typography>

						</div>

						<Typography className='pt-20 text-lg flex items-center justify-center text-center'>
							Login Link has been sent to your Email. Please open your mail and click the link to login.
						</Typography>
					</div>

					<div className="flex items-center justify-center">
						<Typography className="flex items-center p-6 justify-center mt-32 text-l font-400 text-white bg-[#685DD8] rounded tracking-tight sm:w-208">
							Resend Email
						</Typography>
					</div>

					<Typography className='pt-20 text-lg flex items-center justify-center'>
						Having a problem? Sign in with OTP instead.
					</Typography>

					<div className="flex items-center justify-center">
						<Typography className="flex items-center p-6 justify-center mt-16 text-l font-400 text-white bg-[#685DD8] rounded tracking-tight sm:w-208">
							Send OTP
						</Typography>
					</div>

					{/* <Typography
						className="mt-32 text-md font-medium align-center self-center text-center"
						color="text.secondary"
					>
						<span>Return to</span>
						<Link
							className="text-primary-500 ml-4 hover:underline"
							to="/pages/authentication/sign-in/classic"
						>
							Sign In
						</Link>
					</Typography> */}
				</div>
			</Paper>
		</div>
	);
}

export default ClassicConfirmationRequiredPage;
