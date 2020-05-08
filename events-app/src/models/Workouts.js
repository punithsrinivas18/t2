import { api } from './api';

export async function getWorkout() {
  const x = await api('Workouts');
  return x;
}

export async function addWorkout(data) {
  const x = await api('Workouts', data);
  return x;
}

export async function get(data) {
  const x = await api('Workouts/getID', data); 
  return x;
}
export async function updateWorkouts(data) {
  const x = await api('Workouts', data);
  return x;
}