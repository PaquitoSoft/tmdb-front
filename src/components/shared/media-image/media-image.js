import React, { useRef, useEffect } from 'react';
import { useAppContext } from '../../app-context/app-context';

export default function MediaImage({ path, type = 'poster', size, className = '', ...rest }) {
	const { imagesConfig } = useAppContext();
	const $img = useRef(null);
	const sizes = imagesConfig[`${type}Sizes`];
	
	useEffect(() => {
		let imageUrl;
		const { clientHeight, clientWidth } = $img.current;

		if (!path) {
			imageUrl = `https://picsum.photos/id/1025/${clientWidth}/${clientHeight}?grayscale`;
		} else {
			let imageSizeCode = 'w150';
			for (let index = sizes.length - 1; index >= 0; index--) {
				const sizeCodeValue = Number(sizes[index].substr(1));
				if (clientWidth < sizeCodeValue || isNaN(sizeCodeValue)) {
					imageSizeCode = sizes[index];
				} else {
					break;
				}
			}
			imageUrl = `${imagesConfig.baseUrl}${imageSizeCode}${path}`;
		}
		
		$img.current.src = imageUrl;
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		// eslint-disable-next-line jsx-a11y/alt-text
		<img 
			ref={$img}
			className={`media-image ${className}`}
			src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
			style={{ width: '100%' }}
			{...rest} />
	);
}
