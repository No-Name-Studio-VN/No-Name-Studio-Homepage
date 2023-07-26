import Color 	from '../../components/utils/page.colors.util'
import Looking 		from '../../components/sections/index/looking'

import colors 		from '../../content/jobs/_colors.json'
import settings 	from '../../content/_settings.json'

//
export default function Jobs({}) {
	return (
		<>	
			<Color colors={colors} />
			<Looking />
		</>
	)
}