import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';

/**
 * The classic confirmation required page.
 */
function ClassicConfirmationRequiredPage() {
	return (
		<div className="flex min-w-0 flex-auto flex-col items-center sm:justify-center">
			<Paper className="flex items-center justify-center min-h-full w-full rounded-0 px-16 py-32 sm:min-h-auto sm:w-auto sm:rounded-xl sm:p-48 sm:shadow md:w-full md:max-w-2xl">
				<div className=" mx-auto w-full max-w-fit sm:mx-0 sm:w-350">


					<Typography className="flex items-center p-3 justify-center mt-16 text-l font-600 text-green-500 bg-green-100 rounded">
						Login Link has been sent to your Email
					</Typography>
					<Typography className="flex items-center justify-center mt-16 text-3xl font-bold leading-tight ">
						Click the link sent to your email
					</Typography>
					<Typography className="flex items-center justify-center mt-16 font-extrabold">
						Animation
					</Typography>
					<Typography className="flex items-center p-6 justify-center mt-16 text-l font-400 text-white bg-[#685DD8] rounded  tracking-tight">
						Resend Email
					</Typography>
					<div className='pt-32'>
						<Typography className=''>
							Having Problem? sign in with OTP instead
						</Typography>
						<Typography className="flex items-center p-6 justify-center mt-16 text-l font-400 text-white bg-[#685DD8] rounded  tracking-tight">
							Send OTP
						</Typography>
					</div>
					<Typography
						className="mt-32 text-md font-medium"
						color="text.secondary"
					>
						<span>Return to</span>
						<Link
							className="text-primary-500 ml-4 hover:underline"
							to="/pages/authentication/sign-in/classic"
						>
							sign in
						</Link>
					</Typography>
				</div>
			</Paper>
		</div>
	);
}

export default ClassicConfirmationRequiredPage;
