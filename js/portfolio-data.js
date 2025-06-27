// Portfolio database with project type grouping
const portfolioDatabase = [
  {
    "id": "is_our_children_learning",
    "artistName": "Is Our Children Learning",
    "projectName": "Is Our Children Learning",
    "description": "co-wrote, all production, all arranging",
    "url": "https://open.spotify.com/album/5zhcFEb2pttIfOzgKmxW6Q?si=gyx_3k-DRjaJ23QEq1CcZw",
    "image": "images/resized/iocl_lil.jpg",
    "projectType": "Selected Works",
    "releaseDate": "2022-09-30"
  },
  {
    "id": "kill_me_while_i'm_driving",
    "artistName": "Is Our Children Learning",
    "projectName": "Kill Me While I'm Driving",
    "description": "co-wrote, all production, all arranging",
    "url": "https://open.spotify.com/album/5WCMhEBcFS5AuMNYVcCXOe",
    "image": "images/resized/lil_kmwid.png",
    "projectType": "Selected Works",
    "releaseDate": "2024-07-04"
  },
  {
    "id": "songs_for_rich_people",
    "artistName": "Big Soda",
    "projectName": "Songs for Rich People!",
    "description": "all production, all writing",
    "url": "https://open.spotify.com/album/3uUfO1iIgATtPXrl0AvAl4",
    "image": "images/resized/big_sfrp.png",
    "projectType": "Selected Works",
    "releaseDate": "2020-09-30"
  },
  {
    "id": "big_soda",
    "artistName": "Big Soda",
    "projectName": "Big Soda!",
    "description": "all production, all writing",
    "url": "https://open.spotify.com/album/1dohDK6HhYhQ6vnEZJe5QI",
    "image": "images/resized/lil_big_big_big.jpg",
    "projectType": "Selected Works",
    "releaseDate": "2020-01-07"
  },
  {
    "id": "aw,_poor_you",
    "artistName": "Big Soda",
    "projectName": "Aw, Poor You!",
    "description": "all production, all writing",
    "url": "https://open.spotify.com/album/3LEkVZ6suLHIzUs7o6Cdwb",
    "image": "images/resized/big_apy.jpg",
    "projectType": "Selected Works",
    "releaseDate": "2018-11-29"
  },
  {
    "id": "sugarhead",
    "artistName": "Big Soda",
    "projectName": "Sugarhead!",
    "description": "all production, all writing",
    "url": "https://open.spotify.com/album/4vKCHkXO7pu6H9kVb9aECa",
    "image": "images/resized/lil_sugarhead.jpg",
    "projectType": "Selected Works",
    "releaseDate": "2017-12-12"
  },
  {
    "id": "soda_de_beber",
    "artistName": "Big Soda",
    "projectName": "Soda de Beber",
    "description": "all vocal performance",
    "url": "https://therealbigsoda.bandcamp.com/album/soda-de-beber",
    "image": "images/resized/big_beber.jpg",
    "projectType": "Selected Works",
    "releaseDate": "2019-05-14"
  },
  {
    "id": "surf's_up",
    "artistName": "Surfer Dave",
    "projectName": "Surf's Up!",
    "description": "all production",
    "url": "https://open.spotify.com/album/0Td9C4ZW9n9pfK03UZy9NI",
    "image": "images/resized/lil_surfsup.png",
    "projectType": "Selected Works",
    "releaseDate": "2021-02-11"
  },
  {
    "id": "take_me_somewhere_warm",
    "artistName": "Surfer Dave",
    "projectName": "Take Me Somewhere Warm",
    "description": "all production",
    "url": "https://open.spotify.com/album/5FcnST5e1A5mhldYlSxd3h",
    "image": "images/resized/lil_tmsw.png",
    "projectType": "Selected Works",
    "releaseDate": "2023-12-01"
  },
  {
    "id": "the_waves_are_a_scary_place",
    "artistName": "Surfer Dave",
    "projectName": "the waves are a scary place",
    "description": "all production",
    "url": "https://open.spotify.com/album/5MTtDjq255sriOGlWZTxOr",
    "image": "images/resized/lil_twaasp.png",
    "projectType": "Selected Works",
    "releaseDate": "2024-11-29"
  },
  {
    "id": "dreams,_vol_1",
    "artistName": "poochdreams",
    "projectName": "Dreams, Vol 1",
    "description": "all production",
    "url": "https://open.spotify.com/album/3wnXmhORctJ2LhIGZt9x31?si=-AVGCsKuQGy5rjYwwjNpIA",
    "image": "images/resized/lil_dv1.png",
    "projectType": "Selected Works",
    "releaseDate": "2024-08-05"
  },
  {
    "id": "dreams,_vol_2",
    "artistName": "poochdreams",
    "projectName": "Dreams, Vol 2",
    "description": "all production",
    "url": "https://open.spotify.com/album/44UcMnRTSIJD8HgoenLFge?si=4SKBxYiZSwSiAMHA2KFxZQ",
    "image": "images/resized/lil_dv2.png",
    "projectType": "Selected Works",
    "releaseDate": "2025-02-01"
  },
  {
    "id": "when_i'm_alone_i_feel_weightless",
    "artistName": "Criibaby",
    "projectName": "when i'm alone i feel weightless",
    "description": "all production, co-writing, mixing",
    "url": "https://open.spotify.com/album/1GyU1akWsJvgVvVnlSfNhT",
    "image": "images/resized/lil_wiaifw.png",
    "projectType": "Selected Works",
    "releaseDate": "2024-09-06"
  },
  {
    "id": "crii",
    "artistName": "Criibaby",
    "projectName": "Crii",
    "description": "all production, co-writing, mixing",
    "url": "https://open.spotify.com/album/4HqDcFC4QlVCzBnrADvcpz",
    "image": "images/resized/crii-small.jpeg",
    "projectType": "Selected Works",
    "releaseDate": "2022-06-10"
  },
  {
    "id": "quotidian",
    "artistName": "PandaRaps",
    "projectName": "Quotidian",
    "description": "all production, co-writing, mixing",
    "url": "https://open.spotify.com/album/7hyDQX8jSIJTgfyAZGtvHJ",
    "image": "images/resized/quo-small.jpg",
    "projectType": "Selected Works",
    "releaseDate": "2022-06-10"
  },
  {
    "id": "vulnerable",
    "artistName": "King Sis",
    "projectName": "Vulnerable",
    "description": "all production, co-mixing",
    "url": "https://open.spotify.com/album/69aXkfD7bJROlPuZok3Vf3",
    "image": "images/resized/lil_vul.png",
    "projectType": "Selected Works",
    "releaseDate": "2022-12-02"
  },
  {
    "id": "love_songs_for_everyone",
    "artistName": "Criibaby",
    "projectName": "love songs for everyone",
    "description": "co-produced, mixed",
    "url": "https://open.spotify.com/album/6hMnjP2qa0bOHAX8XDKANe",
    "image": "images/resized/big_lsfe.jpg",
    "projectType": "Selected Works",
    "releaseDate": "2020-10-11"
  },
  {
    "id": "live's_never_that_bad",
    "artistName": "Casey Cope",
    "projectName": "Live's Never That Bad",
    "description": "co-produced",
    "url": "https://open.spotify.com/album/0EKX5jGiRYASpFvefHHZFV?si=5CKqM_W9QNK9zohNGtf74Q",
    "image": "images/resized/lil_lntb.png",
    "projectType": "Selected Works",
    "releaseDate": "2025-04-02"
  },
  {
    "id": "for_now",
    "artistName": "Casey Cope",
    "projectName": "For Now",
    "description": "co-produced, mixed",
    "url": "https://open.spotify.com/album/4XoO1ZggmfsKtGIji1VO5u",
    "image": "images/resized/lil_fn_2.jpg",
    "projectType": "Selected Works",
    "releaseDate": "2020-07-09"
  },
  {
    "id": "dancing",
    "artistName": "Casey Cope",
    "projectName": "Dancing!",
    "description": "co-produced, mixed",
    "url": "https://open.spotify.com/album/2dkzAOT4QdPQSigDHHV6JB",
    "image": "images/resized/lil_dancing.jpg",
    "projectType": "Selected Works",
    "releaseDate": "2019-07-12"
  },
  {
    "id": "stupid_song_titles",
    "artistName": "Casey Cope",
    "projectName": "Stupid Song Titles",
    "description": "co-produced, mixed",
    "url": "https://open.spotify.com/album/0e0Z0HHjt8snpCbL7gVxOg",
    "image": "images/resized/lil_sst.jpg",
    "projectType": "Selected Works",
    "releaseDate": "2018-10-19"
  },
  {
    "id": "getting_high_painting_pictures",
    "artistName": "PandaRaps",
    "projectName": "Getting High Painting Pictures",
    "description": "co-produced, mixed",
    "url": "https://open.spotify.com/album/5NUBbBM3Ld1ses3rLxumXX",
    "image": "images/resized/lil_big_p.png",
    "projectType": "Selected Works",
    "releaseDate": "2020-04-17"
  },
  {
    "id": "portraits",
    "artistName": "PandaRaps",
    "projectName": "Portraits",
    "description": "mixed",
    "url": "https://open.spotify.com/album/2gTFu4a8pUk8xAXOkJgZDS",
    "image": "images/resized/lil_port.png",
    "projectType": "Selected Works",
    "releaseDate": "2022-03-11"
  },
  {
    "id": "hangin'",
    "artistName": "PandaRaps",
    "projectName": "Hangin'",
    "description": "mixed",
    "url": "https://open.spotify.com/album/3SHsxalFQUg2BGdlHgtwk2?si=kGbTebU7T-GGsx140qcHSg",
    "image": "images/resized/lil_hang.jpg",
    "projectType": "Selected Works",
    "releaseDate": "2021-03-21"
  },
  {
    "id": "sometimes_i_eat_when_i_feel_bored",
    "artistName": "PandaRaps",
    "projectName": "Sometimes I Eat When I Feel Bored",
    "description": "mixed",
    "url": "https://open.spotify.com/album/4MXEml4edHu47xP44pMhQh",
    "image": "images/resized/big_eat.jpg",
    "projectType": "Selected Works",
    "releaseDate": "2019-05-31"
  },
  {
    "id": "femboy",
    "artistName": "PandaRaps",
    "projectName": "Femboy",
    "description": "mixed",
    "url": "https://open.spotify.com/album/0nLyUS7ODPQ3PfjXB4XwV0",
    "image": "images/resized/lil_femboy.jpg",
    "projectType": "Selected Works",
    "releaseDate": "2018-10-15"
  },
  {
    "id": "gravity",
    "artistName": "Somni",
    "projectName": "Gravity",
    "description": "co-mixed",
    "url": "https://open.spotify.com/album/6IuxTWLUAeTGxVwAavkBjc",
    "image": "images/resized/lil_gravity.png",
    "projectType": "Selected Works",
    "releaseDate": "2023-09-08"
  },
  {
    "id": "home",
    "artistName": "Somni",
    "projectName": "Home",
    "description": "co-mixed",
    "url": "https://open.spotify.com/album/6vSDLoq9qgSoEHKJm9tSLF",
    "image": "images/resized/lil_homie.jpg",
    "projectType": "Selected Works",
    "releaseDate": "2020-03-27"
  },
  {
    "id": "bloom",
    "artistName": "Somni",
    "projectName": "Bloom",
    "description": "co-mixed",
    "url": "https://open.spotify.com/album/3gro4alLqMrRFroQO5jAqu",
    "image": "images/resized/lil_bloom.jpg",
    "projectType": "Selected Works",
    "releaseDate": "2018-08-17"
  },
  {
    "id": "monk's_evil_lair",
    "artistName": "Monk's Evil Lair",
    "projectName": "Monk's Evil Lair",
    "description": "mixed, executive produced",
    "url": "https://open.spotify.com/album/61iNqab7vq1ZEKf9eAYiKU?si=1T-b7rMRTWuc7wuINHT1QQ",
    "image": "images/resized/big_monk.jpg",
    "projectType": "Selected Works",
    "releaseDate": "2021-02-11"
  },
  {
    "id": "qamp_(vol._1)",
    "artistName": "Qamp",
    "projectName": "Qamp (Vol. 1)",
    "description": "co-produced several tracks, co-mixed",
    "url": "https://open.spotify.com/album/6IKxcuT7LZNA4raa0HqFVe",
    "image": "images/resized/qamp-lil.png",
    "projectType": "Selected Works",
    "releaseDate": "2022-04-28"
  },
  {
    "id": "uh_oh",
    "artistName": "Eat the World",
    "projectName": "Uh Oh!",
    "description": "bassist, vocalist, co-writer",
    "url": "https://open.spotify.com/album/58IiljQ613P9ki0Su4oCDM",
    "image": "images/resized/lil_uhoh.png",
    "projectType": "Selected Works",
    "releaseDate": "2020-04-01"
  },
  {
    "id": "a_hole_in_the_sun",
    "artistName": "Santpoort",
    "projectName": "a hole in the sun",
    "description": "co-produced track 3, mastered",
    "url": "https://open.spotify.com/album/6t6TluVC5DIwUYojT2p4V2",
    "image": "images/resized/lil_holesun.png",
    "projectType": "Selected Works",
    "releaseDate": "2023-05-10"
  },
  {
    "id": "qamp_(vol._2)",
    "artistName": "Qamp",
    "projectName": "Qamp (Vol. 2)",
    "description": "co-produced several tracks",
    "url": "https://open.spotify.com/album/436Pv7KQh5nNoRxf0ggqJj?si=a8CXUiUySKyZ1HAWY_iFlA",
    "image": "images/resized/lil_qamp2.png",
    "projectType": "Selected Works",
    "releaseDate": "2023-2-7"
  },
  {
    "id": "qamp_(vol._3)",
    "artistName": "Qamp",
    "projectName": "Qamp (Vol. 3)",
    "description": "co-produced several tracks",
    "url": "https://open.spotify.com/album/2CcUbb48jO5z76SjGyyacM?si=RnCukQATQliu2adgnrArLQ",
    "image": "images/resized/lil_qamp3.png",
    "projectType": "Selected Works",
    "releaseDate": "2024-04-12"
  },
  {
    "id": "days_ago",
    "artistName": "Joe Nora",
    "projectName": "Days Ago",
    "description": "co-produced track 3",
    "url": "https://open.spotify.com/album/6BEKtjTbo0XR1snYmWLzng",
    "image": "images/resized/lil_dayz.png",
    "projectType": "Selected Works",
    "releaseDate": "2025-05-30"
  },
  {
    "id": "puzzle_face",
    "artistName": "Joe Nora",
    "projectName": "Puzzle Face",
    "description": "co-produced track 13",
    "url": "https://open.spotify.com/album/7mQqXdV6jHbZtakUngjMH9",
    "image": "images/resized/lil_joe1.png",
    "projectType": "Selected Works",
    "releaseDate": "2024-06-07"
  },
  {
    "id": "kah",
    "artistName": "King Sis",
    "projectName": "Kah",
    "description": "produced track 1",
    "url": "https://open.spotify.com/album/4XOESQPQaPUfBklCwZFWWM",
    "image": "images/resized/kah-small.jpg",
    "projectType": "Selected Works",
    "releaseDate": "2022-07-08"
  },
  {
    "id": "up_too_early_vol._2",
    "artistName": "Various Artists",
    "projectName": "Up Too Early Vol. 2",
    "description": "co-produced track 7",
    "url": "https://open.spotify.com/album/2OiPJG8HzvqOfXGfymKrhx?si=jBIi1jdsT1aK77oCckk4cg",
    "image": "images/resized/up2-small.jpg",
    "projectType": "Selected Works",
    "releaseDate": "2021-03-12"
  }
];

// Define the project type order (for consistent display)
const projectTypeOrder = [
  "Selected Works"
];
