import React from 'react';
import { Link/*, useParams */} from 'react-router-dom';
import MiniCard from '../shared/mini-card/mini-card';
 
import TVSHOW_DETAIL_MOCK from '../../fixtures/tvshow-detail.json';

import RatingIcon from '../shared/rating-icon/rating-icon';

import './tvshow-detail-view.css';

function CharacterMiniCard({ character }) {
	const {
		imagePath,
		name,
		actorName
	} = character;

	return (
		<MiniCard
			mediaUrl={`https://image.tmdb.org/t/p/w138_and_h175_face/${imagePath}`}
			title={actorName}
			subtitle={name}
		/>
	);
}

function SeasonMiniCard({ season, tvShowId }) {
	const {
		posterPath,
		seasonNumber,
		airDate,
		episodesCount
	} = season;

	return (
		<Link to={`/tvshow/${tvShowId}/season/${seasonNumber}`}>
			<MiniCard 
				mediaUrl={`https://image.tmdb.org/t/p/w130_and_h195_bestv2${posterPath}`}
				title={`Season ${seasonNumber + 1}`}
				subtitle={<span>({airDate})<br/>{episodesCount} Episodes</span>}
			/>
		</Link>
	);
}

export default function TvShowDetailView() {
	const { tvShowId } = useParams();
	const [tvShow, setTvShow] = useState(undefined);
	const { apiClient } = useAppContext();

	useEffect(() => {
		apiClient.query({
			query: `
				query {
					getTvShowDetails(tvShowId: ${parseInt(tvShowId, 10)}) {
						id
						name
						posterPath
						firstAirDate
						overview
						votesAverage
						seasons {
							seasonNumber
							posterPath
							airDate
							episodesCount
						}
						cast {
							id
							imagePath
							name
							actorName
						}
					}
				}
			`
		})
		.then(result => {
			if (result.errors) {
				return console.error('Error getting data from server:', result.erros);
			}
			setTvShow(result.data.getTvShowDetails);
		})
	}, []);
	
	if (!tvShow) return null;
	
	const {
		id,
		name,
		posterPath,
		firstAirDate,
		overview,
		votesAverage,
		seasons = [],
		cast = []
	} = tvShow;

	return (
		<section className="tvshow-detail">
			<div className="tvshow-detail__main-info">
				<section className="tvshow-detail__poster">
					<img 
						className="tvshow-detail__poster" 
						src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${posterPath}`} 
						alt={name}
					/>
				</section>
				<section className="tvshow-detail__info-container">
					<div className="tvshow-detail__title">
						<h1 className="tvshow-detail__name">{name}</h1>
						<span className="tvshow-detail__year">({(new Date(firstAirDate).toDateString())})</span>
						<RatingIcon 
							className="tvshow-detail__rating"
							ratingValue={votesAverage}
							size={RatingIcon.sizes.BIG}
						/>
					</div>
					<h2 className="tvshow-detail__overview-title">Overview</h2>
					<p className="tvshow-detail__overview-description">{overview}</p>
				</section>
			</div>

			<hr className="tvshow-detail__separator"/>

			<section className="tvshow-detail__cast">
				<h2 className="tvshow-detail__cast-title">Tv Show Cast</h2>
				<div className="tvshow-detail__characters">
					{cast.map(character => (
						<CharacterMiniCard key={character.id} character={character} />
					))}
				</div>
			</section>

			<hr className="tvshow-detail__separator"/>

			<section className="tvshow-detail__seasons-container">
				<h2 className="tvshow-detail__seasons-title">Seasons</h2>
				<div className="tvshow-detail__seasons-list">
					{seasons.map(season => (
						<SeasonMiniCard key={season.seasonNumber} season={season} tvShowId={id} />
					))}
				</div>
			</section>
		</section>
	)
}
