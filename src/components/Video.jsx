import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Stack, Box, Typography, Avatar } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CommentIcon from '@mui/icons-material/Comment';
import ButtonGroup from '@mui/material/ButtonGroup';
import Videos from './Videos';
import { api } from '../utils/api';

const Video = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    api(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    api(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) =>
      setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return 'Loading...';

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount, commentCount },
  } = videoDetail;
  console.log('Video details', videoDetail);

  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        {/* Video details */}
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '50px' }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              height='77vh'
              width='100%'
              controls
            />
            <Typography variant='h5' color='white' fontWeight='bold' p={1}>
              {title}
            </Typography>
            <Stack
              direction='row'
              justifyContent='space-between'
              sx={{ color: '#fff' }}
              paddingLeft={1}
            >
              <Link to={`/channel/${channelId}`}>
                <Box sx={{ display: 'flex' }}>
                  <Avatar
                    sx={{
                      width: 25,
                      height: 25,
                      marginRight: '9px',
                      marginTop: '1px',
                      color: 'black',
                    }}
                  >
                    <YouTubeIcon />
                  </Avatar>
                  <Typography variant='h6subtitle1' color='#fff'>
                    {channelTitle}
                    <CheckCircle
                      sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
                    />
                  </Typography>
                </Box>
              </Link>
              <Stack direction='row' gap='20px' alignItems='center'>
                <ButtonGroup
                  variant='outlined'
                  aria-label='outlined button group'
                >
                  <Button
                    variant='outlined'
                    sx={{ color: 'white' }}
                    startIcon={<ThumbUpIcon />}
                  >
                    <Typography variant='body1'>
                      {parseInt(likeCount).toLocaleString()}
                    </Typography>
                  </Button>
                  <Button
                    variant='outlined'
                    sx={{ color: 'white' }}
                    startIcon={<ThumbDownIcon />}
                  >
                    <Typography variant='body1'>236</Typography>
                  </Button>
                </ButtonGroup>
              </Stack>
            </Stack>
            <Stack>
              <Box sx={{ display: 'flex' }}>
                <VisibilityIcon />
                <Typography variant='body1'>
                  {parseInt(viewCount).toLocaleString()}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <CommentIcon />
                <Typography variant='body1'>
                  
                  {parseInt(commentCount).toLocaleString()}
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent='center'
          alignItems='center'
        >
          <Videos videos={videos} direction='column' />
        </Box>
      </Stack>
    </Box>
  );
};

export default Video;
