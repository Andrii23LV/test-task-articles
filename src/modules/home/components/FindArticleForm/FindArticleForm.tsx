import React, { useState, useEffect } from 'react';
import { Box, OutlinedInput, InputAdornment, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Search from '../../../../icons/Search';

const OutlinedInputWrapper = styled(OutlinedInput)(() => ({
	boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
	width: 600,
	maxHeight: 50,
	padding: 10,
	marginTop: 10,
	'& > fieldset': {
		borderColor: '#EAEAEA',
		color: '#575757',
	},
}));

type FindArticleFormProps = {
	handleArticleForm(value: string, e?: React.MouseEvent): void;
};

const FindArticleForm: React.FC<FindArticleFormProps> = ({
	handleArticleForm,
}) => {
	const [value, setValue] = useState<string>('');

	useEffect(() => {
		if (value === '') handleArticleForm(value);
	}, [value]);

	return (
		<Box component='form' noValidate autoComplete='off'>
			<OutlinedInputWrapper
				value={value}
				onChange={(e) => setValue(e.target.value)}
				startAdornment={
					<InputAdornment
						position='start'
						onClick={(e) => handleArticleForm(value, e)}
					>
						<Button type='submit'>
							<Search />
						</Button>
					</InputAdornment>
				}
			/>
		</Box>
	);
};

export default FindArticleForm;
