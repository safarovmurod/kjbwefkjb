import axios from "axios";

const API_URL = "https://6a0f696cd2a9857070354e31.mockapi.io/v1/API";

export async function getUsers() {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getUser(id) {
  try {
    const res = await axios.get(API_URL + "/" + id);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export async function searchUsers(text) {
  try {
    const res = await axios.get(API_URL, {
      params: { search: text },
    });
    return res.data;
  } catch (error) {
    if (error.response?.status === 404) {
      return [];
    }
    console.error(error);
  }
}

export async function createUser(user) {
  try {
    const res = await axios.post(API_URL, user);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export async function updateUser(id, user) {
  try {
    const res = await axios.put(API_URL + "/" + id, user);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteUser(id) {
  try {
    const res = await axios.delete(API_URL + "/" + id);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}
