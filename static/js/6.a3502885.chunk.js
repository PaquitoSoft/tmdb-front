(this["webpackJsonptmdb-front"]=this["webpackJsonptmdb-front"]||[]).push([[6],{52:function(t,e,a){},56:function(t,e,a){"use strict";function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a.r(e);var r=a(9),s=a(0),o=a.n(s),i=a(8),c=a(7),l=a(3),v=a(44),m=a(16),h=a(15),w=a(11),u=a(43),d=a(48);a(52);function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function _(t){var e=t.character,a=e.imagePath,n=e.name,r=e.actorName;return o.a.createElement(w.a,{className:"tvshow-detail__character-card"},o.a.createElement(w.a.Media,null,o.a.createElement(h.a,{path:a,type:"profile",sizes:"14vw",ratio:.62,alt:r})),o.a.createElement(w.a.Title,null,r),o.a.createElement(w.a.Subtitle,null,n))}function E(t){var e=t.season,a=t.tvShowId,n=e.posterPath,r=e.seasonNumber,s=e.airDate,c=e.episodesCount;return o.a.createElement(i.b,{className:"tvshow-detail__season-card",to:"/tvshow/".concat(a,"/season/").concat(r)},o.a.createElement(w.a,null,o.a.createElement(w.a.Media,null,o.a.createElement(h.a,{path:n,type:"poster",sizes:"14vw",ratio:.59,alt:"Season ".concat(r)})),o.a.createElement(w.a.Title,null,"Season ".concat(r)),o.a.createElement(w.a.Subtitle,null,"(".concat(s,")")),o.a.createElement(w.a.Subtitle,null,"".concat(c," Episodes"))))}a.d(e,"default",(function(){return N}));var f="\n\tquery TvShowDetails($tvShowId: Int!) {\n\t\tgetTvShowDetails(tvShowId: $tvShowId) {\n\t\t\tid\n\t\t\tname\n\t\t\tposterPath\n\t\t\tfirstAirDate\n\t\t\toverview\n\t\t\tvotesAverage\n\t\t\tisFavorite\n\t\t\tseasons {\n\t\t\t\tseasonNumber\n\t\t\t\tposterPath\n\t\t\t\tairDate\n\t\t\t\tepisodesCount\n\t\t\t}\n\t\t\tcast {\n\t\t\t\tid\n\t\t\t\timagePath\n\t\t\t\tname\n\t\t\t\tactorName\n\t\t\t}\n\t\t}\n\t}\n",S="\n\tmutation SaveFavoriteTvShow($tvShowId: Int!) {\n\t\tsaveFavoriteTvShow(tvShowId: $tvShowId)\n\t}\n",b="\n\tmutation RemoveFavoriteTvShow($tvShowId: Int!) {\n\t\tremoveFavoriteTvShow(tvShowId: $tvShowId)\n\t}\n";function N(){var t=Object(c.g)().tvShowId,e=Object(l.b)().apiClient,a=Object(s.useState)(),i=Object(r.a)(a,2),w=i[0],N=i[1],y=Object(v.a)({query:f,params:{tvShowId:parseInt(t,0)}}),O=y.isFetching,g=y.data,I=function(a){var r=a.tvShow,s=a.isFavorite;e.query({query:s?b:S,variables:{tvShowId:r.id}}).then((function(){N(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(a,!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},r,{isFavorite:!s}))})).catch((function(e){console.error("Error setting favorite value for TvShow ".concat(t))}))};if(O)return o.a.createElement(m.a,null);if(!g)return null;var j=w||g.getTvShowDetails,P=j.id,D=j.name,T=j.posterPath,F=j.firstAirDate,k=j.overview,$=j.votesAverage,z=j.isFavorite,A=j.seasons,C=void 0===A?[]:A,q=j.cast,J=void 0===q?[]:q;return o.a.createElement("section",{className:"tvshow-detail"},o.a.createElement("div",{className:"tvshow-detail__main-info"},o.a.createElement("section",{className:"tvshow-detail__poster"},o.a.createElement(h.a,{className:"tvshow-detail__poster",path:T,type:"poster",sizes:"41vw",ratio:.68,alt:D})),o.a.createElement("section",{className:"tvshow-detail__info-container"},o.a.createElement("div",{className:"tvshow-detail__title"},o.a.createElement("h1",{className:"tvshow-detail__name"},D),o.a.createElement("span",{className:"tvshow-detail__year"},"(",new Date(F).toDateString(),")"),o.a.createElement(u.a,{className:"tvshow-detail__rating",ratingValue:$,size:u.a.sizes.BIG})),o.a.createElement("div",{className:"tvshow-detail__overview-title"},o.a.createElement("h2",{className:"tvshow-detail__overview-label"},"Overview"),o.a.createElement(d.a,{isActive:z,onClick:function(){I({isFavorite:z,tvShow:j})}})),o.a.createElement("p",{className:"tvshow-detail__overview-description"},k))),o.a.createElement("hr",{className:"tvshow-detail__separator"}),o.a.createElement("section",{className:"tvshow-detail__cast"},o.a.createElement("h2",{className:"tvshow-detail__cast-title"},"Tv Show Cast"),o.a.createElement("div",{className:"tvshow-detail__characters"},J.map((function(t){return o.a.createElement(_,{key:t.id,character:t})})))),o.a.createElement("hr",{className:"tvshow-detail__separator"}),o.a.createElement("section",{className:"tvshow-detail__seasons-container"},o.a.createElement("h2",{className:"tvshow-detail__seasons-title"},"Seasons"),o.a.createElement("div",{className:"tvshow-detail__seasons-list"},C.map((function(t){return o.a.createElement(E,{key:t.seasonNumber,season:t,tvShowId:P})})))))}}}]);
//# sourceMappingURL=6.a3502885.chunk.js.map