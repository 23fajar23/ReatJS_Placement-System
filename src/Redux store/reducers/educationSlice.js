// educationSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchEducationData = createAsyncThunk('education/fetchEducationData', async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get('http://10.10.102.254:8080/api/education/all', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
  return response.data.data;
});

const educationSlice = createSlice({
  name: 'education',
  initialState: {
    data: [],
    fetchTrigger: false,
  },
  reducers: {
    triggerFetch: (state) => {
      state.fetchTrigger = !state.fetchTrigger;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEducationData.fulfilled, (state, action) => {
        state.data = action.payload;
      });
  },
});

export const { triggerFetch } = educationSlice.actions;
export default educationSlice.reducer;
