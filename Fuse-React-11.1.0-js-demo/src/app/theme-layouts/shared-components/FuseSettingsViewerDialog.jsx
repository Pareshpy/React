import { useState } from 'react';
import clsx from 'clsx';
import Button from '@mui/material/Button';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Dialog from '@mui/material/Dialog';
import { selectFuseCurrentSettings } from '@fuse/core/FuseSettings/fuseSettingsSlice';
import FuseHighlight from '@fuse/core/FuseHighlight';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import qs from 'qs';
import Typography from '@mui/material/Typography';
import { useAppSelector } from 'app/store/hooks';

/**
 * The settings viewer dialog.
 */
function FuseSettingsViewerDialog(props) {
	const { className = '' } = props;
	const [openDialog, setOpenDialog] = useState(false);
	const settings = useAppSelector(selectFuseCurrentSettings);
	const jsonStringifiedSettings = JSON.stringify(settings);
	const queryString = qs.stringify({
		defaultSettings: jsonStringifiedSettings,
		strictNullHandling: true
	});

	function handleOpenDialog() {
		setOpenDialog(true);
	}

	function handleCloseDialog() {
		setOpenDialog(false);
	}

	return (
		<div className={clsx('', className)}>
			<Button
				variant="contained"
				color="secondary"
				className="w-full"
				onClick={handleOpenDialog}
				startIcon={<FuseSvgIcon>heroicons-outline:code-bracket</FuseSvgIcon>}
			>
				View settings as json/query params
			</Button>

			<Dialog
				open={openDialog}
				onClose={handleCloseDialog}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle>Fuse Settings Viewer</DialogTitle>
				<DialogContent>
					<Typography className="mb-16 mt-24 text-15 font-bold">JSON</Typography>

					<FuseHighlight
						component="pre"
						className="language-json"
					>
						{JSON.stringify(settings, null, 2)}
					</FuseHighlight>

					<Typography className="mb-16 mt-24 text-15 font-bold">Query Params</Typography>

					{queryString}
				</DialogContent>
				<DialogActions>
					<Button
						color="secondary"
						variant="contained"
						onClick={handleCloseDialog}
					>
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default FuseSettingsViewerDialog;
