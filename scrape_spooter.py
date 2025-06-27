import pandas as pd
import time
from spotipy import Spotify
from spotipy.oauth2 import SpotifyClientCredentials

# Load your CSV
df = pd.read_csv("project database.csv")

# Setup Spotify credentials
sp = Spotify(auth_manager=SpotifyClientCredentials(
    client_id="e995bedee3a7406386ee1178e38a8212",
    client_secret="26fa468277ac4cfab31f3a1102a8396e"
))

# Lookup function
def search_album(artist, album):
    query = f"album:{album} artist:{artist}"
    results = sp.search(q=query, type='album', limit=1)
    items = results['albums']['items']
    if items:
        return {
            'spotify_url': items[0]['external_urls']['spotify'],
            'release_date': items[0]['release_date']
        }
    return {'spotify_url': None, 'release_date': None}

# Fill in missing data
for i, row in df[df['url'].isna()].iterrows():
    result = search_album(row['artistName'], row['projectName'])
    df.at[i, 'url'] = result['spotify_url']
    df.at[i, 'releaseDate'] = result['release_date']
    time.sleep(0.2)  # to respect rate limits

# Save result
df.to_csv("updated_project_database.csv", index=False)
print("Updated CSV saved as 'updated_project_database.csv'")
