import { Link } from 'react-router-dom';
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Avatar,
} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import {
  demoVideoUrl,
  demoThumbnailUrl,
  demoChannelTitle,
  demoVideoTitle,
  demoChannelUrl,
} from '../utils/constants';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Box from '@mui/material/Box';

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  // console.log(statistics);
  return (
    <Card
      sx={{
        width: { xs: '100%', sm: '358px', md: '320px' },
        borderRadius: '10px',
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          component='img'
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{
            width: { xs: '100%', sm: '358px' },
            height: 180,
            objectFit: 'cover',
          }}
        />
      </Link>
      <CardContent
        sx={{
          backgroundColor: 'black',
          height: '70px',
        }}
      >
        <Box component='div' sx={{ display: 'flex' }}>
          <Avatar
            sx={{
              width: 36,
              height: 36,
              marginRight: '9px',
              marginTop: '8px',
              color: 'black',
            }}
          >
            <YouTubeIcon />
          </Avatar>
          <Box>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
              <Typography variant='subtitle1' color='white' fontWeight='bold'>
                {snippet?.title.slice(0, 50) || demoVideoTitle.slice(0, 60)}
              </Typography>
            </Link>
            <Link
              to={
                snippet?.channelId
                  ? `/channel/${snippet?.channelId}`
                  : demoChannelUrl
              }
            >
              <Typography variant='subtitle2' color='gray' fontWeight='bold'>
                {snippet?.channelTitle || demoChannelTitle}
                <CheckCircle sx={{ fontSize: 12, ml: '5px' }} />
              </Typography>
            </Link>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
