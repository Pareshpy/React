import FuseSidePanel from '@fuse/core/FuseSidePanel';
import { memo } from 'react';
import NavigationShortcuts from '../../shared-components/navigation/NavigationShortcuts';

/**
 * The left side layout 3.
 */
function LeftSideLayout3() {
	return (
		<FuseSidePanel className="flex flex-col justify-star items-center py-12 space-y-8">
			<div>
				<NavigationShortcuts
					className="flex shrink"
					variant="vertical"
				/>
			</div>
		</FuseSidePanel>
	);
}

export default memo(LeftSideLayout3);