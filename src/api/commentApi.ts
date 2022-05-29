import { CommentPayload } from './../interfaces/comment';
import { ListParams, ListResponse, ApiResponse } from './../interfaces/common';
import axiosClient from './axiosClient';

const commentApi = {
  async getApi(params: CommentPayload): Promise<ListResponse<Comment>> {
    const data: ApiResponse<Comment> = await axiosClient.get('/comments', { params });
    return {
      data: data.content,
      pagination: { page: data.number, limit: data.size, total: data.totalElements },
    };
  },
  async create(payload: Comment) {
    await axiosClient.post('/comments', { ...payload });
  },
};

export default commentApi;
