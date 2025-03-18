import axios from "axios";
import { authService } from "./authService";

const API_URL = "http://localhost:3000";

export const streamService = {
  async getStreams() {
    const user = authService.getCurrentUser();
    const response = await axios.get(`${API_URL}/auth/streaming-services`, {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    return response.data;
  },

  async addStream(streamData) {
    const user = authService.getCurrentUser();
    const response = await axios.post(
      `${API_URL}/auth/streaming-services`,
      streamData,
      {
        headers: { Authorization: `Bearer ${user.token}` },
      }
    );
    return response.data;
  },

  async deleteStream(streamId) {
    const user = authService.getCurrentUser();
    const response = await axios.delete(
      `${API_URL}/auth/streaming-services/${streamId}`,
      {
        headers: { Authorization: `Bearer ${user.token}` },
      }
    );
    return response.data;
  },
};
