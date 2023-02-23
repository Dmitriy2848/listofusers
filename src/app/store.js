import { configureStore } from '@reduxjs/toolkit';

import { usersSlice } from 'src/pages/Users';

const store = configureStore({
	reducer: { users: usersSlice }
});

export default store;
