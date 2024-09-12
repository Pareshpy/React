import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import _ from '@lodash';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';
/**
 * Form Validation Schema
 */
const schema = z.object({

});

const defaultValues = {
	username: '',
	password: '',
	remember: true
};

/**
 * The classic sign-in page with password visibility toggle.
 */
function ClassicSignInPage() {
	const { control, formState, handleSubmit, reset } = useForm({
		mode: 'onChange',
		defaultValues,
		resolver: zodResolver(schema)
	});
	const { isValid, dirtyFields, errors } = formState;

	// State to manage password visibility
	const [showPassword, setShowPassword] = React.useState(false);

	const handleClickShowPassword = () => setShowPassword(!showPassword);
	const handleMouseDownPassword = (event) => event.preventDefault();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [magicToken, setMagicToken] = useState('');
	if (typeof sessionStorage !== "undefined") {
		const magic_token = sessionStorage.getItem('magic_token');
	}
	const navigate = useNavigate();

	console.log(username, password);
	function onSubmit() {
		reset(defaultValues);
	}

	const handleLogin = async () => {
		// console.log('pressed')
		if (username && password) {
			// const response = await axios.post('https://bend.logiclane.tech/api/EmailLogin', { username, password });
			axios.post('https://bend.logiclane.tech/api/EmailLogin', { username, password })
				.then(response => {
					if (response.data.magic_token) {
						setMagicToken(response.data.magic_token);
						sessionStorage.setItem('magic_token', response.data.magic_token)
						navigate('/pages/authentication/confirmation-required/classic')
						// console.log(response.data.magic_token)
					}
				}).catch(error => {
					console.error(error.message)
				})
		}
	}

	return (
		<div className="flex min-w-0 flex-auto flex-col items-center sm:justify-center">
			<Paper className="min-h-full w-full rounded-0 px-16 py-32 sm:min-h-auto sm:w-auto sm:rounded-xl sm:p-48 sm:shadow">
				<div className="mx-auto w-full max-w-320 sm:mx-0 sm:w-320">
					<div className='flex justify-center items-center'>
						<h1 className='max-w-lg text-5xl font-semibold leading-relaxed text-gray-600 dark:text-white'>Sweepstakes Admin</h1>
					</div>

					<form
						name="loginForm"
						noValidate
						className="mt-32 flex w-full flex-col justify-center"
						onSubmit={handleSubmit(handleLogin)}
					>
						<Controller
							name="username"
							control={control}
							render={({ field }) => (
								<TextField
									{...field}
									className="mb-24"
									label="Username"
									autoFocus
									type="text"
									// error={!!errors.email}
									// helperText={errors?.email?.message}
									value={username}
									onChange={(e) => setUsername(e.target.value)}
									variant="outlined"
									required
									fullWidth
								/>
							)}
						/>

						<Controller
							name="password"
							control={control}
							render={({ field }) => (
								<FormControl variant="outlined" fullWidth className="mb-24">
									<TextField
										{...field}
										type={showPassword ? 'text' : 'password'}
										label="Password"
										error={!!errors.password}
										helperText={errors?.password?.message}
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										InputProps={{
											endAdornment: (
												<InputAdornment position="end">
													<IconButton
														aria-label="toggle password visibility"
														onClick={handleClickShowPassword}
														onMouseDown={handleMouseDownPassword}
													>
														{showPassword ? <VisibilityOff /> : <Visibility />}
													</IconButton>
												</InputAdornment>
											)
										}}
										variant="outlined"
										required
										fullWidth
									/>
								</FormControl>
							)}
						/>

						<div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between">
							<Controller
								name="remember"
								control={control}
								render={({ field }) => (
									<FormControl>
										<FormControlLabel
											label="Remember me"
											control={
												<Checkbox
													size="small"
													{...field}
												/>
											}
										/>
									</FormControl>
								)}
							/>
						</div>
						{/* <Link to="/pages/authentication/confirmation-required/classic"> */}
						<Button
							variant="contained"
							className={`mt-16 w-full ${isValid ? 'bg-[#00a7ff] hover:bg-[#008bd6] text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
							aria-label="Sign in"
							// disabled={_.isEmpty(dirtyFields) || !isValid}
							type="submit"
							size="large"
						>
							Sign in
						</Button>
						{/* </Link> */}
					</form>
				</div>
			</Paper>
		</div>
	);
}

export default ClassicSignInPage;
