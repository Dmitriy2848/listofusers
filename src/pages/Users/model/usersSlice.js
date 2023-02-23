import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
	name: 'users',
	initialState: {
		list: [],
		sortBy: {
			date: false,
			rating: false
		},
		searchBy: ''
	},
	reducers: {
		deleteUser(state, action) {
			const id = action.payload;
			state.list = state.list.filter((user) => user.id !== id);
		},
		sortingUser(state, action) {
			const sortField = action.payload;

			switch (sortField) {
				case 'date':
					state.sortBy.date = true;
					state.sortBy.rating = false;
					break;
				case 'rating':
					state.sortBy.date = false;
					state.sortBy.rating = true;
					break;
				default:
					state.sortBy.date = state.sortBy.rating = false;
			}
		},
		searchUser(state, action) {
			state.searchBy = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			state.list = action.payload;
		});
	}
});

export const fetchUsers = createAsyncThunk('users/fetchUsers', () => {
	return fetch('https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users').then(
		(res) => res.json()
	);
});

export const { deleteUser, sortingUser, searchUser } = usersSlice.actions;
export default usersSlice.reducer;
