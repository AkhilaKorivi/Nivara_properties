export const img = (id, w = 1600, q = 80) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`

export const VIDEOS = {
  hero: 'https://videos.pexels.com/video-files/4686964/4686964-hd_1920_1080_24fps.mp4',
  about: 'https://videos.pexels.com/video-files/20426586/20426586-hd_1920_1080_30fps.mp4',
  walkthrough1: 'https://videos.pexels.com/video-files/4686973/4686973-hd_1920_1080_24fps.mp4',
  walkthrough2: 'https://videos.pexels.com/video-files/4686754/4686754-hd_1920_1080_24fps.mp4',
  walkthrough3: 'https://videos.pexels.com/video-files/4687101/4687101-hd_1920_1080_24fps.mp4',
  walkthrough4: 'https://videos.pexels.com/video-files/4686756/4686756-hd_1920_1080_24fps.mp4',
  demo1: 'https://videos.pexels.com/video-files/4686971/4686971-hd_1920_1080_24fps.mp4',
  demo2: 'https://videos.pexels.com/video-files/4687299/4687299-hd_1920_1080_24fps.mp4',
  demo3: 'https://videos.pexels.com/video-files/4686761/4686761-hd_1920_1080_24fps.mp4',
  demo4: 'https://videos.pexels.com/video-files/4617496/4617496-hd_1920_1080_24fps.mp4',
  demo5: 'https://videos.pexels.com/video-files/8934665/8934665-hd_1920_1080_30fps.mp4',
  demo6: 'https://videos.pexels.com/video-files/8783219/8783219-hd_1920_1080_30fps.mp4'
}

export const IMAGES = {
  heroPoster: img('photo-1531973576160-7125cd663d86', 1920),
  aboutPoster: img('photo-1480714378408-67cf0d13bc1b', 1920)
}