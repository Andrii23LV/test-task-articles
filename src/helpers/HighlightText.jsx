export const HighlightText = ({ children: text = '', query }) => {
	const queries = query.split(' ');

	const matches = [...text.matchAll(new RegExp(queries.join('|'), 'ig'))];
	const startText = text.slice(0, matches[0]?.index);

	return (
		<span>
			{startText}
			{matches.map((match, i) => {
				const startIndex = match.index;
				const currentText = match[0];
				const endIndex = startIndex + currentText.length;
				const nextIndex = matches[i + 1]?.index;
				const untilNextText = text.slice(endIndex, nextIndex);

				return (
					<span key={i}>
						<mark>{currentText}</mark>
						{untilNextText}
					</span>
				);
			})}
		</span>
	);
};
