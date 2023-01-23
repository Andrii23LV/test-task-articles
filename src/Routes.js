import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { CircularProgress } from '@mui/material';
const HomePage = lazy(() => import('./pages/HomePage'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));

const AppRoutes = () => {
	return (
		<Suspense
			fallback={
				<CircularProgress
					color='secondary'
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
					}}
				/>
			}
		>
			<Routes>
				<Route path='/' index element={<HomePage />} />
				<Route path='/article/:id' element={<ArticlePage />} />
				<Route path='*' element={<Navigate to='/' replace={true} />} />
			</Routes>
		</Suspense>
	);
};

export default AppRoutes;
