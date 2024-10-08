import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

/**
 * The notification icon.
 */
function NotificationIcon(props) {
	const { value } = props;
	switch (value) {
		case 'error': {
			return (
				<FuseSvgIcon
					className="mr-8 opacity-75"
					color="inherit"
					size={20}
				>
					heroicons-outline:minus-circle
				</FuseSvgIcon>
			);
		}
		case 'success': {
			return (
				<FuseSvgIcon
					className="mr-8 opacity-75"
					color="inherit"
					size={20}
				>
					heroicons-outline:check-circle
				</FuseSvgIcon>
			);
		}
		case 'warning': {
			return (
				<FuseSvgIcon
					className="mr-8 opacity-75"
					color="inherit"
					size={20}
				>
					heroicons-outline:exclamation-circle
				</FuseSvgIcon>
			);
		}
		case 'info': {
			return (
				<FuseSvgIcon
					className="mr-8 opacity-75"
					color="inherit"
					size={20}
				>
					heroicons-outline:information-circle
				</FuseSvgIcon>
			);
		}
		default: {
			return null;
		}
	}
}

export default NotificationIcon;
