import React, { Suspense, lazy } from 'react';

const LazyStats = lazy(() => new Promise((resolve, reject) => {
  import('./Stats')
    .then(result => resolve(result.default ? result : { default: result }))
    .catch(reject);
}))

const LazyChart = lazy(() => new Promise((resolve, reject) => {
  import('./components/Chart')
    .then(result => resolve(result.default ? result : { default: result }))
    .catch(reject);
}))

const App = () => (
  <div>
    <Suspense fallback="Loading...">
    	<LazyStats />
    </Suspense>
    <Suspense fallback="Loading...">
    	<LazyChart />
    </Suspense>
  </div>
);

export default App;
