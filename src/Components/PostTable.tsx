// src/components/PostTable.tsx
import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
// import { Post } from '../models/Post';
import useFetchPosts from '../hooks/useFetchPosts';

const columns: GridColDef[] = [
  { field: 'userId', headerName: 'User ID', width: 130 },
  { field: 'id', headerName: 'ID', width: 130 },
  { field: 'title', headerName: 'Title', width: 300 },
  { field: 'body', headerName: 'Body', width: 600 },
];

const PostTable: React.FC = () => {
  const { posts, loading, error } = useFetchPosts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid 
        rows={posts} 
        columns={columns} 
        pagination 
        pageSizeOptions={[5, 10, 20]} 
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        getRowId={(row) => row.id} 
      />
    </div>
  );
};

export default PostTable;
