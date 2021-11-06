//
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper, Stack, Typography } from '@mui/material';

import './home.css';
import '../styles/fonts.css';

import { HashRouter, Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../loading/Loading';
// ----------------------------------------------------------------------

const Home = () => {
  const [keywords, setKeywords] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 keywords 를 초기화하고
        setError(null);
        setKeywords(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get('http://localhost:8000/api/keywords/');
        setKeywords(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        console.log(e);
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <Loading />;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!keywords) return null;
  console.log(keywords);
  return (
    <div>
      <Container sx={{ pt: '8%' }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h3" sx={{ pl: '3%', mb: '-2%' }}>
            #새싹들
          </Typography>
        </Stack>
        <Grid container spacing={3} sx={{ width: '60%', pl: '2%' }}>
          {keywords.keywords.map((keyword, index) => (
            <Grid item className="itemBox" xs={12} sm={3} md={3} key={index}>
              <Paper className="paper">
                <Link to={`/promises?keyword=${keyword}`}>
                  <div className="keyword"> {keyword} </div>
                </Link>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
