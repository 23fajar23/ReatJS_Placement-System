// educationSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//fetch education data slice
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

//delete education data slice
export const deleteEducationData = createAsyncThunk('education/deleteEducationData', async (name) => {
    const token = localStorage.getItem('token');

    const response = await axios.get('http://10.10.102.254:8080/api/education/all', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    });

    
    const educationToDelete = response.data.data.find(edu => edu.name === name);
    if(!educationToDelete){
        throw new Error('Education not found');
    }

    await axios.delete(`http://10.10.102.254:8080/api/education/${educationToDelete.id}`,{
        headers:{
            'Content-Type' :'application/json',
            'Authorization':`Bearer ${token}`
        }
    });
    return educationToDelete.id;
})


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
      })
      .addCase(deleteEducationData.fulfilled, (state,action) => {
        state.data = state.data.filter(edu => edu.id !== action.payload)
        state.fetchTrigger = !state.fetchTrigger; 
      });
  },
});

export const { triggerFetch } = educationSlice.actions;
export default educationSlice.reducer;
