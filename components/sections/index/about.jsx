// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Our works attract thousands and thousands of people"
					preTitle=""
					subTitle="After releasing our debut application, No Name Bot, in 2020, we embarked on a journey of continuous development, working on numerous projects. As a result, our products have gained significant popularity, becoming a go-to choice for many users who now rely on them regularly."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="https://cdn.nnsvn.me/botapp/img/showcase/leaderboard.png" alt="Discord Leaderboard"/>
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title=""
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="We are committed to crafting our products with the most advanced technologies and in strict adherence to industry guidelines. Moreover, we actively prioritize customer feedback, constantly seeking ways to enhance and optimize the usability of our products."
						/>
						<BadgesBlock 
							title="" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="laptop"
							copy="We are always enthusiastic about experimentation, which can lead us to either catastrophic disasters or incredible successes. Embracing risks and learning from our experiences is an integral part of our journey."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'User Research', 		type: 'fad' },
	{ key: 'window', 			name: 'Design Systems', 	type: 'fad' },
	{ key: 'layer-plus', 		name: 'Experimenting', 	type: 'fad' },
	{ key: 'cubes', 			name: 'Deployment', 	type: 'far' },
	{ key: 'qrcode', 			name: 'Digital Strategy', 	type: 'fad' },
	{ key: 'solar-system', 		name: 'Operations', 		type: 'fad' },
]