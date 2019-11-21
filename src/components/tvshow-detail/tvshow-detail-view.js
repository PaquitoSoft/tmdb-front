import React from 'react';

export default function TvShowDetailView({ tvShow = {} }) {
	const {
		name = 'Rick and Morty',
		posterPath = '/qJdfO3ahgAMf2rcmhoqngjBBZW1.jpg',
		firstAirDate = '2003-12-02',
		rating = 78,
		overview = "Rick is a mentally-unbalanced but scientifically-gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school."
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
						<span className="tvshow-detail__year">{firstAirDate}</span>
						<div className="tvshow-detail__rating">{rating}</div>
					</div>
					<h2 className="tvshow-detail__overview-title">Overview</h2>
					<p className="tvshow-detail__overview-description">{overview}</p>
				</section>
			</div>
		</section>
	)
}
