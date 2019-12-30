import React, { useRef, useEffect } from 'react';
import { string, number } from 'prop-types';

import { useAppContext } from '../../app-context/app-context';

/*
	*sizes* attribute is to tell the browser how much width the image will use
	from the total available
	(https://web.dev/use-srcset-to-automatically-choose-the-right-image/#what-about-the-display-size-of-the-image)
*/
function MediaImage({ 
	path, 
	type = 'poster', 
	sizes = '', 
	ratio,
	className = '', 
	...rest 
}) {
	const { imagesConfig } = useAppContext();
	const $img = useRef(null);
	const configSizes = imagesConfig[`${type}Sizes`].filter(size => /^w/.test(size));
	
	useEffect(() => {
		if (!path) {
			let { clientHeight, clientWidth } = $img.current;
			if (ratio) clientHeight = Math.trunc(clientWidth / ratio);
			$img.current.src = `https://picsum.photos/id/1025/${clientWidth}/${clientHeight}?grayscale`;
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (path) {
		rest.srcSet = configSizes.map(size => (
			`${imagesConfig.baseUrl}${size}${path} ${size.substr(1)}w`
		));
	}
	
	return (
		// eslint-disable-next-line jsx-a11y/alt-text
		<img 
			ref={$img}
			className={`media-image ${className}`}
			src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
			sizes={sizes}
			style={{ width: '100%' }}
			{...rest} />
	);

}

MediaImage.propTypes = {
	path: string.isRequired, 
	type: string,
	sizes: string, 
	ratio: number,
	className: string
};

export default MediaImage;
