// Section structure
import Section 		from '../../structure/section';
import Container 	from '../../structure/container';

// Specing util
import Spacing 		from '../../utils/spacing.util';

// Section general blocks
import SectionGridBg from '../../blocks/section.grid.block'
import SectionTitle from '../../blocks/section.title.block'

// Section scss
import looking 		from '../../../styles/sections/index/looking.module.scss';
import section 		from '../../../styles/blocks/section.title.module.scss'

import css 			from '../../../styles/sections/projects/featured.module.scss'

import button 		from '../../../styles/blocks/button.module.scss';

import content		from '../../../content/index/hero.json'

/**
 * Section: Looking
 * Declare your employment intentions 🚀
 * 
 * @returns {jsx} <Looking />
 */
export default function Looking() {
	return (
		<Section classProp={`${looking.section} borderBottom`}>	
			<Container classProp={`${section.title} ${looking.container}`} spacing={['verticalXXXLrg']}>
				<h3 className={looking.json}><span className={looking.highlight}>Did we miss something?</span></h3>
				<p className="subtitle">If you don't see your specialty listed, but you have years of professional experience, are really talented at what you do, and possess a set of skills which would help us create better products and experiences for our customers, we hope you'll apply below.</p>
				{/* <h3 className={looking.json}>Senior : &#123;</h3>
				<h3 className={looking.jsonSub}><span className={looking.highlight}>Front End Engineer</span>,</h3>
				<h3 className={looking.jsonSub}><span className={looking.highlight2}>User Experience Designer</span></h3>
				<h3 className={looking.json}>&#125;</h3>
				<h2>Senior <span className={looking.highlight}>User Experience</span> Designer</h2>
				<p className="subtitle">with a focus on Product Design.</p> */}
				
				<button	className={`button ${button.primary}`}
							onClick={ () => window.location = content.buttons.primary.url } >
						{content.buttons.primary.title}
					</button>

			</Container>
		</Section>
	)
}